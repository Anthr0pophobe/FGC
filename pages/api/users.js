/*
import useSWR from 'swr'


export default function getUsers() {
    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data, error } = useSWR('http://localhost:3008/api/users/', fetcher)
    
    if (error) console.log(error)
    if (!data) console.log('waiting...')
    
    if(data != undefined && data) return data.data
}
*/