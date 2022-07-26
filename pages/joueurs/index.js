import useSWR from 'swr'
import { useRef, useState } from "react";
import CardJoueur from '../../src/components/CardJoueur';
import Link from 'next/link';


const fetcher = (...args) => fetch(...args).then((res) => res.json())

const joueurs = () => {
    const { data, error } = useSWR('http://localhost:3008/api/users/', fetcher)
    const users = data ? data.data : 'none'

    const [userSearch, setUserSearch] = useState()

    const clickPoint = useRef();
    const handleFocus = () => {
        clickPoint.current.style.display = "none";
    };

    const handleBlur = () => {
        clickPoint.current.style.display = "block";
    };
    const search = event => {
        setUserSearch(event.target.value)
    }

    return users ? (
        <>
        <div className="items-center px-4 flex justify-center" >
            <div className="relative mr-3">
                <div className="absolute top-3 left-3 items-center" ref={clickPoint}>
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input
                    type="text"
                    className="block p-2 pl-10 w-70 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:pl-3"
                    placeholder="Rechercher un utilisateur"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={search}
                />
            </div>
        </div>

        {!userSearch ? <div className='my-5 flex flex-wrap justify-around'>
                            {users !== 'none' && users.map((user) => <CardJoueur key={user.id} user={user} />)}
                        </div>
                        : <div className='my-5 flex flex-wrap justify-around'>
                            {users !== 'none' ? users.map((user) => {
                                                                    if( user.pseudo.toLowerCase().includes(userSearch.toLowerCase()) ) 
                                                                        return <CardJoueur key={user.id} user={user} />
                                                                }) 
                                                : <div>Aucun utilisateur n'as été trouver</div>}
                        </div>}
  
        </>
    ) : (<div>Il n'y a aucun tournoi en cours</div>);
}

export default joueurs