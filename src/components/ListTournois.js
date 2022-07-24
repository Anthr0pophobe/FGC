import Tournoi from "./Tournoi";
import { useState, useEffect } from "react";
import Link from "next/link";

const ListTournois = () => {
    const [ tournois, setTournois ] = useState([])

    useEffect(() => {
        fetch('http://localhost:3008/api/tournois/').then(response => response.json()).then(d => setTournois(d.data.tournois));
    }, []);
    
    return tournois ? (
        <div className='my-5 flex flex-wrap items-center'>
            {tournois !== 'none' ? tournois.slice(0,3).map((tournoi) => <Tournoi key={tournoi.id} donnees={tournoi} />) : <div>pas de tournoi</div>}
            <Link href="/tournois" replace><button className='border-slate-300 border p-3 w-fit h-fit mb-5 hover:border-slate-500'>Plus de tournoi</button></Link>
        </div>
    ): <div>Il n'y a aucun tournoi !</div>
}

export default ListTournois