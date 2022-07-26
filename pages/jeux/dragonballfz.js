import Image from "next/image";
import Router from "next/router";
const dragonballfz = () => {

    function retour() {
        Router.push('/jeux')
    }

    return (
        <>
        <div id="button" className="flex flex-col">
            <button type="button" onClick={retour} className="w-fit p-2 bg-blue text-white hover:bg-[#5D63D1]/[.9] rounded-lg mt-4" >
                        <div className="flex flex-row items-center justify-center">
                            <div className="mr-2 flex">
                                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" ></path>
                                </svg>
                                Retour
                            </div>
                        </div>
            </button>
        </div>
                
        <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
            <div class="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
                <p class="tracking-loose">Arc System Works, 2018</p>
                <h1 class="font-bold text-3xl my-4">DRAGON BALL FIGHTERZ</h1>
                <p class="leading-normal mb-4">
                Même si DBZ n'évoque rien de plus pour vous qu'une bande de chevelus qui se regardent en chiens de faïence pendant des heures, vous avez forcément dû ressentir l'effervescence autour de la sortie de Dragon Ball FighterZ.                </p>
                <p class="leading-normal mb-4">
                Rien de moins que le jeu de combat le plus attendu depuis plusieurs années, ou, disons-le plus sûrement, depuis l'E3 2017, où sa présentation a fait l'effet d'une bombe. Neuf mois plus tard, le troisième rejeton de Son Goku pousse enfin son premier cri, rugissant comme le lion qui s'éveille à la vie.
                </p> 
                <p class="leading-normal mb-4">
                Arc System s’est construit une véritable fanbase autour de ses jeux et a fini par voir sa popularité exploser avec Dragon Ball Fighter Z. Fort de ce succès, le studio se relance sur la série qui lui a permis de se faire une place dans le paysage, pour satisfaire ses fans de la première heure, mais aussi et surtout, la nouvelle flopée de braves qui se sont mis à les suivre depuis DBFZ.                
                </p>
            </div>

            <div class="w-full lg:w-1/2 lg:py-6 text-center border-radius-xl">
                <Image src="/../public/dbffz.jpeg" width={700} height={653} className="fill-current text-gray-900 w-3/5 mx-auto"/>
            </div>
        </div>
        <div class="bg-white h-screen">
            <div class="container mx-auto pt-24 md:pt-16 px-6">
                <p class="py-4"><i class="em em-wave"></i> <i class="em em-world_map"></i></p>		
            </div>
        </div>
        </>
    );
}

export default dragonballfz