import React from 'react';
import Link from 'next/link';

const Navbar = () => {
	return (
		<ul className='w-full bg-red-600 list-none m-0 p-0 flex'>
			<li className='mr-6  inline'>
				<Link href='#'>
					<a className='text-center' href='#'>
						Accueil
					</a>
				</Link>
			</li>
			<li className='mr-6 inline'>
				<Link href='#'>
					<a
						className='text-blue-500 hover:text-blue-800'
						href='#'
					>
						Actualités
					</a>
				</Link>
			</li>
		</ul>
	);
};

export default Navbar;
