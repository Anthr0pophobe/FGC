import { useForm } from 'react-hook-form'
import { isSameHashValue } from '../passwordHash.js'
import Router from 'next/router'
import { setCookie } from 'cookies-next';

async function createUser(data) {
    try {
        await fetch('http://localhost:3008/api/users/create', {
            method: 'POST',
            body: JSON.stringify({data}),
            headers: {'Content-Type': 'application/json' }
        }) 
    console.log('reussi')    
    } catch(erreur) {
            console.log(erreur)
            return false
        }
}

export const SignUpForm = () => {
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        data.dateDeNaissance = new Date(data.dateDeNaissance)
        data.dateDeNaissance.setHours(0,0,0,0)
        createUser(data)
    }

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)} >

            <input type="email" placeholder="Adresse email" {...register("email", { required: true, maxLength: 30, pattern: "/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/" })} />
            {errors.email?.type === 'required' && <div className="errorForm">Vous devez saisir votre email !</div>}
            {(errors.email?.maxLength && errors.email?.pattern) && <div className="errorForm">L'adresse email entrer n'est pas valide !</div>}

            <input placeholder="Nom d'utilisateur" {...register("pseudo", { required: true, maxLength: 50, minLength: 2, pattern: "/^[a-zA-Z0-9]+$/" })} />
            {errors.pseudo?.type === 'required' && <div className="errorForm">Vous devez entrer un nom d'utilisateur !</div> }
            {errors.pseudo?.pattern && <div className="errorForm">Votre nom d'utilisateur est invalide !</div> }
            {(errors.pseudo?.minLength && errors.pseudo?.maxLength ) && <div className="errorForm">Le nom d'utilisateur doit être compris entre 2 et 50 caractères !</div>}

            <input type="password" placeholder="Mot de passe" {...register("password", { required: true, maxLength: 15, minLength: 8, pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})" })} />
            {errors.password?.type === 'required' && <div className="errorForm">Vous devez entrer un mot de passe !</div> }
            {errors.password?.pattern && <div className="errorForm">Votre mot de passe doit avoir au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial</div> }
            {(errors.password?.minLength && errors.password?.maxLength ) && <div className="errorForm">Le mot de passe doit être compris entre 8 et 15 caractères !</div>}

            <input placeholder="Prénom" {...register("prenom", { required: true, maxLength: 30, minLength: 2, pattern: "^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$" })} />
            {errors.prenom?.type === 'required' && <div className="errorForm">Vous devez entrer votre prénom !</div> }
            {errors.prenom?.pattern && <div className="errorForm">Votre prénom est invalide !</div> }
            {(errors.prenom?.minLength && errors.prenom?.maxLength ) && <div className="errorForm">Le prénom doit être compris entre 2 et 30 caractères !</div>}

            <input placeholder="Nom" {...register("nom", { required: true, maxLength: 30, minLength: 2, pattern: "^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$" })} />
            {errors.nom?.type === 'required' && <div className="errorForm">Vous devez entrer votre nom !</div> }
            {errors.nom?.pattern && <div className="errorForm">Votre nom est invalide !</div> }
            {(errors.nom?.minLength && errors.nom?.maxLength ) && <div className="errorForm">Le nom doit être compris entre 2 et 30 caractères !</div>}

            <label>Date de naissance</label>
            <input type="date" placeholder="Date de naissance" {...register("dateDeNaissance", { required: true, maxLength: 255 })} />
            {errors.dateDeNaissance?.type === 'required' && <div className="errorForm">Vous devez sélectionner votre date de naissance !</div> }

            <input className="bg-red-400" type="submit" />
        </form>
        </>
    );
}

export default SignUpForm
