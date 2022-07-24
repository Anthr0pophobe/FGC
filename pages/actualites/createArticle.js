import { getCookie } from "cookies-next";
import { Router } from "next/router";
import useSWR from 'swr'
import ArticleForm from "../../src/components/ArticleForm";


const createArticle = () => {
    
    let admin = false
    
    if(getCookie('userId') === '2' || getCookie('userId') === '3' || getCookie('userId') === '4') {
        admin = true
    }
    
    return admin ? (
        <>
        <ArticleForm />
        </>
    ) : <div className='text-red-800 font-bold text-center'>Vous devez être connecté en tant qu'administrateur pour créer un article</div>;
}

export default createArticle