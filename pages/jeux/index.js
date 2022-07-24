import useSWR from 'swr'
import Link from 'next/link'
import Jeu from '../../src/components/Jeu'


const fetcher = (...args) => fetch(...args).then((res) => res.json())

const jeux = () => {
    const { data, error } = useSWR('http://localhost:3008/api/jeux/', fetcher)
    console.log('data = ', data)
    const jeux = data ? data.data : 'none'
    console.log('jeux = ', jeux)

    return jeux ? (
        <>
        <div className='my-5 flex flex-wrap justify-around'>
            {/*jeux !== 'none' ? jeux.map((jeu) => <Jeu key={jeu.id} donnees={jeu} /> ) : <div>Il n'y a aucun jeu</div>*/}
        </div>
        </>
    ) : (<><div>Loading...</div></>);
}

export default jeux