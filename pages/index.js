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

import Logout from '../src/components/Logout';
import { getCookies } from 'cookies-next';
import Article from '../src/components/Article';
import useSWR from 'swr'
import Link from 'next/link'


const fetcher = (...args) => fetch(...args).then((res) => res.json())

const index = () => {

  const { data, error } = useSWR('http://localhost:3008/api/articles/', fetcher)
  const articles = data ? data.data.articles : 'none'

  
  const { dataT, errorT } = useSWR('http://localhost:3008/api/tournois/', fetcher)
  const tournois = dataT ? dataT.data.tournois : 'none'
  console.log('tournoi -> dataT = ', dataT)
  

  return (
    <>
    <div className='border-b border-b-[#0377FF] w-full h-fit mb-4  mt-5'>
        <h2 className='p-1 text-xl'>Actualité</h2>
    </div>
    <div className='my-5 flex flex-wrap'>     
      {articles !== 'none' ? articles.slice(0, 2).map((article) => <Article key={article.id} donnees={article} /> ) : <div>Il n'y as aucun article</div>}
    </div>
    <Link href="/actualites" replace><button className='border-slate-300 border p-3 w-fit mb-5 hover:border-slate-500'>Plus d'actualités</button></Link>
    
    <div className='border-b border-b-[#0377FF] w-full h-fit mb-4  mt-5'>
        <h2 className='p-1 text-xl'>Tournois</h2>
    </div>

    <div className='my-5 flex flex-wrap'>
            {tournois !== 'none' ? tournois.slice(0,3).map((tournoi) => <Tournoi key={tournoi.id} donnees={tournoi} />) : <div>pas de tournoi</div>}
        </div>
    
    </>
  );
}

export default index