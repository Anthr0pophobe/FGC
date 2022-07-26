import { deleteCookie, getCookie, getCookies, setCookie } from 'cookies-next';
import { useForm } from 'react-hook-form'
import dataJoueurs from '../data';


const FinTournoi = ({tournoi, jeuId, user}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('datafin = ',data)
        
        
        
            
        
        console.log('cookie = ',getCookies())
    }

    return (
        <>
        <hr/>
        <p className="text-center text-slate-1200 italic">
            Maintenant le tournoi terminé, veuillez entrez vos résultats.
            <br/>Par la suite cela vous permettra d'obtenir vos statistiques.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="">
            <div id="input" className="flex flex-col w-full my-5">
                <label htmlFor="email" className="text-gray-700 mb-2">Parties jouées</label>
                <input type='number' defaultValue="0" {...register("nbPartie", { required: true })}
                className="border-slate-400 appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg" />
            </div>

            <div id="input" className="flex flex-col w-full my-5">
                <label htmlFor="email" className="text-gray-700 mb-2">Parties gagnées</label>
                <input type='number' defaultValue="0" {...register("nbVictoire", { required: true })}
                className="border-slate-400 appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg" />
            </div>

            <div id="input" className="flex flex-col w-full my-5">
                <label htmlFor="email" className="text-gray-700 mb-2">Parties perdues</label>
                <input type='number' defaultValue="0" {...register("nbDefaite", { required: true })}
                className="border-slate-400 appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg" />
            </div>

            <div id="input" className="flex flex-col w-full my-5">
                <label htmlFor="email" className="text-gray-700 mb-2">Égalités</label>
                <input type='number' defaultValue="0" {...register("nbEgalite", { required: true })}
                className="border-slate-400 appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg" />
            </div>
            
            <div id="button" className="flex flex-col w-full my-5">
                <button type="submit" className="w-full py-4 bg-blue text-white hover:bg-[#5D63D1]/[.9] rounded-lg" >
                            <div className="flex flex-row items-center justify-center"> 
                                Valider
                            </div>
                </button>
            </div>
        </form>
        </>
    );
}

export default FinTournoi