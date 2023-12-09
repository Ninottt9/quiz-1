function ResultTable({resultArray} : {resultArray : boolean[]}) {
    return <div className="w-2/4 flex flex-wrap gap-5">
        {resultArray.map((el) => { 
            let className: string = "h-20 w-20 ";
            className = ( el === true ? className.concat("bg-emerald-900") : className.concat("bg-rose-900") ); 
            return (
                <div className={className}> 
                </div>
            ) 
        })}
    </div>
}

export default ResultTable;