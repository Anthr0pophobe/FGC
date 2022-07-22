import { getCookie } from "cookies-next";
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const ProfilDetail = () => {
    const userId = getCookie('userId')
    const { data, error } = useSWR(`http://localhost:3008/api/users/${userId}`, fetcher)

    const user = data && data.data
    console.log('detail -> user = ', user)

    return user ? (
        <>
        <h1>{user.pseudo}</h1>
        </>
    ) : (<><h1>Loading ...</h1></>);
}

export default ProfilDetail