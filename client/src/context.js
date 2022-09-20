import { createContext, useState } from "react";

const PropertyContext = createContext();

const PropertyProvider = ({children}) => {

    const [data, setData] = useState();

    const [formData, setFormData] = useState({})
  


    return (
        <PropertyContext.Provider value={{formData, setFormData, data, setData}}>
            {children}
        </PropertyContext.Provider>
    )
} 


export {PropertyProvider, PropertyContext};