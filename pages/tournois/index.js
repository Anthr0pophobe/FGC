import useSWR from 'swr'
import Link from 'next/link'
import Tournoi from '../../src/components/Tournoi';


const fetcher = (...args) => fetch(...args).then((res) => res.json())

const tournois = () => {
    const { data, error } = useSWR('http://localhost:3008/api/tournois/', fetcher)
    const tournois = data ? data.data.tournois : 'none'

    return (
        <>
        <div className='my-5 flex flex-wrap'>
            {tournois !== 'none' ? tournois.map((tournoi) => <Tournoi key={tournoi.id} donnees={tournoi} /> ) : <div>Il n'y a aucun tournoi en cours</div>}
        </div>
        </>
    );
}

export default tournois