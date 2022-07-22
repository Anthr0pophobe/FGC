import { useForm } from 'react-hook-form'
import { isSameHashValue } from '../passwordHash.js'
import Router from 'next/router'
import { setCookie } from 'cookies-next';

export const LoginForm = ({ users }) => {
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        users.map((user) => {
            if(user.email === data.email && isSameHashValue(user.password, data.password) ) {
                setCookie('email', user.email)
                setCookie('pseudo', user.pseudo)
                setCookie('userId', user.id)
                Router.push('/')
            }
        });
    }

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div id="input" className="flex flex-col w-full my-5">
                <label htmlFor="email" className="text-gray-500 mb-2">Addrese email</label>
                <input placeholder="email" {...register("email", 
                { required: true, maxLength: 30, pattern: "/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/" })}
                type="text" id="email"
                className="border-slate-300 appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg" />
                
                {errors.email?.type === 'required' && <div className="errorForm">Vous devez saisir votre email !</div>}
                {(errors.email?.maxLength && errors.email?.pattern) && <div className="errorForm">L'adresse email entrer n'est pas valide !</div>}
            </div>
            
            <div id="input" className="flex flex-col w-full my-5">
                <label htmlFor="password" className="text-gray-500 mb-2">Mot de passe</label>  
                <input type="password" placeholder="Mot de passe" id="password"
                {...register("password", { required: true, maxLength: 30, minLength: 8, pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})" })}
                className="border-slate-300 appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                />
                
                {errors.password?.type === 'required' && <div className="errorForm">Vous devez entrer un mot de passe !</div> }
                {errors.password?.pattern && <div className="errorForm">Au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial</div> }
                {(errors.password?.minLength && errors.password?.maxLength ) && <div className="errorForm">Le mot de passe doit être compris entre 8 et 15 caractères !</div>}
            </div>
                        
            <div id="button" className="flex flex-col w-full my-5">
                <button type="button" className="w-full py-4 bg-blue text-white hover:bg-[#5D63D1]/[.9] rounded-lg" >
                            <div className="flex flex-row items-center justify-center">
                                <div className="mr-2">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" ></path>
                                    </svg>
                                </div>
                                
                                <input className="font-bold" value="Se connecter" type="submit" />
                            </div>
                </button>
            </div>
        </form>
        </>
    );
}

export default LoginForm
