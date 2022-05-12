function MainCard() {
  return (
  <>
    <div className='bg-red h-[500px] flex flex-col rounded-xl mt-4 '>
      <div className="flex-[2] bg-slate-500 h-full rounded-t-xl">
        Bannière
      </div>
      <div className="flex-[3] bg-slate-200 h-full rounded-b-xl flex flex-row">
        <div className=" ml-64 flex-[1] flex flex-col">
        <h1 className="text-3xl ">Anthropophobe</h1>
        <div className="flex flex-1">
          <div className=" w-64"> Description du joueur
          </div>
          <div className=" flex-1">Carouselle des historique tournoi</div>
        </div>
        </div>
      </div>
    </div>
    <div className=" w-48 h-48 bg-red-700 absolute top-[20%] left-48 rounded-full ">
      <div>
        pp 
      </div>
    </div>
  </>
  );
}

export default MainCard;
