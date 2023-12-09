import { useEffect, useState } from 'react';
import { getQuestions } from '../../api/questions';
import AnswerOption from './AnswerOption';
import Skip from './Skip';
import Answer from './Answer';

export default function QuestionSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    const getQuestionsBox = async () => {
      setIsLoading(true);
      const data = await getQuestions(10, 'Computers');
      setQuestions(data);
    };

    try {
      if (!isLoading && questions.length === 0) getQuestionsBox();
    } catch (e) {
      console.log(e);
    }
  }, [isLoading, questions]);

  return (
    <>
      <h1 className='mt-15 font-bold'>
        {questions.length > 0 ? questions[currentQuestion]['question'] : null}
      </h1>
      <div className='grid grid-cols-2 gap-2'>
        <AnswerOption
          name={
            questions.length > 0
              ? questions[currentQuestion]['correct_answer']
              : null
          }
        />
        <AnswerOption
          name={
            questions.length > 0
              ? questions[currentQuestion]['incorrect_answers'][0]
              : null
          }
        />
        <AnswerOption
          name={
            questions.length > 0
              ? questions[currentQuestion]['incorrect_answers'][1]
              : null
          }
        />
        <AnswerOption
          name={
            questions.length > 0
              ? questions[currentQuestion]['incorrect_answers'][2]
              : null
          }
        />
      </div>
      <div className='flex gap-x-2'>
        <Skip currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}/>
        <Answer />
      </div>
    </>
  );
}
