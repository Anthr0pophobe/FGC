import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react';
import { useRouter } from 'next/router'

export default function Navbar({ userConnected, userId }) {
  const [active, setActive] = useState(false); // Afficher le menu burger
  const router = useRouter(); // Pour connaitre la route actuel

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap rounded-b-lg bg-blue'>
        <Link href='/' replace>
          <a className='ml-4'>
            <Image src="/../public/logo2.png" alt="Logo Contrast" width='80px' height='100px'/>
          </a>
        </Link>

        <button className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
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

        <div className={`${active ? '' : 'hidden'} w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
          <div className='lg:inline-flex lg:flex-row lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
          
            <span className={`${ router.pathname === '/' ? 'underline underline-offset-8 decoration-[#F79E05] text-white' : '' } lg:inline-flex lg:text-xl lg:w-auto w-full px-3 py-2 font-bold items-center justify-center hover:bg-navbar-color-hover hover:text-white hover:underline hover:underline-offset-8 decoration-[#F79E05]`}>
              <Link href='/' replace>Accueil</Link>
            </span>

            <span className={`${ router.pathname === '/actualites' ? 'underline underline-offset-8 decoration-[#F79E05] text-white' : '' } lg:inline-flex lg:text-xl lg:w-auto w-full px-3 py-2 font-bold items-center justify-center hover:bg-navbar-color-hover hover:text-white hover:underline hover:underline-offset-8 decoration-[#F79E05]`}>
              <Link href='/actualites' replace>Actualité</Link>
            </span>

            <span className={`${ router.pathname === '/tournois' ? 'underline underline-offset-8 decoration-[#F79E05] text-white' : '' } lg:inline-flex lg:text-xl lg:w-auto w-full px-3 py-2 font-bold items-center justify-center hover:bg-navbar-color-hover hover:text-white hover:underline hover:underline-offset-8 decoration-[#F79E05]`}>
              <Link href='/tournois' replace>Tournois</Link>
            </span>
            
          </div>

          <div className='lg:ml-auto lg:mr-2 flex items-center'>                
                {userConnected 
                  ? <span className={`${ router.pathname === '/profil/[...profilId]' ? 'underline underline-offset-8 decoration-[#F79E05] text-white' : ''} lg:inline-flex lg:text-xl lg:w-auto w-full px-3 py-2 font-bold items-center justify-center hover:bg-navbar-color-hover hover:text-white hover:underline hover:underline-offset-8 decoration-[#F79E05]`}>
                      <Link href={`/profil/${userId}`} replace>{userConnected}</Link>
                    </span>
                  : <div>
                      <Link href='/login' replace><button className={`${ router.pathname === '/login' ? 'text-white bg-[#5D63D1]' : 'text-[#5D63D1] bg-white' } mx-2 rounded-xl border-2 lg:inline-flex lg:text-xl lg:w-auto w-full px-2 py-1 font-bold items-center justify-center hover:text-white hover:bg-[#5D63D1] decoration-[#F79E05]`}>Se connecter</button></Link>
                      <Link href='/signup' replace><button className={`${ router.pathname === '/signup' ? 'text-white bg-[#5D63D1]' : 'text-[#5D63D1] bg-white' } mx-2 rounded-xl border-2 lg:inline-flex lg:text-xl lg:w-auto w-full px-2 py-1 font-bold items-center justify-center hover:text-white hover:bg-[#5D63D1] decoration-[#F79E05]`}>S'inscrire</button></Link>
                    </div>
                }

                <div className={ active ? 'hidden' : ''}>
                  <span className='lg:inline-flex lg:w-auto w-full px-3 py-2 items-center justify-center'>
                    <Image className='fill-current h-8 w-8 mx-4' src="/../public/logo-account.png" alt="Logo Contrast" width='60px' height='60px' />
                  </span>
                </div>
          </div>
          
        </div>
      </nav>
    </>
  );
};