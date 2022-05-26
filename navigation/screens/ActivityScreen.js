//imports everything as React
import * as React from 'react';
import { useRef } from 'react';
import { Image, View, Text, ScrollView } from 'react-native';
import { Animated } from 'react-native-web';
import { useEffect, useState } from 'react';


//Sets up the default view for when on the Affirmations Screen w/ option to go home
const ActivityScreen = ({navigation, route}) => {

  const [selectedActivity, setSelectedActivity] = useState('');

  //Using the useEffect hook to retrieve the selected activity
  React.useEffect(() => {
    let { activity } = route.params;
    setSelectedActivity(activity);

  }, []);


    return (
      <ScrollView >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>

          <Image source ={selectedActivity.image} resizeMode ="center" style ={{height: 300}} ></Image>
          <Text style ={{fontSize: 20, paddingTop:20, paddingBottom: 20, textAlign:'left'}}> {selectedActivity.name} </Text>
         
         <View style={{paddingHorizontal: 20}}>
          <Text style={{paddingBottom:10}}> {selectedActivity.maintext} </Text>
          <Text style={{paddingBottom:10}}> {selectedActivity.maintext2} </Text>
          <Text style={{paddingBottom:10}}> {selectedActivity.maintext3} </Text>
          </View>
        </View>
        </ScrollView>
      );
};

export default ActivityScreen