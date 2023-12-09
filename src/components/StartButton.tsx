function StartButton({onClick, name,disabled, style} : {disabled? : boolean , onClick : () => void, name : string, style: string}) {
    const backgroundColor = disabled ? "bg-blue-500" : 'bg-blue-300'; 
    return (<button onClick={onClick} className={`${backgroundColor} ${style}`} disabled={!disabled}>
        {name}
    </button>)
}

export default StartButton;