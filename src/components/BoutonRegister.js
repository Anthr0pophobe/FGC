import useSWR from 'swr'
import { getCookie } from "cookies-next";


const fetcher = (...args) => fetch(...args).then((res) => res.json())

const BoutonRegister = ({donneesTournoi}) => {

    const userId = getCookie('userId')
    const tournoiId = donneesTournoi.id
    var userAlready = false


    if(userId) {const { data, error } = useSWR(`http://localhost:3008/api/users/${userId}`, fetcher)}

    async function registerTournoi() {
        try {
            await fetch(`http://localhost:3008/api/users/${userId}/register/${tournoiId}`, {
                method: 'POST',
                headers: {"Access-Control-Allow-Origin": "*"}
            })     
        } catch(erreur) {
            console.log(erreur)
            return false
        }  
    }

    
    if(data) {
        data.data.participea.map((t) => {
            if(t.tournoiId === donneesTournoi.id) {
                userAlready = true
            }
        })
    }

    return (data && donneesTournoi) ? (
        <>
        {userAlready ? <div className='text-green-600 text-center font-bold border border-slate-300 p-3'>
                            Vous êtes déjà inscrit à ce tournoi<br/>Vous devez envoyer votre pseudo in-game par mail à l'organisateur en précisant votre pseudo Contrast
                        </div>
        : <div id="button" className="flex flex-col p-5">
            <button onClick={registerTournoi} type="button" className="w-fit p-4 bg-blue text-white hover:bg-[#5D63D1]/[.9] rounded-lg" >
                        <div className="flex flex-row items-center justify-center">
                            <div className="mr-2 flex">
                                <span className="font-bold">S'inscrire au tournoi</span>
                            </div>
                        </div>
            </button>
        </div>  }

        </>
    ) : (<div className='text-red-800 font-bold'>Vous devez être connecté pour vous inscrire à un tournoi</div>);
}

export default BoutonRegister