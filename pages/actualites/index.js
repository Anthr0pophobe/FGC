import useSWR from 'swr'
import Link from 'next/link'
import Article from '../../src/components/Article'


const fetcher = (...args) => fetch(...args).then((res) => res.json())

const actualites = () => {

    const { data, error } = useSWR('http://localhost:3008/api/articles/', fetcher)
  
    const articles = data ? data.data.articles : 'none'

    return (
        <>
        <div className='my-5 flex flex-wrap'>
                {articles !== 'none' ? articles.map((article) =><Article key={article.id} donnees={article} /> ) : <div>pas article</div>}
        </div>
        </>
    );
}

export default actualites