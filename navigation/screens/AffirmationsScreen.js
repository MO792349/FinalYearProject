//imports everything as React
import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity,FlatList, StyleSheet} from 'react-native';
import { SafeAreaView, withSafeAreaInsets } from 'react-native-safe-area-context';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { colours } from '../../src/consts/theme';
import { ScrollView } from 'react-native';

//imports custom data from constants
import affirmationslist from '../../src/consts/affirmationslist';
import AffirmationsCard from '../../components/affirmationcards';
import ArticlesCard from '../../components/articlescard';
import dummyactivities from '../../src/consts/dummyactivities';
import { fonts, sizes } from '../../src/consts/theme';


//Sets up the default view for when on the Affirmations Screen w/ option to go home
export default function AffirmationsScreen({ navigation }) {
    return (
      <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', paddingTop: 20, justifyContent: 'center', backgroundColor: colours.white,}}>
      <View style={{ width: '90%', backgroundColor: colours.hotPink, borderRadius: 30, padding: 20,}}>
        <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '600', color: colours.whitePink, marginBottom: 20, }}>
          Your daily quote: </Text>
        <Text
          style={{
            color: colours.white,
            fontSize: 16,
            fontWeight: '500',
            textAlign: 'center',
            marginBottom: 10,
            paddingHorizontal: 30,
          }}>I am the quote you needed </Text>

        <TouchableOpacity
          style={{
            backgroundColor: colours.white,
            padding: 15,
            marginHorizontal:20,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
            marginVertical: 20,
          }}>
          <Text style={{color: colours.hotPink, fontSize: 15, textAlign: 'center', alignItems: 'center'}}>
           Generate another! 
          </Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row',justifyContent:'space-around'}}>
          <TouchableOpacity
            style={{
              borderWidth: 3,
              borderColor: colours.warmPink,
              borderRadius: 50,
              padding: 10,
              backgroundColor: colours.white
            }}>
            <FontAwesome name="volume-up" size={15} color={colours.hotPink} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 3,
              borderColor: colours.warmPink,
              borderRadius: 50,
              padding: 10,
              backgroundColor: colours.white
            }}>
            <FontAwesome5 name="copy" size={15} color={colours.hotPink} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderWidth: 3,
              borderColor: colours.warmPink,
              borderRadius: 50,
              padding: 10,
              backgroundColor: colours.white
            }}>
            <FontAwesome name="twitter" size={15} color={colours.hotPink} />
          </TouchableOpacity>
        </View>
      </View>

      {/*Affirmations Section*/}
      <View style={{ width: '90%', padding: 20,}}>
         <View style={{flexDirection: 'row', alignItems: 'center', width: "100%", paddingBottom: 10, }}>
           <Text style={{ fontSize: 16, fontWeight: "600",color: colours.black}}> Your Affirmations</Text>
     
         <View style={{width: 250, alignItems: 'center'}}>
           <TouchableOpacity
             style={styles.miniOutlinedButton}
             >
             <Text style={{ fontSize: 11, color: colours.black}}>Discover More</Text>
           </TouchableOpacity>
         </View>
        </View>

        <FlatList
            data={affirmationslist.categories} //gets data from this class holding an array of data
            keyExtractor = {item => '${item.id}'} //gets the item's id
            keyboardDismissMode = 'on-drag'
            showsVerticalScrollIndicator = {false}
            ListHeaderComponent = {<View></View>}
            
            renderItem={({item}) => {
              return (
                < AffirmationsCard containerStyle = {{
                  
                }}
                
                affirmationItem={item}
                onPress={() => navigation.navigate("ActivityScreen", {msg: "I came From Discover"})}/>
              )
            }}
            ListFooterComponent={
              <View
              style={{
                marginBottom: 100
              }}
               ></View>
            }>

          </FlatList>
       </View>
       
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
