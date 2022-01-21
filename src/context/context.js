import React, {useState} from "react"
import io from "socket.io-client";

const Context = React.createContext()

function ContextProvider({children}) {
    const [user, setUser] = useState('blah')
    const [edit_no, setEdit_No] = useState('dfg')
    

    let endPoint = "http://dockerhost:5011";
    // const endPoint = "http://localhost:5011"
    const socket = io.connect(`${endPoint}`);


    return (
        <Context.Provider value={{user, setUser, edit_no, setEdit_No, socket}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}