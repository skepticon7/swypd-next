"use client";

import {useContext , createContext , useState} from "react"

const ServiceContext = createContext();

export const ServiceProvider = ({children}) => {
    const [selectedService , setSelectedService] = useState(null);

    return (
        <ServiceContext.Provider value={{selectedService , setSelectedService}}>
            {children}
        </ServiceContext.Provider>
    )
}

export const useService = () => useContext(ServiceContext)