import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListner } from "../utils/firebase";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const UserProvider = ({ children }) => {
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListner((user) => {
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])

    
    const [currentUser, setCurrentUser] = useState(null)
    const value = { currentUser, setCurrentUser }
    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}