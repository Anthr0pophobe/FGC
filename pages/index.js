import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import { deleteCookie, getCookies } from 'cookies-next';
import Article from '../src/components/Article';
import useSWR from 'swr'
import Link from 'next/link'
import ListTournois from '../src/components/ListTournois'


const fetcher = (...args) => fetch(...args).then((res) => res.json())

const index = () => {

  const { data, error } = useSWR('http://localhost:3008/api/articles/', fetcher)
  const articles = data ? data.data.articles : 'none'


  return (
    <>
    <div className='border-b border-b-[#0377FF] w-full h-fit mb-4  mt-5'>
        <h2 className='p-1 text-xl font-bold'>Actualité</h2>
    </div>
    <div className='my-5 flex flex-wrap'>     
      {articles !== 'none' ? articles.slice(0, 3).map((article) => <Article key={article.id} donnees={article} /> ) : <div>Il n'y as aucun article</div>}
    </div>
    <Link href="/actualites" replace><button className='border-slate-300 border p-3 w-fit mb-5 hover:border-slate-500'>Plus d'actualités</button></Link>
    
    <div className='border-b border-b-[#0377FF] w-full h-fit mb-4  mt-5'>
        <h2 className='p-1 text-xl font-bold'>Tournois</h2>
    </div>

    <ListTournois />
    
    </>
  );
}

export default index