import { useContext } from 'react';
import QuizContext from '../QuizContext';
import { button_names } from '../categories';

export default function Start() {

  const {selectedCategoryId, setSelectedCategoryId} = useContext(QuizContext);
  const handleClick = (nameIndex: number) => {
    setSelectedCategoryId(nameIndex);
  }

  return (
    <section className='flex flex-col gap-y-5 items-center'>
      <div>
        <h1 className="mt-10 font-bold">Wybierz kategorie</h1>
      </div>
      {button_names.map((name, nameIndex) => {
        return (
          <button
            key={`${name}${nameIndex}`}
            className='flex w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => {handleClick(nameIndex)}}
          >
            {name}
          </button>
        );
      })}
      <button className='flex w-40 bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Start
      </button>
    </section>
  );
}
