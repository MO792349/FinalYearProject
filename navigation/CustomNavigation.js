//imports everything as React
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen';
import ActivityScreen from './screens/ActivityScreen';
import JournalScreen from './screens/JournalScreen';
import OpenedEntry from './screens/OpenedEntry';
import JournalAPI from '../logic/JournalAPI';


const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name ="HomeScreen"
                component={HomeScreen}/>
            <Stack.Screen
                name ="ActivityScreen"
                component={ActivityScreen}/>
        
        </Stack.Navigator>
    )
}

export {HomeScreenNavigator};

const JournalScreenNavigator = () => {
    return (
        <JournalAPI>
        <Stack.Navigator screenOptions={{headerTitle: '', headerTransparent: true}}>
            <Stack.Screen
                name ="JournalScreen"
                component={JournalScreen}/>
            <Stack.Screen
                name ="OpenedEntry"
                component={OpenedEntry}/>
        
        </Stack.Navigator>
        </JournalAPI>
    
    )
}

export {JournalScreenNavigator};
