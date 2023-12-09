import AnswerOption from '../comonents/quiz/AnswerOption';
import Answer from '../comonents/quiz/Answer';
import Skip from '../comonents/quiz/Skip';
import Header from '../comonents/quiz/Header';

export default function Quiz() {
  return (
    <section className='flex flex-col items-center gap-y-6'>
      <Header />
      <img src='' alt='IMAGE' /> {/*TODO  image*/}
      <h1 className='mt-15 font-bold'>Pytanie</h1>
      <div className='grid grid-cols-2 gap-2'>
        <AnswerOption name='option1' />
        <AnswerOption name='option2' />
        <AnswerOption name='option3' />
        <AnswerOption name='option4' />
      </div>
      <div className='flex gap-x-2'>
        <Skip />
        <Answer />
      </div>
    </section>
  );
}
