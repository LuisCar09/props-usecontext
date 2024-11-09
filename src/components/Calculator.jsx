import { Link } from "react-router-dom";
import { useCalculator } from "./CalculatorProvider"
import { useState } from "react";

const Calculator = () => {
    const [numbers,setNumbers] = useState([
        { number: 1, active: false },
        { number: 2, active: false },
        { number: 3, active: false },
        { number: 4, active: false },
        { number: 5, active: false },
        { number: 6, active: false },
        { number: 7, active: false },
        { number: 8, active: false },
        { number: 9, active: false },
        { number: 0, active: false }
      ]);
      
    const { result, numberList, addNumber, changeResult,resetResult } = useCalculator()
    const [active,setActive] = useState(false)

    const handlerActiveButton = (number) => {
        setNumbers((preve) => {
           return(
            preve.map(prev => {
                if (prev.number === number) {
                    return {...prev,active:true}
                }else{
                    return {...prev,active:false}
                }
            })
           )
        } )
        addNumber(number)
    }
    return (
        <main className="container">
            <div className="display">{numberList.length >= 1 ? numberList[numberList.length - 1] : 0} </div>
            <article className="buttons">
                
                {numbers.map(num => <div className={num.active ? "divs active" : "divs"} key={num.number} style={{cursor:'pointer'}} onClick={() => handlerActiveButton(num.number) } > {num.number}</div>)}


            </article>
            <Link to={'/result'} onClick={changeResult}>
                <button>Result</button>
            </Link>
            
            <Link to={'/'} onClick={resetResult}>
            <button>Reset</button>
            </Link>
        </main>
    )
}
export default Calculator