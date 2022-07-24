import { useRouter } from "next/router";
import useSWR from 'swr'
import Router from "next/router";
import Tournoi from "../../src/components/Tournoi";
import BoutonRegister from "../../src/components/BoutonRegister";


const fetcher = (...args) => fetch(...args).then((res) => res.json())

const TournoiDetail = () => {
    const router = useRouter();
    const tournoiId = parseInt(router.query.tournoiId)
    const { data, error } = useSWR(`http://localhost:3008/api/tournois/${tournoiId}`, fetcher)
    
    const details = data && data.data
    console.log('tournoiDetail -> details = ', details) 

    if(details) {
        const jours = ["Lundi", "Mardi", 'Mercredi', 'Jeudi', "Vendredi", "Samedi", "Dimanche"]
        var mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
        
        const dateDebut = new Date(details.dateDebut)
        const dayDb = jours[dateDebut.getDay()]
        const moisDb = mois[dateDebut.getMonth()]
        dateDebut = dayDb + ' '+ dateDebut.getDate() + ' ' + moisDb + ' ' + dateDebut.getFullYear()

        const dateFin = new Date(details.dateFin)
        const dayDf = jours[dateFin.getDay()]
        const moisDf = mois[dateFin.getMonth()]
        dateFin = dayDf + ' '+ dateFin.getDate() + ' ' + moisDf + ' ' + dateFin.getFullYear()
    
        const heureDebut = new Date(details.dateDebut)
        var h = heureDebut.getHours()
        var mi = heureDebut.getMinutes()
    
        h = ('0' + h).slice(-2)
        mi = ('0' + mi).slice(-2)
    
        heureDebut = h + 'h' + mi
    
        const heureFin = new Date(details.dateFin)
        var h = heureFin.getHours()
        var mi = heureFin.getMinutes()
    
        h = ('0' + h).slice(-2)
        mi = ('0' + mi).slice(-2)
    
        heureFin = h + 'h' + mi
    }
    
    function retour() {
        Router.replace('/tournois')
    }

    return details ? (
        <>
        <div id="button" className="flex flex-col">
            <button type="button" onClick={retour} className="w-fit p-2 bg-blue text-white hover:bg-[#5D63D1]/[.9] rounded-lg" >
                        <div className="flex flex-row items-center justify-center">
                            <div className="mr-2 flex">
                                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-lidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" ></path>
                                </svg>
                                Retour
                            </div>
                        </div>
            </button>
        </div>

            <div className="border-b border-b-[#0377FF] w-full h-fit ">
                <h1 className="font-bold mb-5">Organisateur du tournoi</h1>      
            </div>
                    
            <ul className="">
                <li>Nom : {details.tournois_owner.nom}</li>
                <li>Email : {details.tournois_owner.mail}</li>
                <li>Téléphone : {details.tournois_owner.numero}</li>
            </ul>
            
            <div className="flex flex-col items-center">
                <Tournoi donnees={details}/>

                <BoutonRegister donneesTournoi={details}/>
            </div>
           
    </>
    ) : (<><p>Loadig ...</p></>);
}

export default TournoiDetail