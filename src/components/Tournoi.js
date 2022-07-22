import Image from "next/image";
import Link from 'next/link'
import useSWR from 'swr'


const Tournoi = ({donnees}) => {

    console.log('tournoi -> donnees = ', donnees)
    
    const dateDebut = new Date(donnees.dateDebut)
    var y = dateDebut.getFullYear()
    var m = dateDebut.getMonth()
    m = ('0' + m).slice(-2)

    var d = dateDebut.getDay()
    d = ('0' + d).slice(-2)

    dateDebut = y + '-' + m + '-' + d

    const heureDebut = new Date(donnees.dateDebut)
    var h = heureDebut.getHours()
    var mi = heureDebut.getMinutes()

    h = ('0' + h).slice(-2)
    mi = ('0' + mi).slice(-2)

    heureDebut = h + 'h' + mi

    const dateFin = new Date(donnees.dateFin)
    var y = dateFin.getFullYear()
    var m = dateFin.getMonth()
    m = ('0' + m).slice(-2)

    var d = dateFin.getDay()
    d = ('0' + d).slice(-2)

    dateFin = y + '-' + m + '-' + d

    const heureFin = new Date(donnees.dateFin)
    var h = heureFin.getHours()
    var mi = heureFin.getMinutes()

    h = ('0' + h).slice(-2)
    mi = ('0' + mi).slice(-2)

    heureFin = h + 'h' + mi

    return donnees ? (
        <>
        <article className="rounded-lg shadow-lg w-full p-4 flex flex-col justify-center items-center">
            <Link href={`/tournois/${donnees.id}`} replace>
                <a>
                <Image alt="Logo jeu" className="block h-auto w-full" src={donnees.nom.includes('SSBU') && "/../public/bros.png"
                                                                            || donnees.nom.includes('GGS') && "/../public/ggs.png"
                                                                            || donnees.nom.includes('DBFZ') && "/../public/fighterz.png"} 
                                                                    layout="intrinsic" 
                                                                    width={donnees.nom.includes("SSBU") && "100px"
                                                                            || donnees.nom.includes("GGS") && "350px"
                                                                            || donnees.nom.includes("DBFZ") && "200px"} 
                                                                    height={donnees.nom.includes("SSBU") && "100px"
                                                                            || donnees.nom.includes("GGS") && "80px" 
                                                                            || donnees.nom.includes("DBFZ") && "80px"} />
                </a>
            </Link>

            <div className="flex flex-col items-start justify-start leading-tight p-2 md:p-4">
                <h1 className="text-lg no-underline hover:underline text-black">
                    <Link href={`/tournois/${donnees.id}`} replace>{donnees.nom}</Link>
                </h1>
                <p className="text-grey-darker text-sm mt-2">
                    <span className="font-bold">Début</span> : {dateDebut} à {heureDebut}
                </p>
                <p className="text-grey-darker text-sm mt-2">
                    <span className="font-bold">Fin</span> : {dateFin} à {heureFin}
                </p>
            </div>

            <p className="mb-1">
                {donnees.nbParticipants} Participants
            </p>
        </article>
        </>
    ) : (<><div>none</div></>)
}

export default Tournoi