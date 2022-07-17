import { useState } from "react"
import { useForm } from 'react-hook-form'
//import { isSamePassword } from '../passwordHash.js'

const bcrypt = require('bcrypt')

export function hashPassword(password) {
    return bcrypt.hash(password, 10).then((passHash) => {return passHash})
}
export function isSamePassword(passHash, password) {
    return bcrypt.compare(passHash, password).then((result) => {return result})
}

export const LoginForm = ({ users }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        
        users.map((user) => {
            if(user.pseudo === data.pseudo && user.password === data.password) {
                console.log(user);
                const a = hashPassword(user.password)
                console.log(a)
            }
        });
    }

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>

            <input placeholder="Pseudo" {...register("pseudo", { required: true, maxLength: 15, minLength: 4, pattern: /^[A-Za-z]+$/i })} />
            {errors.pseudo?.type === 'required' && <div className="errorForm">Vous devez entrer un pseudo</div>}
            {errors.pseudo?.minLength && errors.pseudo?.maxLength && errors.pseudo?.pattern && <div className="errorForm">Vous devez entrer un pseudo correctes !</div>}

            <input type="password" placeholder="Mot de passe" {...register("password", { required: true, maxLength: 15, minLength: 8, pattern: "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$" })} />
            {errors.password?.type === 'required' && <div className="errorForm">Vous devez entrer un mot de passe</div> }
            {errors.password?.minLength && errors.password?.maxLength && errors.password?.pattern && <div className="errorForm">Vous devez entrer un mot de passe correctes !</div>}
            
            <input className="bg-red-400" type="submit" />
        </form>
        </>
    );
}

export default LoginForm