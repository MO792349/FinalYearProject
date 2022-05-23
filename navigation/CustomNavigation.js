//imports everything as React
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen';
import ActivityScreen from './screens/ActivityScreen';
import JournalScreen from './screens/JournalScreen';
import OpenedEntry from './screens/OpenedEntry';

const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
    return (
        <Stack.Navigator>
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
        <Stack.Navigator>
            <Stack.Screen
                name ="JournalScreen"
                component={JournalScreen}/>
            <Stack.Screen
                name ="OpenedEntry"
                component={OpenedEntry}/>
        
        </Stack.Navigator>
    )
}

export {JournalScreenNavigator};
