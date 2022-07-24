import { deleteCookie, getCookies } from 'cookies-next';
import { useRouter } from 'next/router';

export const Logout = () => {
    const router = useRouter()

    function deconnexion() {
        deleteCookie('email');
        deleteCookie('pseudo');
        deleteCookie('userId')
    
        console.log('cookies= '+ getCookies())
        router.reload(router.pathname)
    }
    
    return (
        <a onClick={deconnexion} className="mt-3 text-center inline-block align-baseline font-bold text-sm text-red-600 hover:text-red-900" href="/login" >
                    Se déconnecter
        </a>
    );
}

export default Logout