
import { createContext } from "react"
import { useState } from "react"
export default ()=>{



        const [initial, setInitial]= useState(0)
        const [number, setNumber] = useState(0)
        const [select, setSelect] = useState("")
        let answer;
            if (select === "+"){
                answer = initial + number
            }
                else if (select === "+"){
                answer = initial + number
            }
                else if (select === "-"){
                answer = initial - number
            }
                else if (select === "*"){
                answer = initial * number
            }
                else {
                answer = initial / number
            }
       

    return(
       
        <>
        <main style={{backgroundColor:"gray", width:"100vw", height:"100vh", display:"flex", flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
            <h1>CALCULATOR</h1>
            <div >
                <input name="but" type="radio" placeholder="+"  value={"+"} onChange={(e)=>setSelect("+")}/>
                <input name="but" type="radio"  placeholder="-" value={"-"} onChange={(e)=>setSelect("-")}/>
                <input name="but" type="radio"  placeholder="*" value={"*"} onChange={(e)=>setSelect("*")}/>
                <input name="but" type="radio" placeholder="/"  value={"/"} onChange={(e)=>setSelect("/")}/>
            </div>
            <br/>
            <br/>
            <br/>
            <div>
                <input type="number"   value= {initial} onChange={(e)=>setInitial(Number(e.target.value))}/>
                
            </div>
            <br/>
            <br/>
            <div>
                <input type="number" value={number} onChange={(e)=>setNumber(Number(e.target.value))}/>
            </div>
            <div>
               <h1>
                {answer}
               </h1> 
            </div>
        </main>
        </>
    )
}

// addEventListener
// async functions
// getting data, fetch and axiox
// throw
// error handling
// createContext
