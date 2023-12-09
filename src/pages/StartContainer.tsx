import { useContext } from 'react';
import QuizContext from '../QuizContext';
import ModeScreen from './ModeScreen';
import Start from './Start';
import { button_names } from '../categories';

export default function StartContainer() {
  const { selectedCategoryId, setSelectedCategoryId } = useContext(QuizContext);

  return (
    <section className='flex flex-col gap-y-5 items-center'>
      {selectedCategoryId === undefined ? (
        <Start />
      ) : (
        <ModeScreen topic={button_names[selectedCategoryId]} isOpen={true} />
      )}
    </section>
  );
}
