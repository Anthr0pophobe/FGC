import Image from "next/image";
import Link from 'next/link'
import useSWR from 'swr'


const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Article = ({donnees}) => {

    const { data, error } = useSWR(`http://localhost:3008/api/users/${donnees.userId}`, fetcher)
    
    const date = new Date(donnees.date)
    var y = date.getFullYear()
    var m = date.getMonth()
    m = ('0' + m).slice(-2)

    var d = date.getDay()
    d = ('0' + d).slice(-2)

    date = y + '-' + m + '-' + d    
    
    return data ? (
        <>
        <article className="rounded-lg shadow-lg w-full p-4">
            <Link href={`/actualites/${donnees.id}`} replace>
                <a>
                <Image alt="Logo jeu" className="block h-auto w-full" src={donnees.titre.toLowerCase().includes("smash bros") && "/../public/bros.png"
                                                                            || donnees.titre.toLowerCase().includes("guilty gear") && "/../public/ggs.png"
                                                                            || donnees.titre.toLowerCase().includes("dragon ball") && "/../public/fighterz.png"} layout="intrinsic" width={donnees.titre.toLowerCase().includes("smash bros") && "100px"
                                                                                                                                                                                            || donnees.titre.toLowerCase().includes("guilty gear") && "350px"
                                                                                                                                                                                            || donnees.titre.toLowerCase().includes("dragon ball") && "200px"} height={donnees.titre.toLowerCase().includes("smash bros") && "100px"
                                                                                                                                                                                                                                                                        || donnees.titre.toLowerCase().includes("guilty gear") && "80px"
                                                                                                                                                                                                                                                                        || donnees.titre.toLowerCase().includes("dragon ball") && "80px"}/>
                </a>
            </Link>

            <div className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg no-underline hover:underline text-black">
                    <Link href={`/actualites/${donnees.id}`} replace>
                        {donnees.titre}
                    </Link>
                </h1>
                <p className="text-grey-darker text-sm">
                    {date}    , écrit par {data.data.pseudo}
                </p>
            </div>

            <p className="hover:underline mb-5">
                <Link href={`/actualites/${donnees.id}`} replace>
                    {(donnees.contenu).length > 250 ? (donnees.contenu).substring(0, 250) + '...' : donnees.contenu}
                </Link>
            </p>
        </article>
        </>
    ) : (<><div>none</div></>)
}

export default Article