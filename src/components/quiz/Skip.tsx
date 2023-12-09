import React from 'react';
import { useContext } from 'react';
import QuizContext from '../../QuizContext';
interface SkipProps {
  currentQuestion: any;
  setCurrentQuestion: any;
}

export default function Skip({ currentQuestion, setCurrentQuestion }: SkipProps) {

  const { selectedModeId } = useContext(QuizContext);
  console.log({selectedModeId})

  const handleClick = () => {
    if (currentQuestion == selectedModeId - 1) 
      alert("You have reached the end of the quiz!");
    else
      setCurrentQuestion(question => question + 1);
  }

  return (
    <button
      className="flex w-30 bg-white border-blue-500 text-blue-500 border-2 rounded-md px-4 py-2"
      onClick={handleClick}
    >
      Skip
    </button>
  );
}