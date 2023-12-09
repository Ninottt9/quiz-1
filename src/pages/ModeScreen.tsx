export default function ModeScreen(props: {topic: string, isOpen: boolean}) {
    const questionNumbers = [
        10,
        30,
        50, 
    ];
    
    return (  <> {props.isOpen ?
        <section className="flex flex-col gap-y-5 items-center">
            <div>
                <h1 className="mt-10 font-bold">Quiz o {props.topic}</h1>
            </div>
            <div>
                {questionNumbers.map((number) => {
                    return <button className='flex w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-5 rounded'>{number} pytań</button>
                })}
            </div>
            <div>
                <button /* TODO onClick={}*/ className="flex w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-20 rounded">Start</button>
            </div> 
        </section> : null }</>
    )
}