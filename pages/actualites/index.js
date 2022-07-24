import useSWR from 'swr'
import Link from 'next/link'
import Article from '../../src/components/Article'
import { getCookie } from 'cookies-next';



const fetcher = (...args) => fetch(...args).then((res) => res.json())

const actualites = () => {

    const { data, error } = useSWR('http://localhost:3008/api/articles/', fetcher)
  
    const articles = data ? data.data.articles : 'none'

    return (
        <>
        {(getCookie('userId') === "4" || getCookie('userId') === "2" || getCookie('userId') === "3")
                                 && <div id="button">
                                        <Link href='/actualites/createArticle' replace>
                                            <button type="button" className="w-fit p-2 bg-blue text-white hover:bg-[#5D63D1]/[.9] rounded-lg mt-5" >
                                                        <div className="flex flex-row items-center justify-center">
                                                            <div className="mr-2 flex">
                                                                Créer un article
                                                            </div>
                                                        </div>
                                            </button>
                                        </Link>
                                    </div> }

        <div className='my-5 flex flex-wrap'>
                {articles !== 'none' ? articles.map((article) =><Article key={article.id} donnees={article} /> ) : <div>pas article</div>}
        </div>
        </>
    );
}

export default actualites