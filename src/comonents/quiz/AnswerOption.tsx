import React from 'react';

interface AnswerOptionProps {
  name: string;
}

export default function AnswerOption({ name }: AnswerOptionProps) {
  return (
    <button className='flex w-40 bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
      {name}
    </button>
  );
}
