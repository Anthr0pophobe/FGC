import { useRouter } from "next/router";
import useSWR from 'swr'
import Image from "next/image";
import Link from "next/link";


const fetcher = (...args) => fetch(...args).then((res) => res.json())

const TournoiDetail = () => {
    const router = useRouter();
    const tournoiId = router.query.tournoiId
    const { data, error } = useSWR(`http://localhost:3008/api/tournois/${tournoiId}`, fetcher)
    
    const details = data && data.data
    console.log('tournoiDetail -> details = ', details) 

    if(details) {
        const dateDebut = new Date(details.dateDebut)
        var y = dateDebut.getFullYear()
        var m = dateDebut.getMonth()
        m = ('0' + m).slice(-2)
    
        var d = dateDebut.getDay()
        d = ('0' + d).slice(-2)
    
        dateDebut = y + '-' + m + '-' + d
    
        const heureDebut = new Date(details.dateDebut)
        var h = heureDebut.getHours()
        var mi = heureDebut.getMinutes()
    
        h = ('0' + h).slice(-2)
        mi = ('0' + mi).slice(-2)
    
        heureDebut = h + 'h' + mi
    
        const dateFin = new Date(details.dateFin)
        var y = dateFin.getFullYear()
        var m = dateFin.getMonth()
        m = ('0' + m).slice(-2)
    
        var d = dateFin.getDay()
        d = ('0' + d).slice(-2)
    
        dateFin = y + '-' + m + '-' + d
    
        const heureFin = new Date(details.dateFin)
        var h = heureFin.getHours()
        var mi = heureFin.getMinutes()
    
        h = ('0' + h).slice(-2)
        mi = ('0' + mi).slice(-2)
    
        heureFin = h + 'h' + mi
    }
    
    
    return details ? (
        <>
        <article class="rounded-lg shadow-lg w-full p-4 flex flex-col justify-center items-center">
            <Image alt="Logo jeu" className="block h-auto w-full" src={details.nom.includes('SSBU') && "/../public/bros.png"
                                                                        || details.nom.includes('GGS') && "/../public/ggs.png"
                                                                        || details.nom.includes('DBFZ') && "/../public/fighterz.png"} 
                                                                layout="intrinsic" 
                                                                width={details.nom.includes("SSBU") && "100px"
                                                                        || details.nom.includes("GGS") && "350px"
                                                                        || details.nom.includes("DBFZ") && "200px"} 
                                                                height={details.nom.includes("SSBU") && "100px"
                                                                        || details.nom.includes("GGS") && "80px" 
                                                                        || details.nom.includes("DBFZ") && "80px"} />
            

            <div className="flex flex-col items-start justify-start leading-tight p-2 md:p-4">
                <h1 className="text-lg no-underline text-black">
                    {details.nom}
                </h1>
                <p className="text-grey-darker text-sm mt-2">
                    <span className="font-bold">Début</span> : {dateDebut} à {heureDebut}
                </p>
                <p className="text-grey-darker text-sm mt-2">
                    <span className="font-bold">Fin</span> : {dateFin} à {heureFin}
                </p>
            </div>

            <p className="mb-1">
                {details.nbParticipants} Participants
            </p>

            <div id="button" className="flex flex-col w-2/5 my-5">
                <button type="button" className="w-full py-4 bg-blue text-white hover:bg-[#5D63D1]/[.9] rounded-lg" >
                            <div className="flex flex-row items-center justify-center">
                                <div className="mr-2">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" ></path>
                                    </svg>
                                </div>
                                
                                <input className="font-bold" value="S'inscrire au tournoi" type="submit" />
                            </div>
                </button>
            </div>
        </article>
        </>
    ) : (<><p>Loadig ...</p></>);
}

export default TournoiDetail