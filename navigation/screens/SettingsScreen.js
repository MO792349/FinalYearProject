//imports in the react native features for buttons, the view and text etc
import { Image, ImageBackground, Button, View, Text, ScrollList, FlatList, StyleSheet } from 'react-native';
import {TextInput,TouchableOpacity} from 'react-native-gesture-handler'
import { SafeAreaView, withSafeAreaInsets } from 'react-native-safe-area-context';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

//imports custom data from constants
import dummyactivities from '../../src/consts/dummyactivities';

//imports custom made designs from components
import { ActivityCard } from '../../components';

//imports custom images from images file
import images from '../../src/consts/images';

//imports custom made styles from theme.js
import { colours, fonts, sizes } from '../../src/consts/theme';
import { ScrollView } from 'react-native';

//Sets up the default view for when on the Settings Screen w/ option to go home
export default function SettingsScreen({ navigation }) {
  //Checking for the user details again
  const [user, setUser] = useState({})

  //checking if a user has been saved
  const findUser = async () => {
    const result = await AsyncStorage.getItem('user');
    console.log(user); 

      //a test to check that ensures a username is only set if the result isnt equal to null. 
    if (result !== null){
    setUser(JSON.parse(result));
    }
  };

  useEffect (() => {findUser(); }, []);

    return (
      <ScrollView >
      <View style = {{ flex: 1, flexDirection: "column", backgroundColor: "white", height: "100%" }}>
     
     <View style={{backgroundColor: colours.softPink, height: "25%", paddingHorizontal: 20}}>
       {/*Greeting*/}
       <Text style={{ fontSize: 16, fontWeight: "600",color: "#00151A", marginTop: 25}}> {`Hello! What would you like to do?`}</Text>
     </View>
     
       {/*Sign Out Section*/}
       <SafeAreaView style ={{flex: 2, paddingTop: -20, paddingHorizontal: 20, paddingBottom:-10}}>
         <View style={{flexDirection: 'row', alignItems: 'center', width: "100%", paddingBottom: 10, }}>
           <Text style={{ fontSize: 16, fontWeight: "600",color: colours.black}}> Sign Out?</Text>
     
         <View style={{width: 400, alignItems: 'center'}}>
           <TouchableOpacity
             style={styles.miniOutlinedButton}
             onPress={console.log(user)}>
             <Text style={{ fontSize: 11, color: colours.black}}>Sign Out</Text>
           </TouchableOpacity>
         </View>
        </View>
    
       </SafeAreaView>

       {/*Change Name Section*/}
       <SafeAreaView style ={{flex: 2, paddingTop: -20, paddingHorizontal: 20, paddingBottom:-10}}>
         <View style={{flexDirection: 'row', alignItems: 'center', width: 300, paddingBottom: 10, }}>
           <Text style={{ fontSize: 16, fontWeight: "600",color: colours.black}}> Change your name:</Text>
     
         <View style={{width: 300, alignItems: 'center'}}>
           <TextInput
             style={styles.userInputText}
             placeholder= "Sign Out">
           </TextInput>
         </View>
        </View>
    
       </SafeAreaView>
     
       {/*Daily Quote Section*/}
       <View style={{backgroundColor: colours.hotPink, paddingHorizontal: 20, padding: 55}}>
         <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: "600",color: "#00151A"}}>Change your goal?</Text>
         <Text style={{ marginTop: 14, textAlign: 'center', fontSize: 11, fontWeight: "400",color: "#00151A"}}>-Credit to the Author</Text>
       </View>
     
       {/*Recommended Reading Section*/}
       <SafeAreaView style ={{flex: 2, paddingBottom:-20, paddingTop: -20, paddingHorizontal: 20, }}>
         <View style={{flexDirection: 'row', alignItems: 'center', width: "100%", paddingBottom: 10,}}>
           <Text style={{ fontSize: 16, fontWeight: "600",color: colours.black}}>Change your name?</Text>
     
         <View style={{width: "65%", alignItems: 'center'}}>
           <TouchableOpacity
             style={styles.miniOutlinedButton}
             onPress={() => navigation.navigate('Discover')}>
             <Text style={{ fontSize: 11, color: colours.black}}>Yes</Text>
           </TouchableOpacity>
         </View>
        </View>
       </SafeAreaView>
     </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF4597",
    marginTop: 15,
    padding: 10,
    borderRadius: 30,
    elevation: 2,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    
  },
  miniOutlinedButton: {
    backgroundColor: "transparent",
    padding: 7,
    paddingHorizontal: 20,
    borderRadius: 30,
    borderColor: "#FF4597",
    borderWidth: 1.5,
  },
  container: {
    flex: 1,
  },
  textBackground: {
    flex:1,
    zIndex:1,

},
saveButton: {
    backgroundColor: "#FF4597",
    padding: 22,
    borderRadius: 60,
    elevation: 2,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: "absolute",
    right: 30,
    //bottom: 10, 
  },
audioButton: {
    backgroundColor: colours.warmPink,
    padding: 15,
    borderRadius: 60,
    elevation: 2,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    position: "absolute",
    marginLeft:45

},
userInputText: {
    fontSize: 15,
    marginRight: 15,
    fontWeight:'300', 
    color: colours.black,
    marginTop: -20,
},
userInput: {
    flexDirection: "column",
    color: colours.whitePink,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginTop: 20,

},
title: {
    color: colours.hotPink,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign:'left',
    paddingStart: 15, 
    width: 220,
},
button: {
  backgroundColor: "#FF4597",
  marginTop: 25,
  padding: 15,
  borderRadius: 30,
  elevation: 2,
  alignItems: "center",
},

backButton: {
  backgroundColor: colours.softPink,
  paddingHorizontal: 15,
  borderRadius: 30,
  padding: 2,
  alignItems: "center",
},
centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22
},
modalView: {
  margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5
}
});
