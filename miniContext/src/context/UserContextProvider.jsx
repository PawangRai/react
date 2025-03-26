import React from "react";
import UserContext from "./userContext";
import { useState } from "react";

const UserContextProvider = ({children}) => { // This children here shows the inner components that this provider will contain.
    const [user, setUser] = useState(null)
    return (
        // We have to wrap it in provider and pass in the data it will access.
        <UserContext.Provider value={{user, setUser}}> 
        {children}
        </UserContext.Provider>
    ) 
}

export default UserContextProvider

// First, we have to create a context, then wrap that context in a provider and then pass in values that we want our children components to access. 