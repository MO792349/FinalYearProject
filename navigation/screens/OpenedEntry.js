//imports everything as React
import * as React from 'react';
import { Button, View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { colours } from '../../src/consts/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';


//Sets up the default view for when on the OpenedEntry nested screen 
const OpenedEntry = props => {

  //to send the journal information to this page.
  const { listing } = props.route.params;
  const formatDate = past => {
    const date = new Date(past);

    var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthName = months[date.getMonth()];
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hrs = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
  
    return `${day}th ${monthName} ${year}`;

  };

  //for an alert box to appear to warn the user about deleting this entry
  const deleteAlert = () => {
    Alert.alert('Are you sure want like to delete this entry?', 'This journal entry will be deleted permanently', [
      {
        text: 'Delete', onPress: deleteJournalListing
      },
      {
        text: "Don't Delete", onPress: () => console.log("Don't Delete")
      },
    ],
    {cancelable:true,})
  };

  //the function to delete an entry out of the user's storage
  //needs to sync with the storage of the user and retrieve all its notes. 
  const deleteJournalListing = async () => {
    const result = await AsyncStorage.getItem('listings');
    let listings = [];

    if(result !== null) 
      listings = JSON.parse(result);

    //all the listing items in the array and filtered through and as long as it isn't the id of the item the user has selected,
    //the items will be added back into the empty listings array. 
    const newListing = listings.filter(i => i.id !== listing.id);
    await AsyncStorage.setItem('listings', JSON.stringify(newListing));
    props.navigation.goBack(); //takes the user back to the main journal screen they came from since the entry is deleted.
  }

    
    return (
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={{fontSize: 12, color:colours.lightGrey, textAlign:'left', paddingTop: 5, paddingBottom: 6, paddingHorizontal: 7,}}>Created on: {formatDate(listing.time)}</Text>

          <View style={{flexDirection: 'row',  paddingBottom: 10, }}>
          <Text style={styles.title}> {listing.title}</Text>
          </View>
          <Text style={{textAlign:'left', paddingTop: 10, paddingHorizontal: 10,}}>{listing.entry}</Text>

          <View style={{flexDirection: 'row', marginTop:150, paddingHorizontal: 15, paddingLeft: 5, height: 150, paddingBottom: 10,}}>
                
            <TouchableOpacity style={styles.audioButton}>
                <Ionicons name="pencil" size={40} color={colours.white} />
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.saveButton} onPress={deleteAlert}>
                <Ionicons name="trash" size={40} color={colours.white} />
            </TouchableOpacity>
            
          </View>

        </ScrollView>
      );
};

export default OpenedEntry;

const styles = StyleSheet.create({
  textBackground: {
      flex:1,
      zIndex:1,

  },
  saveButton: {
      backgroundColor: 'red',
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
      elevation: 5,
      position: "absolute",
      right: 5,
      bottom: -180, 
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
      marginLeft:45,
      right: 5,
      bottom: -90,

  },
  userInputText: {
      fontSize: 15,
      marginRight: 15,
      fontWeight:'300', 
      color: colours.black,
      marginTop: -20
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
      fontSize: 30,
      textAlign:'left',

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
  container: {
      paddingHorizontal: 20,
      paddingTop: 60,
      
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