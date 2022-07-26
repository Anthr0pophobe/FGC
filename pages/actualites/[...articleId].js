import { useRouter } from "next/router";
import useSWR from 'swr'
import Image from "next/image";
import Router from "next/router";
import { getCookie } from "cookies-next";


const fetcher = (...args) => fetch(...args).then((res) => res.json())

const ArticleDetail = () => {
    const router = useRouter();
    const articleId = router.query.articleId
    const { data, error } = useSWR(`http://localhost:3008/api/articles/${articleId}`, fetcher)
    
    const details = data && data.data

    if(details) {
        var mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
        var date = new Date(details.date)
        const moisDb = mois[date.getMonth()]
        date = date.getDate() + ' ' + moisDb + ' ' + date.getFullYear()
    }

    function retour() {
        Router.replace('/actualites')
    }
    async function deleteArticle() {
        try {
            await fetch(`http://localhost:3008/api/articles/delete${articleId}`, {
                method: 'DELETE',
                headers: {"Access-Control-Allow-Origin": "*" }
            })     
        } catch(erreur) {
            console.log(erreur)
            return false
        }

        Router.replace('/actualites')
    }

    console.log('cookie = ',getCookie('userId'))
    
    return details ? (
        <>
        {parseInt(getCookie('userId')) === details.userId ? 
            <div id="button" className="flex flex-col">
                <button type="button" onClick={deleteArticle} className="w-fit p-2 bg-orange text-white hover:bg-[#5D63D1]/[.9] rounded-lg mt-4" >
                            <div className="flex flex-row items-center justify-center">
                                <div className="mr-2 flex">
                                    Supprimer votre article
                                </div>
                            </div>
                </button>
            </div>
         : <div></div>}

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

        <article className="rounded-lg shadow-lg w-full p-4 mb-5 text-center">
            <Image alt="Logo jeu" src={details.titre.toLowerCase().includes("smash bros") && "/../public/bros.png"
                                                                            || details.titre.toLowerCase().includes("guilty gear") && "/../public/ggs.png"
                                                                            || details.titre.toLowerCase().includes("dragon ball") && "/../public/fighterz.png"} width={details.titre.toLowerCase().includes("smash bros") && "250px"
                                                                                                                                                                        || details.titre.toLowerCase().includes("guilty gear") && "350px"
                                                                                                                                                                        || details.titre.toLowerCase().includes("dragon ball") && "200px"} height={details.titre.toLowerCase().includes("smash bros") && "240px"
                                                                                                                                                                                                                                                    || details.titre.toLowerCase().includes("guilty gear") && "80px"
                                                                                                                                                                                                                                                    || details.titre.toLowerCase().includes("dragon ball") && "80px"}/>

            <h1 className="text-xl font-bold mb-1">{details.titre}</h1>
            <p className="mb-7">Ecrit le {date}</p>

            <p className="text-justify">{details.contenu.slice(0, details.contenu.indexOf('.',500) + 1)}</p>
            <br/>
            <p className="text-justify">{details.contenu.slice(details.contenu.indexOf('.',500) + 1)}</p>

        </article>
        
        </>
    ) : (<><p>Loadig ...</p></>);
}

export default ArticleDetail