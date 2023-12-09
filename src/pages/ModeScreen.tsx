import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import QuizContext from '../QuizContext';
import StartButton from '../components/StartButton';

export default function ModeScreen(props: { topic: string; isOpen: boolean }) {
  const { selectedModeId, setSelectedModeId } = useContext(QuizContext);
  const navigate = useNavigate();

  const questionNumbers = [10, 30, 50];

  let startButtonClass = 'flex w-40 text-white font-bold py-2 px-4 mt-20 rounded';
  const handleClick = (number: number) => {
    setSelectedModeId(number);
  };

  const handleStartClick = () => {
    if (selectedModeId !== undefined) {
      navigate("/quiz");
    }
  };

  
  return (
    <>
      {props.isOpen ? (
        <section className='flex flex-col gap-y-5 items-center'>
          <div>
            <h1 className='mt-10 font-bold'>Quiz o {props.topic}</h1>
          </div>
          <div>
            {questionNumbers.map((number) => {
              return (
                <button
                  key={`${number}`}
                  className='flex w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-5 rounded'
                  onClick={() => {
                    handleClick(number);
                  }}
                >
                  {number} pytań
                </button>
              );
            })}
          </div>
          <div>
            <StartButton name="Start" onClick={handleStartClick} style={startButtonClass} disabled={typeof selectedModeId === 'number'}/>
          </div>
        </section>
      ) : null}
    </>
  );
}
