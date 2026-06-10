import { links } from "../../utilities/utils"
import './Header.css'
export default ()=>{
    
    return(

        <header className="h_cover">
            <aside className="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiySZc
                YsEXKVA_aElM0lyHzechGh-_2HL_oQ&s" alt="my logo"/>
                <h1>BookSite</h1>
            </aside>
            
            <ul className="links">
                {links.map((link, index)=>(
                    <li key={index}>
                        <a href="">{link}</a>
                    </li>
                ))}
            </ul>
            
        </header>
    

    )
}