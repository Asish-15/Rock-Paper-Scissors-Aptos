
const GameWrapper1 = () => {
  return(
    <div className=" h-screen flex justify-center align-middle"> 
    <h1 className="my-auto text-3xl font-semibold">Please connect your wallet to continue </h1>
    </div>
  )
}

const GameWrapper2 = () => {
  return(
    <div className=" bg-blue-200 h-screen flex justify-center align-middle"> 
      <div className="my-auto w-4/6">
        <div className="bg-red-100 flex justify-center" >
          <button className="bg-green-400 text-white px-6 py-2 hover:bg-green-200 rounded-3xl shadow-md my-4">Start Game</button>
        </div>
        
        
        
        <div className="bg-pink-100 flex justify-center gap-2">
          <div className="bg-yellow-300 w-1/2">
          <div className="bg-white  px-3 py-1  rounded-xl shadow-md my-4">
            <div>
              <div className="bg-gray-400  px-4 py-2 text-center text-x1 font-bold rounded-xl  my-4">Select your move</div>
            </div>
            
            
            
            
            <div className="flex gap-5">
              <div className="gap-3"> 
                <button className="bg-red-500 text-white hover:bg-green-200 text-2xl px-4 py-2 rounded-xl shadow-md my-4" >Clear</button>
                <button className="bg-orange-500 text-white text-2xl px-4 py-2 rounded-xl shadow-md my-4" >Rock</button>
                <button className="bg-orange-500 text-white text-2xl px-4 py-2 rounded-xl shadow-md my-4" >Paper</button>
                <button className="bg-orange-500 text-white text-2xl px-4 py-2 rounded-xl shadow-md my-4" >Scissors</button> 
              </div>
            </div>
          </div>
          </div>
          <div className="bg-blue-300 w-1/2">Div2</div>
        </div>
        
        
        
        <div className="bg-orange-100 flex justify-center">
          <div className="bg-green-600 text-3xl text-bold px-44 py-4  rounded-xl  my-4">Game Result</div>
        </div>
      </div>
      
    </div>
  )
}






function App() {
  return (
    <>
    <GameWrapper2 />
  
    </>
  )
}

export default App