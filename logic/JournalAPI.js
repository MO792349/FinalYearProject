//imports everything as React
import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState, useContext } from 'react'

const JournalLogic = createContext();
const JournalAPI = ({children}) => {
    const [listings, setListings] = useState([]);

    const findListings = async () => {
        const result = await AsyncStorage.getItem('listings');
        //console.log(result); //test to check that journal listings are able to be retrieved
        if(result !== null) setListings(JSON.parse(result));
    
      };
    
      useEffect(() => {
        findListings();
      }, []);

    return (
        <JournalLogic.Provider value = {{listings, setListings, findListings}}>
            {children}
        </JournalLogic.Provider>
    );
};

export const useListings = () => useContext(JournalLogic) //uses the useContext react logic to pass the Journal's logic to the Journal Screen page
export default JournalAPI; 

