import { useRouter } from "next/router";
import useSWR from 'swr'
import Image from "next/image";


const fetcher = (...args) => fetch(...args).then((res) => res.json())

const ArticleDetail = () => {
    const router = useRouter();
    const articleId = router.query.articleId
    const { data, error } = useSWR(`http://localhost:3008/api/articles/${articleId}`, fetcher)
    
    const details = data && data.data

    if(details) {
        var date = new Date(details.date)
        var y = date.getFullYear()
        var m = date.getMonth()
        m = ('0' + m).slice(-2)

        var d = date.getDay()
        d = ('0' + d).slice(-2)

        date = y + '-' + m + '-' + d 
    }
    
    return details ? (
        <>
        <article class="rounded-lg shadow-lg w-full p-4 mb-5">
            <Image alt="Logo jeu" src={details.titre.toLowerCase().includes("smash bros") && "/../public/bros.png"
                                                                            || details.titre.toLowerCase().includes("guilty gear") && "/../public/ggs.png"
                                                                            || details.titre.toLowerCase().includes("dragon ball") && "/../public/fighterz.png"} width={details.titre.toLowerCase().includes("smash bros") && "250px"
                                                                                                                                                                        || details.titre.toLowerCase().includes("guilty gear") && "350px"
                                                                                                                                                                        || details.titre.toLowerCase().includes("dragon ball") && "200px"} height={details.titre.toLowerCase().includes("smash bros") && "240px"
                                                                                                                                                                                                                                                    || details.titre.toLowerCase().includes("guilty gear") && "80px"
                                                                                                                                                                                                                                                    || details.titre.toLowerCase().includes("dragon ball") && "80px"}/>

            <h1 className="text-xl font-bold mb-1">{details.titre}</h1>
            <p className="mb-7">Ecrit le {details.date.substring(0,10)}</p>

            <p>{details.contenu}</p>

        </article>
        
        </>
    ) : (<><p>Loadig ...</p></>);
}

export default ArticleDetail