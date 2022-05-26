//imports everything as React
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen';
import ActivityScreen from './screens/ActivityScreen';
import JournalScreen from './screens/JournalScreen';
import OpenedEntry from './screens/OpenedEntry';
import JournalAPI from '../logic/JournalAPI';
import DiscoveryScreen from './screens/DiscoveryScreen';
import ArticleScreen from './screens/ArticleScreen';


const Stack = createStackNavigator();

//Stack Navigation rules for the Home page
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

//Stack Navigation rules for the Journals page
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

//Stack Navigation rules for the Discovery page
const DiscoveryScreenNavigator = () => {
    return (
        <JournalAPI>
        <Stack.Navigator screenOptions={{headerTitle: '', headerTransparent: true}}>
            <Stack.Screen
                name ="DiscoveryScreen"
                component={DiscoveryScreen}/>
            <Stack.Screen
                name ="ActivityScreen"
                component={ActivityScreen}/>
            <Stack.Screen
                name ="ArticleScreen"
                component={ArticleScreen}/>
        
        </Stack.Navigator>
        </JournalAPI>
    
    )
}

export {DiscoveryScreenNavigator};
