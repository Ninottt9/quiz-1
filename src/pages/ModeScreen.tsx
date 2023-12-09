import { useContext } from 'react';
import QuizContext from '../QuizContext';

export default function ModeScreen(props: {topic: string, isOpen: boolean}) {

    const { selectedModeId, setSelectedModeId } = useContext(QuizContext);

    const questionNumbers = [
        10,
        30,
        50, 
    ];

    const handleClick = (number: number) => {
        setSelectedModeId(number);
    };
    
    return (  <> {props.isOpen ?
        <section className="flex flex-col gap-y-5 items-center">
           <div>
                <p>Quiz o: {props.topic}</p>
            </div>
            <div>
                {questionNumbers.map((number) => {
                    return <button key={`${number}`}
                     className="flex w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {handleClick(number)}}
                    >{number} pytań</button>;
                })}
            </div>
            <div>
                <button /* TODO onClick={}*/ className="flex w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Start/</button>;
            </div> 
        </section> : null }</>
    )
}