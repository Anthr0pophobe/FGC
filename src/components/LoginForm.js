import { useForm } from 'react-hook-form'
import { isSameHashValue } from '../passwordHash.js'
import Router from 'next/router'
import { setCookie } from 'cookies-next';

export const LoginForm = ({ users }) => {
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        users.map((user) => {
            if(user.email === data.email && isSameHashValue(user.password, data.password) ) {
                setCookie('email', user.email);
                setCookie('pseudo', user.pseudo)
                Router.push('/')
            }
        });
    }

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="email" {...register("email", { required: true, maxLength: 30, pattern: "/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/" })} />
            {errors.email?.type === 'required' && <div className="errorForm">Vous devez saisir une adresse mail</div>}
            {(errors.email?.maxLength && errors.email?.pattern) && <div className="errorForm">L'adresse email entrer n'est pas valide</div>}

            <input type="password" placeholder="Mot de passe" {...register("password", { required: true, maxLength: 30, minLength: 8, pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})" })} />
            {errors.password?.type === 'required' && <div className="errorForm">Vous devez entrer un mot de passe</div> }
            {(errors.password?.minLength && errors.password?.maxLength && errors.password?.pattern) && <div className="errorForm">Le mot de passe saisie n'est pas valide !</div>}

            <input className="bg-red-400" type="submit" />
        </form>
        </>
    );
}

export default LoginForm
