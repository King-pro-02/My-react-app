
import { bookdetails } from "../../utilities/utils"
import './Book.css'
import { useState } from "react"

export default ({props})=>{
const [search, setSearch] = useState("")
const filtItems = bookdetails.filter((item)=>item.booktitle.toLowerCase().includes(search.toLowerCase()))
    return(
        <>
        <input type="text"  placeholder="search" value={search} onChange={(e)=> setSearch(e.target.value)}/>
        <aside className="card">{
            filtItems.map((item, index)=>
            <div className="book_container" key={index}>
                <div className="book_img"><img src={item.img} alt="book"/></div>
                <div className="book_text">
                    <h1 >{item.booktitle}</h1>
                    <small>{item.bookdescription}</small>
                </div>
            </div>
            )  
        }
        </aside>
    </>)
}