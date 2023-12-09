import { useEffect, useState } from 'react';
import { getQuestions } from '../../api/questions';
import AnswerOption from './AnswerOption';
import Skip from './Skip';
import Answer from './Answer';

export default function QuestionSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const getQuestionsBox = async () => {
      setIsLoading(true);
      const data = await getQuestions(10, 'Computers');
      setQuestions(data);
    };

    try {
      if (!isLoading && questions.length === 0) getQuestionsBox();
    } catch (e) {
      console.error(e);
    }
  }, [isLoading, questions]);

  const handlQuestionClick = (answer) => {
    setSelectedAnswer(answer);
  };

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
          onClick={() =>
            handlQuestionClick(questions[currentQuestion]['correct_answer'])
          }
        />
        <AnswerOption
          name={
            questions.length > 0
              ? questions[currentQuestion]['incorrect_answers'][0]
              : null
          }
          onClick={() =>
            handlQuestionClick(
              questions[currentQuestion]['incorrect_answers'][0]
            )
          }
        />
        <AnswerOption
          name={
            questions.length > 0
              ? questions[currentQuestion]['incorrect_answers'][1]
              : null
          }
          onClick={() =>
            handlQuestionClick(
              questions[currentQuestion]['incorrect_answers'][1]
            )
          }
        />
        <AnswerOption
          name={
            questions.length > 0
              ? questions[currentQuestion]['incorrect_answers'][2]
              : null
          }
          onClick={() =>
            handlQuestionClick(
              questions[currentQuestion]['incorrect_answers'][2]
            )
          }
        />
      </div>
      <div className='flex gap-x-2'>
        <Skip
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
        />
        <Answer
          onClick={() => {
            setCurrentQuestion((prevQuestion) => prevQuestion + 1);
            setAnswers((prevAnswers) => {
              return { ...prevAnswers, [currentQuestion]: selectedAnswer };
            });
          }}
        />
      </div>
    </>
  );
}
