import LoginForm from "../src/components/LoginForm";
import useSWR from 'swr'


const login = () => { 

    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data, error } = useSWR('http://localhost:3008/api/users/', fetcher) 

    return(
        <>
        <div>
            <div className="px-6 mx-auto mt-8">
                <div className="flex flex-col text-center md:text-left md:flex-row justify-evenly md:items-center">
                    <div className="flex flex-col w-full"> 
                        <h1 className="text-5xl text-gray-800 font-bold">Contrast</h1>
                        <p className="w-5/12 mx-auto md:mx-0 text-gray-500">
                            Jouez, Gagnez, Partagez
                        </p>
                    </div>
                    <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
                        <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
                            <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">Se connecter</h2>
                        
                            <LoginForm users={data ? data.data : data} />
                        </div>
                    </div>
                </div>
            </div>   
        </div>
        </>
    );
}

export default login
