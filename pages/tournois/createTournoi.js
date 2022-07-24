import { getCookie } from "cookies-next";
import useSWR from 'swr'
import TournoiForm from "../../src/components/TournoiForm";


const fetcher = (...args) => fetch(...args).then((res) => res.json())

const createTournoi = () => {

    const { data, error } = useSWR(`http://localhost:3008/api/users/${getCookie('userId')}`, fetcher)

    if(!getCookie('userId')) {
        return <div className='text-red-800 font-bold text-center'>Vous devez être connecté pour créer un tournoi !</div>
    }

    return data ? (
        <>
        <TournoiForm user={data.data} />
        </>
    ) : <div className='text-red-800 font-bold text-center'>Vous devez être connecter pour créer un tournoi</div>;
}

export default createTournoi