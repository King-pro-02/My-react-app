import React, {useContext, createContext, useState} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/login";
// import  


const AppContext = createContext();

export function AppProvider({children}){
const [app, setApp] = useState(null);

const acceptable = (data)=> setApp(data);

const unacceptable = ()=> setApp(null);

return(

    <AppContext.Provider value={{app, acceptable, unacceptable}}>
        {children}
    </AppContext.Provider>
)

};

export const useApp = ()=>{
    const context = useContext(AppContext)
    if (!context){
        throw new Error ("useApp must be used inside an AppProvider");
    }
    return context;

};