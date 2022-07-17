import LoginForm from "../src/components/LoginForm";
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Login = () => {

    const { data, error } = useSWR('http://localhost:3008/api/users/', fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    console.log(data.data)

    return(
        <>
        <LoginForm users={data.data}/>
        </>
    );
}

export default Login