import { useContext } from 'react';
import QuizContext from '../QuizContext';
import ModeScreen from './ModeScreen';
import Start from './Start';
import { categories } from '../categories';

export default function StartContainer() {
  const { selectedCategoryId } = useContext(QuizContext);

  return (
    <section className='flex flex-col gap-y-5 items-center'>
      {selectedCategoryId === undefined ? (
        <Start />
      ) : (
        <ModeScreen topic={categories[selectedCategoryId]} isOpen={true} />
      )}
    </section>
  );
}
