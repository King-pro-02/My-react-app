import { Link } from "react-router-dom"
import { links } from "../../utilities/utils"
import './Header.css'
export default ()=>{
    
    return(

        <header className="flex justify-between items-center p-4 bg-amber-600 rounded-4xl lg:rounded-b-2xl">
            <aside className="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiySZc
                YsEXKVA_aElM0lyHzechGh-_2HL_oQ&s" alt="my logo"/>
                <h1>BookSite</h1>
            </aside>
            
            <ul className="inline-flex gap-4">
                {links.map((link, index)=>(
                    <li key={index}>
                        <Link to={link.link}>{link.name}</Link>
                    </li>
                ))}
            </ul>
            
        </header>
    

    )
}