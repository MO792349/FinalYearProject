//imports everything as React
import * as React from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react'
import { colours } from '../src/consts/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Speech from 'expo-speech';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

const JournalEntry = ({ visible, onClose, onSubmit}) => {

    //for speech to text.
    const speak = () => {
        const thingToSay = 'The user should be speaking not me';
        Speech.speak(thingToSay);
      };

    //constant variables to store the user's inputs.
    const [title, setTitle] = useState('');
    const [entry, setEntry] = useState('');

    //function to handle changes to the text inputs.
    const onChangeTextHandler = (text, valueType )=> {

        //checks what the type of text value it is, title or the entry itself and then sets that change to the variable
        if(valueType === 'title') setTitle(text);
        if(valueType === 'entry') setEntry(text);

    }

    //function to save the user's journal entry.
    const saveHandler = ()=> {
        if(!title.trim() && !entry.trim()) return onClose();
        onSubmit(title, entry);
        setTitle('');
        setEntry('');
        onClose();
    }

    //function to not save, and go back to the main journal view AND TO CLEAR CONTENTS
    const exitHandler = ()=> {
        setTitle('');
        setEntry('');
        onClose();
    }

    return (
       
        <Modal visible={visible} animationType='fade'>
        <View style={styles.container}>

            <View style={{flexDirection: 'row',  paddingBottom: 10,}}>
            <TextInput 
                value={title}
                style={styles.title} 
                placeholder="Untitled" 
                placeholderTextColor={colours.warmPink}
                multiline={true}
                onChangeText={(text) => onChangeTextHandler(text, 'title')}>
                
            </TextInput>
            
            <View style={{width: "35%", alignItems:'flex-end' }}>
            <TouchableOpacity style={styles.backButton} onPress={exitHandler}>
                <Ionicons name="arrow-back-outline" size={30} color={colours.hotPink} />
            </TouchableOpacity>
            </View>
            </View>
            

            <Text style={{paddingHorizontal: 15, paddingTop: 10,}}>Date and Time </Text>

            <View style={styles.userInput}>
            <TextInput 
                value={entry}
                style={styles.userInputText} 
                placeholder="Whats on your mind?" 
                placeholderTextColor={colours.lightGrey}
                multiline={true}
                onChangeText={(text) => onChangeTextHandler(text, 'entry')}
                >
            </TextInput>
            </View>
            </View>
            <TouchableWithoutFeedback 
                //needed to minimise the keyboard when the user presses outside of the text area.
                onPress={Keyboard.dismiss}
                accessible={false}>
                <View style={[styles.textBackground]}></View>
            </TouchableWithoutFeedback>

            <View style={{  paddingHorizontal: 15, paddingLeft: 5, height: 150, paddingBottom: 10,}}>
                
            <TouchableOpacity style={styles.audioButton} onPress={speak}>
                <Ionicons name="mic" size={40} color={colours.hotPink} />
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.saveButton}
                onPress={saveHandler}>
                <Text style={{color:colours.white, fontWeight:'bold', fontSize: 18}}>Save</Text>
            </TouchableOpacity>
            
            </View>
        </Modal>

    )
}

export default JournalEntry; 

const styles = StyleSheet.create({
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
    container: {
        paddingHorizontal: 20,
        paddingTop: 80,
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