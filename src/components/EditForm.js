import { useForm } from 'react-hook-form'
import React from 'react'
import Router from 'next/router'
import { getCookie, setCookie } from 'cookies-next'
import useSWR from 'swr'

async function updatetUser(data) { // A FAIRE FONCTIONNER
    console.log('datasubmit = ', data)
    
    try {
        await fetch(`http://localhost:3008/api/users/4/update`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {"Access-Control-Allow-Origin": "*", 
                         'Content-Type': 'application/json' }
        })     
    } catch(erreur) {
        console.log(erreur)
        return false
    }
    
    Router.reload()
}

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const EditForm = ({userConnected}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { data, error } = useSWR(`http://localhost:3008/api/users/`, fetcher)
    const users = data && data.data

    const onSubmit = (d) => {      

        d.dateDeNaissance = new Date(d.dateDeNaissance)
        function pad(number) {
            var r = String(number);
            if (r.length === 1) {
              r = '0' + r;
            }
            return r;
          }
        
        d.dateDeNaissance = d.dateDeNaissance.getUTCFullYear() +
        '-' + pad(d.dateDeNaissance.getUTCMonth() + 1) +
        '-' + pad(d.dateDeNaissance.getUTCDate()) +
        'T' + pad(d.dateDeNaissance.getUTCHours()) +
        ':' + pad(d.dateDeNaissance.getUTCMinutes()) +
        ':' + pad(d.dateDeNaissance.getUTCSeconds()) +
        '.' + String((d.dateDeNaissance.getUTCMilliseconds() / 1000).toFixed(3)).slice(2, 5) +
        'Z';

        const alreadyExist = false

        users.map((user) => {
            if(user.email === d.email && user.id !== userConnected.id) {
                alert("Cette adresse mail est déjà utilisée par un autre utilisateur")
                alreadyExist = true
            } else if(user.pseudo === d.pseudo && user.id !== userConnected.id) {
                alert("Ce nom d'utilisateur est déjà utilisé par un autre utilisateur")
                alreadyExist = true
            }
        })

        if(!alreadyExist) {
            updatetUser(d); 
            if(d.pseudo !== userConnected.pseudo) setCookie('pseudo', d.pseudo)
            if(d.email !== userConnected.email) setCookie('email', d.email)
        }
    }

    let birthdate = new Date (userConnected.dateDeNaissance)
    birthdate = birthdate.getFullYear() +'-' + ('0' + birthdate.getMonth()).slice(-2) + '-' + ('0' + birthdate.getDay()).slice(-2)

    return userConnected && (
    <>    
    <h2 className='font-medium leading-tight text-4xl mt-4 text-blue'>Modifier vos informations personnelles</h2>
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded w-full px-8 pt-6 pb-8 mb-4" >
        <div className='flex justify-around'>
            <div className=''>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Addresse mail</label>
                    <input type="email" defaultValue={userConnected.email}
                    {...register("email", { required: true, maxLength: 30, pattern: "/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/" })} 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    
                    {errors.email?.type === 'required' && <div className="errorForm">Vous devez saisir votre email !</div>}
                    {(errors.email?.maxLength && errors.email?.pattern) && <div className="errorForm">L'adresse email entrer n'est pas valide !</div>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Nom d'utilisateur</label>
                    <input defaultValue={userConnected.pseudo}
                    {...register("pseudo", { required: true, maxLength: 50, minLength: 2, pattern: "/^[a-zA-Z0-9]+$/" })} 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    
                    {errors.pseudo?.type === 'required' && <div className="errorForm">Vous devez entrer un nom d'utilisateur !</div> }
                    {errors.pseudo?.pattern && <div className="errorForm">Votre nom d'utilisateur est invalide !</div> }
                    {(errors.pseudo?.minLength && errors.pseudo?.maxLength ) && <div className="errorForm">Le nom d'utilisateur doit être compris entre 2 et 50 caractères !</div>}
                </div>
            </div>

            <div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Nom</label>
                    <input defaultValue={userConnected.nom}
                    {...register("nom", { required: true, maxLength: 30, minLength: 2, pattern: "^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$" })} 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    
                    {errors.nom?.type === 'required' && <div className="errorForm">Vous devez entrer votre nom !</div> }
                    {errors.nom?.pattern && <div className="errorForm">Votre nom est invalide !</div> }
                    {(errors.nom?.minLength && errors.nom?.maxLength ) && <div className="errorForm">Le nom doit être compris entre 2 et 30 caractères !</div>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Prénom</label>
                    <input defaultValue={userConnected.prenom}
                    {...register("prenom", { required: true, maxLength: 30, minLength: 2, pattern: "^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$" })} 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    {errors.prenom?.type === 'required' && <div className="errorForm">Vous devez entrer votre prénom !</div> }
                    {errors.prenom?.pattern && <div className="errorForm">Votre prénom est invalide !</div> }
                    {(errors.prenom?.minLength && errors.prenom?.maxLength ) && <div className="errorForm">Le prénom doit être compris entre 2 et 30 caractères !</div>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Date de naissance</label>
                    <input type="date" defaultValue={birthdate}
                    {...register("dateDeNaissance", { required: true, maxLength: 255 })} 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    
                    {errors.dateDeNaissance?.type === 'required' && <div className="errorForm">Vous devez sélectionner votre date de naissance !</div> }
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center">
            <input type="submit" value="Modifier" className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
        </div>
        
    </form>
    </>
    );
}

export default EditForm