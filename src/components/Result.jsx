import { Link } from "react-router-dom"
import { useCalculator } from "./CalculatorProvider"
const Result = () => {
    const {result,numberList,resetResult} = useCalculator()
    
    
    
    return(
        <>
            <div>Number selected: {numberList.join(',')}</div>
            <div className='result'>total: {result}</div>
            <Link to={'/'} ><button>Calculator</button></Link>
            
            
            <Link onClick={resetResult}><button>Reset</button></Link>
        </>
    )
}

export default Result