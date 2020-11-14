import React, {useState,createContext} from 'react';

export const subscriptionsContext = createContext();

export const SubscriptionsContextProvider = props=>{
    const [arrayOfNotWatched,setArrayOfNotWatched]= useState([]);
    const [arrayOfWatched,setArrayOfWatched] =useState([]);

    return(
        <subscriptionsContext.Provider value={{ notWatched: [arrayOfNotWatched,setArrayOfNotWatched], watched: [arrayOfWatched,setArrayOfWatched] }}>
            {props.children}
        </subscriptionsContext.Provider>
    )
}

