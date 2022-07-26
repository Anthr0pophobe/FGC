import Statistiques from "../../src/components/Statistiques";
import useSWR from 'swr'
import { useRouter } from "next/router";
import Router from "next/router";


const fetcher = (...args) => fetch(...args).then((res) => res.json())

const profilJoueur = () => {

    const router = useRouter();
    const idJ = router.query.joueurId ? router.query.joueurId[0] : 'none'

    const { data, error } = useSWR(`http://localhost:3008/api/users/${idJ}`, fetcher)
    let u = data ? data.data : 'none'

    function retour() {
        Router.replace('/joueurs')
    }

    return u ? (
        <>
        <div id="button" className="flex flex-col">
            <button type="button" onClick={retour} className="w-fit p-2 bg-blue text-white hover:bg-[#5D63D1]/[.9] rounded-lg mt-4" >
                        <div className="flex flex-row items-center justify-center">
                            <div className="mr-2 flex">
                                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" ></path>
                                </svg>
                                Retour
                            </div>
                        </div>
            </button>
        </div>
        <h1 className='font-medium leading-tight text-4xl mt-3 text-blue'>Statistiques du joueur : {u.pseudo}</h1>
        <Statistiques user={u} />
        </>
    ) : <div>Loading...</div>;
}

export default profilJoueur