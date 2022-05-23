// In App.js in a new project
import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import OnboardingScreen from './navigation/screens/OnboardingScreen';
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';


//Returns the MainContainer which is what holds all our navigation
function App() {

  const [user, setUser] = useState({})
  //checking if a user has been saved
  const findUser = async () => {
    const result = await AsyncStorage.getItem('user');

    //a test to check that ensures a username is only set if the result isnt equal to null. 
    if (result !== null){
    setUser(JSON.parse(result));
    }

    //console.log(result);
    //console.log('hello u found me');
  };

  const Stack = createStackNavigator();

  useEffect (() => { 
    findUser();
    //AsyncStorage.clear();
   }, []);

   //a function is needed just in case its a user's first time in the system and they have no details stored. 
   // if there isnt a username, it will return the state of the findUser function through to the Onboarding screen. 
   if(!user.firstName) return <OnboardingScreen onFinish={findUser}/>;

   return (
     
  <MainContainer user={user}/>
    //<OnboardingScreen/>
  )
}

export default App;