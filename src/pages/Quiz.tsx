import Header from '../components/quiz/Header';
import QuestionSection from '../components/quiz/QuestoinSection';

export default function Quiz() {
  return (
    <section className='flex flex-col items-center gap-y-6'>
      <Header />
      <img src='' alt='IMAGE' /> {/*TODO  image*/}
      <QuestionSection />
    </section>
  );
}
