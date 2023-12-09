import ResultTable from "../components/ResultTable";

export default function Results() {
  let answers: boolean[] = [true, false, false, false, false, false, true, true, true, false];
  
  
  return <section>
    <h1>Results</h1>
    <div className="m-auto w-6/12">
      
      <ResultTable resultArray={answers}/>
    </div>
    </section>;
}
