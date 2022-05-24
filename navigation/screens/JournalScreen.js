//imports everything as React
import * as React from 'react';
import { TextInput, FlatList, View, Text, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native';
import { colours } from '../../src/consts/theme';
import { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import JournalEntry from '../../components/JournalEntry';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SavedJournals from '../../components/SavedJournals';
import { NavigationContainer } from '@react-navigation/native';
import OpenedEntry from './OpenedEntry';


//Sets up the default view for when on the Journal Screen w/ option to go home
export default function JournalScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [logVisible, setLogVisible] = useState(false);
  const [entryVisible, setEntryVisible] = useState(false);
  const [listings, setListings] = useState([]);
  
  //function for the handling the save button 
  const onSaveHandler = async (title, entry ) => {
    //console.log(title, entry); // test to ensure the title and entry values are being read.

    //Each journal entry will be distinguished by what time they were made, therefore resulting in a unique ID.
    const journalListing = {id: Date.now(), title, entry, time: Date.now() };
    console.log(journalListing); //test to ensure journal listins are being saved
    const updatedListing = [...listings, journalListing];
    setListings(updatedListing);
    await AsyncStorage.setItem('listings', JSON.stringify(updatedListing))
  }

  const findListings = async () => {
    const result = await AsyncStorage.getItem('listings');
    //console.log(result); //test to check that journal listings are able to be retrieved
    if(result !== null) setListings(JSON.parse(result));

  };

  useEffect(() => {
    findListings();
  }, []);

  //the method to send the current item in the journal listings to the Opened Entry page.
  const openJournal = (listing) => {
    navigation.navigate("OpenedEntry", {listing});
  };
  
    return (
      
        <View style={{ paddingHorizontal: 20,  flex: 1, backgroundColor: colours.white }}>


        <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{color: colours.hotPink, fontWeight:"bold", fontSize: 18, textAlign:'left'}}>The Benefits of Journalling</Text>
            
            <Text style={{marginTop: 20, color: colours.hotPink, fontSize: 14, textAlign:'left'}}>
              Integer non ullamcorper enim, in laoreet erat.Integer non ullamcorper enim, in laoreet erat.</Text>

            <Text style={{marginTop:10, color: colours.hotPink, fontSize: 14,}}>
                Sed vel interdum odio. Sed molestie vestibulum imperdiet.</Text>

            <Pressable
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={{color: colours.white, fontWeight:"bold"}}>Got it!</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

          <View
            style={{
              flexDirection: "row",
              backgroundColor: colours.warmPink,
              color: colours.whitePink,
              borderRadius: 40,
              paddingVertical: 5,
              paddingHorizontal: 15,
              width: 290,
              marginTop: 20,
              alignItems: 'center'
              
            }}
          >
            <Ionicons name="search" size={20} color={colours.white} />
            <TextInput
              placeholder="Search Journal"
              placeholderTextColor={colours.softPink}
              style={{fontSize: 15, marginRight: 10, width: "100%", fontWeight:'500',  color: colours.white, paddingHorizontal: 20, }}
            />
          
          <View style={{ alignItems: 'left'}}>
           <TouchableOpacity
             style={styles.miniOutlinedButton}
             onPress={() => setModalVisible(true)}>
             <Text style={{ fontSize: 20, fontWeight:'900', color: colours.hotPink}}>?</Text>
           </TouchableOpacity>
         </View>
         </View>

         <FlatList
            data ={listings}
            numColumns={2}
            marginTop= '5%'
            keyExtractor = {item => item.id.toString()}
            columnWrapperStyle={{justifyContent:'space-between', marginBottom: 14}}
            renderItem = {({item}) => <SavedJournals onPress={() => openJournal(item)} item = {item}/>}
          ></FlatList>

          

         {!listings.length ? (
          <View>
             <Text style={{paddingHorizontal: 5, marginTop: 30, textAlign:'left' }}>You currently have no journal entries.</Text>
              <Text style={{paddingHorizontal: 5, marginTop: 10, marginRight: 15, textAlign:'left' }}>There are so many benefits to journaling, try adding a new entry!</Text> 
           </View>
        ) : null }

          <View>
          <TouchableOpacity
             style={styles.addButton}
             onPress={() => setEntryVisible(true)}
             >
             <Ionicons name="pencil" size={40} color={colours.white} />
           </TouchableOpacity>
          </View>

          <JournalEntry 
            visible={entryVisible} 
            onClose={() => setEntryVisible(false)}
            onSubmit={onSaveHandler}/>
    
        </View>
      );
}

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: colours.softPink,
    paddingHorizontal: 10,
    borderRadius: 30,
    padding: 2,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#FF4597",
    marginTop: 25,
    padding: 15,
    borderRadius: 30,
    elevation: 2,
    alignItems: "center",
  },
  addButton: {
    backgroundColor: "#FF4597",
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
   bottom: 40, 
    
  },
  miniOutlinedButton: {
    backgroundColor: "transparent",
    padding: 7,
    paddingHorizontal: 15,
    borderRadius: 30,
    borderColor: "#FF4597",
    borderWidth: 3,
  },
  container: {
    flex: 1,
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
  },
  entryView: {
    margin: 20,
    backgroundColor: colours.white,
    borderRadius: 20,
    padding: 35,
    paddingBottom: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }

});
