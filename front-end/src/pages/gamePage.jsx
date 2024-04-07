
import { useState, useEffect } from "react";
import Prompt from "../components/gamePromptComponent";
import { Link, useNavigate } from 'react-router-dom'

import gamePromptPage from "../data/gamePromptPage";

function Game() {
  const [gameData, setGameData] = useState(null);
  const [optionSelected, setOptionSelected] = useState(gamePromptPage[18].id);
  let navigate = useNavigate();

  const handleOptionSelect = (optionId) => {
    setOptionSelected(optionId);
  };


const prompt = gamePromptPage.find(prompt => prompt.id === optionSelected);

if (prompt.isGameOver) {
  return (
    <div>
      <hr className="my-0 border-red-200 sm dark:border-red-700 lg:my-4" />
      <br></br>
      <img className="w-full md:w-1/2 mx-auto pb-10" src="https://i.ibb.co/QNg8z48/stop.jpg" />
      <h1 className='text-center font-extrabold text-pink-400'>STOP!</h1>
      <p className="grid grid-cols-1 gap-2 text-left text-pink-400 font-semibold">Your actions are considered unethical.</p>
      <p className="grid grid-cols-1 gap-2 text-left text-white">{prompt.text.split("\n").map((i,key) => {
            return <div key={key}><p>{i}</p></div>;
        })}
        </p>
        <br></br>
        <div className="grid grid-cols-2 gap-6">
        <button className="gap-6 bg-pink-400 hover:bg-pink-500 text-white font-semibold py-2 px-4 rounded"
        onClick={() => navigate('/')}
        >Return to home
        </button>
        <button className="gap-6 bg-pink-400 hover:bg-pink-500 text-white font-semibold py-2 px-4 rounded"
        onClick={() => navigate('/startGame')}>
          Play again
        </button>
      </div>
    </div>
  );
}
if (prompt.isSuccess) {
  return (
    <div>
      <hr className="my-0 border-red-200 sm dark:border-red-700 lg:my-4" />
      <br></br>
      <img className="w-full md:w-1/2 mx-auto pb-10" src="https://i.ibb.co/L9MTr8Q/success.jpg" />
      <h1 className='text-center font-extrabold text-green-400'>Congratulations</h1>
      <p className="grid grid-cols-1 gap-2 text-left text-green-400 font-semibold" >You  made the ethical choice.</p>
      <p className="grid grid-cols-1 gap-2 text-left text-white">{prompt.text.split("\n").map((i,key) => {
            return <div key={key}><p>{i}</p></div>;
        })}
        </p>
        <br></br>
        <div className="grid grid-cols-2 gap-6">
        <button className="gap-6 bg-pink-400 hover:bg-pink-500 text-white font-semibold py-2 px-4 rounded"
        onClick={() => navigate('/')}
        >Return to home
        </button>
        <button className="gap-6 bg-pink-400 hover:bg-pink-500 text-white font-semibold py-2 px-4 rounded"
        onClick={() => navigate('/startGame')}>
          Play again
        </button>
      </div>
    </div>
  );
}
  const divStyle = {
    wordWrap: 'break-word',
    maxWidth: '600px',
    width: '90%' 
  };
  return (
    <div>
      <Prompt
        key={prompt.id}
        text={prompt.text}
        image={prompt.image}
        altText={prompt.altText}
        option1ID={prompt.option1ID}
        option1text={prompt.option1text}
        option2ID={prompt.option2ID}
        option2text={prompt.option2text}
        option3ID={prompt.option3ID}
        option3text={prompt.option3text}
        setOptionSelected={handleOptionSelect}
        isTransition={prompt.isTransition}
        isThirdOption={prompt.isThirdOption}

      />
    </div>
  );
}

export default Game;
