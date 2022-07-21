import SignUpForm from "../src/components/SignUpForm";
import useSWR from 'swr'


const signup = () => {

    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data, error } = useSWR('http://localhost:3008/api/users/', fetcher) 
    
    return (
        <>
        <SignUpForm users={data ? data.data : data} />
        </>
    );
}

export default signup