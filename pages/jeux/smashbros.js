import Image from "next/image";
    import Router from "next/router";

const smashbros = () => {
    
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
                <p class="tracking-loose">Nintendo, 2018</p>
                <h1 class="font-bold text-3xl my-4">Super Smash Bros Ultimate</h1>
                <p class="leading-normal mb-4">
                Nos canapés s'en souviennent encore : la série Super Smash Bros est un apôtre de la marrade entre potes, 
                l'émissaire du fun décomplexé qui a su égayer nombre de soirées avec paquets de chips et cocas renversés. 
                En ce début décembre, La Nintendo Switch accueille Ultimate, un épisode qui compte bien mettre tout le monde d'accord.
                </p>
                <p class="leading-normal mb-4">
                    Toujours dans la famille "Hors concours", le nombre de stages pointe à 103, 
                sans compter les variations Champ de Bataille et Destination Finale disponibles pour chacun d'entre eux. 
                Un chiffre tellement ahurissant qu'il se suffit à lui-même.
                </p>

                <p class="leading-normal mb-4">
                "Ils sont tous là !". Voilà ce que Nintendo précisait lors de la présentation de Super Smash Bros. 
                Ultimate. Pas un seul personnage ne manque à l'appel alors que de nouveaux se sont invités à la fête. 
                Ainsi, on compte pas moins de 74 personnages disponibles
                </p>
            </div>

            <div class="w-full lg:w-1/2 lg:py-6 text-center">
                <Image src="/../public/hero.jpg" width={500} height={281} className="fill-current text-gray-900 w-3/5 mx-auto"/>
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

export default smashbros