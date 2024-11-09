import { createContext,useContext,useState } from "react"
const ResultContext = createContext()

export const CalculatorProvider = ({children}) => {
    const [result,setResult] = useState(0)
    const [numberList, setNumberList] = useState([])
    const changeResult = () => {

        numberList.length <= 0 ? setResult(0) : setResult(numberList.reduce((accumulador,currentValue) => accumulador += currentValue,0))
   
    }
    const addNumber = (number) => {
        setNumberList(prev => [...prev,number])
 
    }
    const resetResult = () => {setNumberList([]); setResult(0)}
    return(
        <ResultContext.Provider value={{result,numberList,changeResult,addNumber,resetResult}}>
            {children}
        </ResultContext.Provider>
    )
}

export const useCalculator = () => useContext(ResultContext)



