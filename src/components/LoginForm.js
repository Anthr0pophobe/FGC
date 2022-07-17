import { useState } from "react"
import { useForm } from 'react-hook-form'

export const LoginForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input placeholder="Pseudo" {...register("pseudo", { required: true, maxLength: 15, minLength: 4, pattern: "/^[A-Za-z]+$/i" })} />
            {errors.pseudo?.type === 'required' && <div className="errorForm">Vous devez entrer un pseudo</div>}

            {/* include validation with required or other standard HTML validation rules */}
            <input placeholder="Mot de passe" {...register("password", { required: true, maxLength: 15, minLength: 8, pattern: "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$" })} />
            {errors.password?.type === 'required' && <div className="errorForm">Vous devez entrer un mot de passe</div> }
            
            <input className="bg-red-400" type="submit" />
        </form>
        </>
    );
}

export default LoginForm