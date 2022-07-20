import LoginForm from "../src/components/LoginForm";
//import getUsers from './api/users.js'
import useSWR from 'swr'


const login = () => { 
    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data, error } = useSWR('http://localhost:3008/api/users/', fetcher) 

    return(
        <>
        <LoginForm users={data ? data.data : data} />
        </>
    );
}

export default login
