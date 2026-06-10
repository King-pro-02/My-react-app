
    import { categories } from "../../utilities/utils"
    import './Book.css'
    import { useState } from "react"
export default ({cat})=>{
    
const [counter, setCounter] = useState(0)
const changeState=()=>setCounter((prev)=> prev+10)

    return(
        
    <>
    <div className="categ_cover" >
    {categories.map((cat, index)=> {
    let rand = Math.floor(Math.random()*255)
    let rand2 = Math.floor(Math.random()*255)
    let rand3 = Math.floor(Math.random()*255)

    
    let style = {backgroundColor: `rgb(${rand}, ${rand2}, ${rand3} )`,}


    return (
            <div className="categ" key={index} style= {style}>
                {cat}
            </div> 
        )
})}
<div>{counter}</div>
<button onClick={changeState}>click</button>
    </div>
    </>
    )
}