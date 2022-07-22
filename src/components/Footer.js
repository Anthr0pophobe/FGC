import Image from 'next/image'
import dbz from '../../public/fighterz.png'
import ggs from '../../public/ggs.png'
import bros from '../../public/bros.png'
import Logout from './Logout'

export default function Footer() {
    
    
    return (
    <>
    <footer className="bg-[#5D63D1] text-center text-white rounded-t-lg">
        <div className="container pt-3">
            <div className="flex justify-around mb-2">
                <Image src={dbz} width="90px" height="20px" className=''/>
                <Image src={bros} width="40px" height="40px" className=''/>
                <Image src={ggs} width="150px" height="10px" className=''/>
            </div>
            <div className="text-center p-2 bg-[#000000]/[.2]">
                © 2022 Tous droits réservés: Contrast
                <Logout/>
            </div>
        </div>
    </footer>
    </>
    );
}