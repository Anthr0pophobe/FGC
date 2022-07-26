import useSWR from 'swr'
import { getCookie } from "cookies-next";
import FinTournoi from "./FinTournoi";


const fetcher = (...args) => fetch(...args).then((res) => res.json())

const BoutonRegister = ({donneesTournoi, idJeu}) => {

    const userId = getCookie('userId')
    const tournoiId = donneesTournoi.id
    var userAlready = false


    if(userId) {const { data, error } = useSWR(`http://localhost:3008/api/users/${userId}`, fetcher)}

    async function addParticipant() {
        try {
            console.log('ddd = ',donneesTournoi)
            const part = parseInt(donneesTournoi.nbParticipants) + 1
            console.log('cccc = ',part)
            await fetch(`http://localhost:3008/api/tournois/${tournoiId}/update`, {
                method: 'PUT',
                body: JSON.stringify({
                    "nbParticipants": part
                }),
                headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json'}
            })     
        } catch(erreur) {
            console.log(erreur)
            return false
        }  
    }

    async function registerTournoi() {
        try {
            await fetch(`http://localhost:3008/api/users/${userId}/register/${tournoiId}`, {
                method: 'PUT',
                headers: {"Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'}
            })     
        } catch(erreur) {
            console.log(erreur)
            return false
        }  

        addParticipant()
    }

    
    if(data) {
        data.data.participea.map((t) => {
            if(t.tournoiId === donneesTournoi.id) {
                userAlready = true
            }
        })
    }

    let dateFin = donneesTournoi && new Date(donneesTournoi.dateFin)
    let dateActuel = new Date()
    let fini = false

    if(dateActuel >= dateFin) {
        fini = true
    }

    return (data && donneesTournoi) ? (
        <>
        {(userAlready && !fini) ? <div className='text-green-600 text-center font-bold border border-slate-300 p-3'>
                            Vous êtes inscrit à ce tournoi<br/>Vous devez envoyer votre pseudo in-game par mail à l'organisateur en précisant votre pseudo Contrast
                        </div>
        : (userAlready && fini) ? <FinTournoi tournoi={donneesTournoi} jeuId={idJeu} user={data.data}/>
        : fini ? <div className='text-red-600 text-center font-bold border border-slate-300 p-3 mb-5'>Le tournoi est terminer</div>
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