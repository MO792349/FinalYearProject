//imports everything as React
import * as React from 'react';

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


//Sets up the default view for when on the HomeScreen
export default function HomeScreen({ navigation }) {

  //Finding the correct time of day to address the user with.
  const [welcome, setWelcome] = useState('');

  const findWelcomeMsg = () => {
    const hours = new Date().getHours();
    if (hours === 0 || hours < 12) return setWelcome('Morning');
    if (hours === 1 || hours < 17) return setWelcome('Afternoon');
    setWelcome('Evening');
  };

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

  useEffect (() => { findWelcomeMsg(), findUser(); }, []);

    return (
      <ScrollView >
      <View style = {{ flex: 1, flexDirection: "column", backgroundColor: "white", height: "100%" }}>
     
     <View style={{backgroundColor: colours.softPink, height: "25%", paddingHorizontal: 20}}>
     
       {/*Welcome text*/}
       <Text style={{ fontSize: 16, fontWeight: "600",color: "#00151A", marginTop: 25}}> {`Good ${welcome} ${user.firstName}`}</Text>
     
       {/*Checkin Section Styling*/}
       <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15, width: "100%"}}>
     
          {/*The mascot image*/}
          <View style={{width:"50%"}}> 
           <Image source = {images.mascot} style={{ height: 130, width: 180, marginTop: 13}}/>
         </View>
     
         {/*The Journal Checkin Section */}
         <View style={{width: "50%", alignItems: 'center'}}>
     
         {/*The Journal check in message*/}
         <Text style={{ fontSize: 14, color: colours.black }}>How do you feel today?</Text>
         <Text style={{ fontSize: 11, color: colours.black, marginTop: 5}}>Log something in your journal!</Text>
     
         {/*The Journal Button styling & navigation*/}
         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Journal')}>
           <Text style={{ fontSize: 11, color: colours.white}}>Go to my Journal</Text>
         </TouchableOpacity>
     
         </View>
       </View>
     </View>
     
     {/*Styling for the main body*/}
     
       {/*Recommended Activities Section*/}
       <SafeAreaView style ={{flex: 2, paddingTop: -20, paddingHorizontal: 20, paddingBottom:-10}}>
         <View style={{flexDirection: 'row', alignItems: 'center', width: "100%", paddingBottom: 10, }}>
           <Text style={{ fontSize: 16, fontWeight: "600",color: colours.black}}> Recommended Activities</Text>
     
         <View style={{width: "60%", alignItems: 'center'}}>
           <TouchableOpacity
             style={styles.miniOutlinedButton}
             onPress={() => navigation.navigate('Discover')}>
             <Text style={{ fontSize: 11, color: colours.black}}>See More</Text>
           </TouchableOpacity>
         </View>
        </View>
     
        <FlatList
         data={dummyactivities.categories} //gets data from this class holding an array of data
         keyExtractor = {item => '${item.id}'} //gets the item's id
         keyboardDismissMode = 'on-drag'
         showsVerticalScrollIndicator = {false}
         horizontal={true}
         ListHeaderComponent = {<View></View>}
     
         renderItem={({item}) => {
         
           return (
             <ActivityCard containerStyle = {{width: 280, marginLeft: 14}}
                           activityItem={item}
                           onPress={() => navigation.navigate("ActivityScreen", {msg: "I came From Screen1"})}/> //onPress={() navigation.navigate ("Activity", {activity: item})}
            )
         }}
     
          ListFooterComponent={<View style={{ marginBottom: 100 }}></View>}>
       </FlatList>
       </SafeAreaView>
     
       {/*Daily Quote Section*/}
       <View style={{backgroundColor: colours.hotPink, paddingHorizontal: 20, padding: 55}}>
         <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: "600",color: "#00151A"}}>Inspirational Quote</Text>
         <Text style={{ marginTop: 14, textAlign: 'center', fontSize: 11, fontWeight: "400",color: "#00151A"}}>-Credit to the Author</Text>
       </View>
     
       {/*Recommended Reading Section*/}
       <SafeAreaView style ={{flex: 2, paddingBottom:-20, paddingTop: -20, paddingHorizontal: 20, }}>
         <View style={{flexDirection: 'row', alignItems: 'center', width: "100%", paddingBottom: 10,}}>
           <Text style={{ fontSize: 16, fontWeight: "600",color: colours.black}}> Recommended Reading</Text>
     
         <View style={{width: "65%", alignItems: 'center'}}>
           <TouchableOpacity
             style={styles.miniOutlinedButton}
             onPress={() => navigation.navigate('Discover')}>
             <Text style={{ fontSize: 11, color: colours.black}}>See More</Text>
           </TouchableOpacity>
         </View>
        </View>
     
        <FlatList
         data={dummyactivities.categories} //gets data from this class holding an array of data
         keyExtractor = {item => '${item.id}'} //gets the item's id
         keyboardDismissMode = 'on-drag'
         showsVerticalScrollIndicator = {false}
         horizontal={true}
         ListHeaderComponent = {<View></View>}
     
         renderItem={({item}) => {
         
           return (
             <ActivityCard containerStyle = {{width: 280, marginLeft: 14}}
                           activityItem={item}
                           onPress={() => navigation.navigate ("Discover")}/> //onPress={() navigation.navigate ("Activity", {activity: item})}
            )
         }}
     
          ListFooterComponent={<View style={{ marginBottom: 100 }}></View>}>
       </FlatList>
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

});

