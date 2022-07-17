import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react';
import { useRouter } from 'next/router'

export function Navbar() {
  const [active, setActive] = useState(false); // Afficher le menu burger
  const router = useRouter(); // Pour connaitre la route actuel

  const handleClick = () => {
    setActive(!active);
  };

  console.log(router.pathname)

  return (
    <>
      <nav className='flex items-center flex-wrap p-1 rounded-b-lg color-blue'>
        <Link href='/'>
          <a>
            <Image className='fill-current text-white h-8 w-8 mr-2' src="/../public/logo.png" alt="Logo Contrast" width='120px' height='120px' />
          </a>
        </Link>

        <button
          className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>

        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className={`${ router.pathname === '/' ? 'underline underline-offset-4 decoration-[#F79E05]' : '' } lg:inline-flex lg:text-xl lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-navbar-color-hover hover:text-white`}>
                Accueil
              </a>
            </Link>
           
            <Link href='/tournois'>
              <a className={`${ router.pathname === '/tournois' ? 'underline underline-offset-4 decoration-[#F79E05]' : '' } lg:inline-flex lg:text-xl lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-navbar-color-hover hover:text-white`}>
                Tournois
              </a>
            </Link>
          </div>

          <div className='lg:ml-auto lg:mr-2'>
            <Link href='/'>
              <a className={`${ router.pathname === '/account' || router.pathname === '/login' ? 'underline underline-offset-4 decoration-[#F79E05]' : '' } lg:inline-flex lg:text-xl lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-navbar-color-hover hover:text-white`}>
                Compte
                <div className={ active ? 'hidden' : ''}>
                  <Image className='fill-current h-8 w-8 mx-4' src="/../public/logo-account.png" alt="Logo Contrast" width='60px' height='60px' />
                </div>
              </a>
            </Link>
          </div>
          
        </div>
      </nav>
    </>
  );
};


export default Navbar
