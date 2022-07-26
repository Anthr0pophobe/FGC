import useSWR from 'swr'
import Link from 'next/link'
import Image from 'next/image'
import Jeu from '../../src/components/Jeu'
import { Router } from 'next/router'


const fetcher = (...args) => fetch(...args).then((res) => res.json())

const jeux = () => {
    const { data, error } = useSWR('http://localhost:3008/api/jeux/', fetcher)
    console.log('data = ', data)
    const jeux = data ? data.data : 'none'
    console.log('jeux = ', jeux)

    return jeux ? (
        <>
        <div className='flex flex-col items-center'>
            <article className="rounded-lg shadow-lg w-3/4 p-4 mt-4">
                <Link href={`/jeux/gealtygear`} replace>
                    <a>
                    <Image alt="Logo jeu" className="block h-auto w-full" src="/../public/ggs.png" width={450} height={100} />
                    </a>
                </Link>

                <div className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg font-bold no-underline hover:underline text-black">
                        <Link href={`/jeux/gealtygear`} replace>
                        Guilty Gear STRIVE 
                        </Link>
                    </h1>
                    <p className="text-grey-darker text-sm">
                    Arc System Works, 2021
                    </p>
                </div>

                <p className="hover:underline mb-5">
                    <Link href={`/jeux/gealtygear`} replace>
                    Habitué aux commandes d’autres studios depuis maintenant quelques temps (Dragon Ball FighterZ, Granblue Fantasy : Versus et prochainement Dungeon Fighter Duel), Arc System Works n’oublie pas pour autant sa série phare qui commencée en 1998.
                    </Link>
                </p>
            </article>

            <article className="rounded-lg shadow-lg w-3/4 p-4">
                <Link href={`/jeux/dragonballfz`} replace>
                    <a>
                    <Image alt="Logo jeu" className="block h-auto w-full" src="/../public/fighterz.png" width={320} height={125} />
                    </a>
                </Link>

                <div className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg font-bold no-underline hover:underline text-black">
                        <Link href={`/jeux/dragonballfz`} replace>
                            Dragon Ball FighterZ
                        </Link>
                    </h1>
                    <p className="text-grey-darker text-sm">
                    Arc System Works, 2018
                    </p>
                </div>

                <p className="hover:underline mb-5">
                    <Link href={`/jeux/dragonballfz`} replace>
                    Même si DBZ n'évoque rien de plus pour vous qu'une bande de chevelus qui se regardent en chiens de faïence pendant des heures, vous avez forcément dû ressentir l'effervescence autour de la sortie de Dragon Ball FighterZ.                
                    Rien de moins que le jeu de combat le plus attendu depuis plusieurs années, ou, disons-le plus sûrement, depuis l'E3 2017, où sa présentation a fait l'effet d'une bombe.
                </Link>
                </p>
            </article>

            <article className="rounded-lg shadow-lg w-3/4 p-4">
                <Link href={`/jeux/smashbros`} replace>
                    <a>
                    <Image alt="Logo jeu" className="block h-auto w-full" src="/../public/a.png" width={320} height={125} />
                    </a>
                </Link>

                <div className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg font-bold no-underline hover:underline text-black">
                        <Link href={`/jeux/smashbros`} replace>
                            Super Smash Bros Ultimate
                        </Link>
                    </h1>
                    <p className="text-grey-darker text-sm">
                        Nintendo, 2018
                    </p>
                </div>

                <p className="hover:underline mb-5">
                    <Link href={`/jeux/smashbros`} replace>
                    Nos canapés s'en souviennent encore : la série Super Smash Bros est un apôtre de la marrade entre potes, 
                    l'émissaire du fun décomplexé qui a su égayer nombre de soirées avec paquets de chips et cocas renversés. 
                    En ce début décembre, La Nintendo Switch accueille Ultimate, un épisode qui compte bien mettre tout le monde d'accord.               </Link>
                </p>
            </article>
        </div>
        </>
    ) : (<><div>Loading...</div></>);
}

export default jeux