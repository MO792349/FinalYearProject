//imports everything as React
import * as React from 'react';
import { Alert, TextInput, Button, View, Text, StyleSheet } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useState } from 'react'

//imports custom made styles from theme.js
import { colours, fonts, sizes } from '../../src/consts/theme';

import AsyncStorage from '@react-native-async-storage/async-storage';
//import AsyncStorageLib from '@react-native-async-storage/async-storage';

const Onboarding = () => {
    return (
        <View style={StyleSheet.container}> </View>
    )
}

 
const styles = StyleSheet.create ({
    constainer: {},
    button: {
        backgroundColor: "#FF4597",
        marginTop: 15,
        padding: 10,
        borderRadius: 30,
        width: 320,
        paddingVertical: 15,
        
      },
})

//Sets up the default view for when on the Onboarding Screen w/ option to go home
export default function OnboardingScreen({ onFinish }) {

    //For storing the value from the text input. Use state is set to an empty value at first. 
    const [firstName, setFirstName]= useState('');

    //The function that handles when the text is changed to store the user's name.
    const onChangeTextHandler = (text) => setFirstName(text)

    //To test that the text is being recieved.
    //console.log(firstName);

    //the function for handling when the continue button is selected to save to storage.
    //creates a new user in storage based off the input values
    const continueHandler = async () => {
        const user = {firstName: firstName};
        await AsyncStorage.setItem('user', JSON.stringify(user));

        //onFinish is a parameter to indicate if a name has been saved by the user. If so, it will call the onFinish method. 
        if(onFinish) onFinish()
       
    };

    return (
        
        <View style={{ backgroundColor: colours.warmPink,  flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style ={{color:colours.white, fontWeight: "700", fontSize: 25}}> Welcome! </Text>
          <Text style ={{color:colours.white, fontWeight: "500",paddingTop: 20, textAlign: 'center', paddingHorizontal: 50, fontSize: 15}}> 
          Let's begin by getting to know each other a little better...</Text>
        

          <View
            style={{
              flexDirection: "row",
              backgroundColor: colours.white,
              borderColor: colours.hotPink,
              borderWidth: 3,
              borderRadius: 40,
              alignItems: "center",
              paddingVertical: 20,
              paddingHorizontal: 5,
              width: '85%',
              marginTop: 30,
            }}
          >
              
            <TextInput
            //setting this up to catch what the user inputs
              value={firstName} 
              onChangeText = {onChangeTextHandler}
            //Styling for default textinput view.
              placeholder="What is your name?"
              style={{ paddingHorizontal: 20, fontSize: 15, color: colours.black }}
            />
            </View>

            <View style={{width: "85%", alignItems: 'center'}}>

            {/*If the user's name is more than 2, then the continue button will appear. This will avoid invalid inputs being saved*/}
            {firstName.trim().length >= 2 ?
            <TouchableOpacity style={styles.button} onPress={continueHandler}> 
             <Text 
             style={{ textAlign: "center", fontWeight: "800", fontSize: 14, color: colours.white}}>
                 Continue
            </Text>

           </TouchableOpacity>
           : null}

           </View>

        </View>
      );
}