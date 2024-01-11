import React, { useState } from "react";
import { useFetch } from "./hooks/useFetch";

function App() {
  let rendom = Math.floor(Math.random() * 1000) + 1;
  const [id, setID] = useState(rendom);
  const { data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  return (
    <div className="flex flex-col items-center pt-[50px]">
      {data && (
        <div className="  w-[400px] px-[30px] py-[45px] rounded-lg hover:bg-slate-700
        
        hover:text-white card  bg-slate-500">
          <button className=" mb-[20px] rounded-full ">
            <p>hp {data.id}</p>
          </button>
          <div className="flex flex-col items-center">
            <img src={data.sprites.other.dream_world.front_default} />
            <h1 className="text-4xl mb-8">{data.name}</h1>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-div">
              <h3 className="text-h3">{data.stats[1].base_stat}</h3>
              <span>Attack</span>
            </div>
            <div className="text-div">
              <h3 className="text-h3">{data.stats[2].base_stat}</h3>
              <span>Defense</span>
            </div>
            <div className="text-div">
              <h3 className="text-h3">{data.stats[5].base_stat}</h3>
              <span>Speed</span>
            </div>
          </div>
          <button
            onClick={() => {
              setID(rendom);
            }}
            className="bg-slate-800 hover:bg-slate-500 text-white px-[30px]
             py-[15px] ml-[113px] rounded-2xl mt-5"
          >
            Generat
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
