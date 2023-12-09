import { useState } from "react";
import ModeScreen from "./ModeScreen";

export default function Start() {
  const button_names = [
    'General Knowledge',
    'Books',
    'Film',
    'Music',
    'Video Games',
    'Mythology',
  ];

  const [modeScreenIsOpen, setModeScreenIsOpen] = useState(false);
 
  return (
    <section className="flex flex-col gap-y-5 items-center">
      {button_names.map((name) => {
        return <button onClick={() => { setModeScreenIsOpen(true);}} className="flex w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{name}</button>;
      })}
      <ModeScreen topic={"sample"} isOpen={modeScreenIsOpen}/>
      <button className="flex w-40 bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Start</button>
    </section>
  );
}
