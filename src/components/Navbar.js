import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
      <ul className="h-128 bg-red-600 justifiy-center">
      <li className="mr-6">
        <Link href='#'>
          <a className="text-center" href="#">Accueil</a>
        </Link>
      </li>
      <li className="mr-6">
        <Link href='#'>
          <a className="text-blue-500 hover:text-blue-800" href="#">Actualités</a>
        </Link>
      </li>
    </ul>
    )
}

export default Navbar
