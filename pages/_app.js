import '../styles/global.css'
import '../styles/myStyle.css'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'

import { getCookies } from 'cookies-next';

function MyApp({ Component, pageProps }) {

  const user = getCookies()
  console.log(user)

  // La navbar est mise ici pour qu'elle apparaisse sur toutes les pages
  return (
    <div className='px-[10%]'>
      <Navbar userConnected={user.pseudo} />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
