import { createContext, useContext, useState } from "react";

const RoboticContext = createContext();

export const RoboticContextProvider = ({children})=>{
    const[robotics,setRobotics] = useState([]);

    return(
        <RoboticContext.Provider value={[robotics,setRobotics]}>
            {children}
        </RoboticContext.Provider>
    )
}

export const useRoboticContext = ()=> useContext(RoboticContext)