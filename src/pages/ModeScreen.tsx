export default function ModeScreen(props: {topic: string, isOpen: boolean}) {
    const questionNumbers = [
        10,
        30,
        50, 
    ];
    
    return (  <> {props.isOpen ?
        <section className="flex flex-col gap-y-5 items-center">
           <div>
                <p>Quiz o: {props.topic}</p>
            </div>
            <div>
                {questionNumbers.map((number) => {
                    return <button className="flex w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{number} pytań</button>;
                })}
            </div>
            <div>
                <button /* TODO onClick={}*/ className="flex w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Start/</button>;
            </div> 
        </section> : null }</>
    )
}