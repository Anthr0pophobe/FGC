import '../styles/global.css'
import '../styles/myStyle.css'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'

import { getCookies } from 'cookies-next';

function MyApp({ Component, pageProps }) {

  const user = getCookies() ? getCookies() : 'none'
  console.log('app -> user = ', user);

  // La navbar est mise ici pour qu'elle apparaisse sur toutes les pages
  return (
    <div className='px-[10%] flex flex-col h-screen justify-between'>
      <Navbar userConnected={user.pseudo} userId={user.userId} />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
