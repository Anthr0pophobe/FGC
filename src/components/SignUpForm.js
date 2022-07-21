import { render } from 'react-dom'
import { useForm } from 'react-hook-form'
import ReactDOM from 'react'
import React from 'react'

async function createUser(data) { // A FAIRE FONCTIONNER
    try {
        await fetch('http://localhost:3008/api/users/create', {
            method: 'POST',
            body: JSON.stringify({data}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded' }
        }) 
    console.log(data)    
    } catch(erreur) {
            console.log(erreur)
            return false
        }
}

export const SignUpForm = ({users}) => {
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {      
        data.dateDeNaissance = new Date(data.dateDeNaissance)
        data.dateDeNaissance.setHours(0,0,0,0)
        
        const alreadyExist = false

        users.map((user) => {
            if(user.email === data.email) {
                alert("Cette adresse mail est déjà utilisée")
                alreadyExist = true
            } else if(user.pseudo === data.pseudo) {
                alert("Ce nom d'utilisateur est déjà utilisé")
                alreadyExist = true
            }
        })

        if(!alreadyExist) createUser(data)
    }

    return (
        <>
        <div className='flex flex-col items-center mt-5'>
            <h1 className='font-medium leading-tight text-4xl mt-0 mb-2 text-blue'>Inscrivez vous sur Contrast</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded w-3/6 px-8 pt-6 pb-8 mb-4" >
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Addresse mail</label>
                    <input type="email" placeholder="Adresse email" 
                    {...register("email", { required: true, maxLength: 30, pattern: "/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/" })} 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    
                    {errors.email?.type === 'required' && <div className="errorForm">Vous devez saisir votre email !</div>}
                    {(errors.email?.maxLength && errors.email?.pattern) && <div className="errorForm">L'adresse email entrer n'est pas valide !</div>}
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Nom d'utilisateur</label>
                    <input placeholder="Nom d'utilisateur" 
                    {...register("pseudo", { required: true, maxLength: 50, minLength: 2, pattern: "/^[a-zA-Z0-9]+$/" })} 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    
                    {errors.pseudo?.type === 'required' && <div className="errorForm">Vous devez entrer un nom d'utilisateur !</div> }
                    {errors.pseudo?.pattern && <div className="errorForm">Votre nom d'utilisateur est invalide !</div> }
                    {(errors.pseudo?.minLength && errors.pseudo?.maxLength ) && <div className="errorForm">Le nom d'utilisateur doit être compris entre 2 et 50 caractères !</div>}

                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Mot de passe</label>
                    <input type="password" placeholder="Mot de passe" 
                    {...register("password", { required: true, maxLength: 15, minLength: 8, pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})" })} 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

                    {errors.password?.type === 'required' && <div className="errorForm">Vous devez entrer un mot de passe !</div> }
                    {errors.password?.pattern && <div className="errorForm">Votre mot de passe doit avoir au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial</div> }
                    {(errors.password?.minLength && errors.password?.maxLength ) && <div className="errorForm">Le mot de passe doit être compris entre 8 et 15 caractères !</div>}
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Nom</label>
                    <input placeholder="Nom" 
                    {...register("nom", { required: true, maxLength: 30, minLength: 2, pattern: "^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$" })} 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    
                    {errors.nom?.type === 'required' && <div className="errorForm">Vous devez entrer votre nom !</div> }
                    {errors.nom?.pattern && <div className="errorForm">Votre nom est invalide !</div> }
                    {(errors.nom?.minLength && errors.nom?.maxLength ) && <div className="errorForm">Le nom doit être compris entre 2 et 30 caractères !</div>}
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Prénom</label>
                    <input placeholder="Prénom" 
                    {...register("prenom", { required: true, maxLength: 30, minLength: 2, pattern: "^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$" })} 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

                    {errors.prenom?.type === 'required' && <div className="errorForm">Vous devez entrer votre prénom !</div> }
                    {errors.prenom?.pattern && <div className="errorForm">Votre prénom est invalide !</div> }
                    {(errors.prenom?.minLength && errors.prenom?.maxLength ) && <div className="errorForm">Le prénom doit être compris entre 2 et 30 caractères !</div>}
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Date de naissance</label>
                    <input type="date" placeholder="Date de naissance" 
                    {...register("dateDeNaissance", { required: true, maxLength: 255 })} 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    
                    {errors.dateDeNaissance?.type === 'required' && <div className="errorForm">Vous devez sélectionner votre date de naissance !</div> }
                </div>
    
                <div className="flex items-center justify-between">
                    <input type="submit" value="Se connecter" className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
                    <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-800" href="/login" >
                        Vous avez déjà un compte ? Connectez-vous
                    </a>
                </div>
            </form>
        </div>
        </>
    );
}

export default SignUpForm
