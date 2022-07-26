import useSWR from 'swr'
import Tournoi from '../../src/components/Tournoi';
import { useRef, useState } from "react";
import { getCookie } from 'cookies-next';
import Link from 'next/link';



const fetcher = (...args) => fetch(...args).then((res) => res.json())

const tournois = () => {
    const { data, error } = useSWR('http://localhost:3008/api/tournois/', fetcher)
    const tournois = data ? data.data.tournois : 'none'

    const [tournoiSearch, setTournoiSearch] = useState()

    const clickPoint = useRef();
    const handleFocus = () => {
        clickPoint.current.style.display = "none";
    };

    const handleBlur = () => {
        clickPoint.current.style.display = "block";
    };
    const search = event => {
        setTournoiSearch(event.target.value)
    }


    return tournois ? (
        <>
        <div className="items-center px-4 flex justify-center mt-5" >
            <div className="relative mr-3">
                <div className="absolute top-3 left-3 items-center" ref={clickPoint}>
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input
                    type="text"
                    className="block p-2 pl-10 w-70 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:pl-3"
                    placeholder="Rechercher un tournoi"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={search}
                />
            </div>

            {getCookie('userId') ? <div id="button" className='mt-5'>
                                    <Link href='/tournois/createTournoi' replace>
                                        <button type="button" className="w-fit p-2 bg-blue text-white hover:bg-[#5D63D1]/[.9] rounded-lg" >
                                                    <div className="flex flex-row items-center justify-center">
                                                        <div className="mr-2 flex">
                                                            Créer un tournoi
                                                        </div>
                                                    </div>
                                        </button>
                                    </Link>
                                </div> 
                            : <div className='text-red-800 font-bold'>Vous devez être connecté pour créer un tournoi !</div>}

        </div>

        {!tournoiSearch ? <div className='my-5 flex flex-wrap justify-around'>
                            {tournois !== 'none' ? tournois.map((tournoi) => <Tournoi key={tournoi.id} donnees={tournoi} />) : <div>Il n'y a aucun tournoi en cours</div>}
                        </div>
                        : <div className='my-5 flex flex-wrap justify-around'>
                            {tournois !== 'none' ? tournois.map((tournoi) => {
                                                                    if( tournoi.nom.toLowerCase().includes(tournoiSearch.toLowerCase()) ) return <Tournoi key={tournoi.id} donnees={tournoi} />
                                                                    
                                                                }) 
                                                : <div>Il n'y a aucun tournoi en cours</div>}
                        </div>}
  
        </>
    ) : (<div>Il n'y a aucun tournoi en cours</div>);
}

export default tournois