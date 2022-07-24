import { getCookie } from "cookies-next";
import useSWR from 'swr'
import EditForm from "../../src/components/EditForm";
import Logout from '../../src/components/Logout'
import Statistiques from "../../src/components/Statistiques";

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const ProfilDetail = () => {
    const userId = getCookie('userId')
    const { data, error } = useSWR(`http://localhost:3008/api/users/${userId}`, fetcher)

    const user = data && data.data

    return user ? (
        <>
        <EditForm userConnected={user} />
        <h2 className='font-medium leading-tight text-4xl mt-0 text-blue'>Mes statistiques</h2>
        <Statistiques user={user} />
        <Logout />
        <br/>
        </>
    ) : (<><h1>Loading ...</h1></>);
}

export default ProfilDetail