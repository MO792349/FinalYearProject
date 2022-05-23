//imports everything as React
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from "@react-navigation/native-stack";
import {HomeScreenNavigator, JournalScreenNavigator} from './CustomNavigation';

//Imports screens
import HomeScreen from './screens/HomeScreen'
import DiscoveryScreen from './screens/DiscoveryScreen'
import JournalScreen from './screens/JournalScreen'
import AffirmationsScreen from './screens/AffirmationsScreen'
import SettingsScreen from './screens/SettingsScreen'



//Constants needed to give the screens names
const homeName = 'Home'
const discoveryName = 'Discover'
const journalName = 'Journal'
const affirmationsName = '#SelfLove'
const settingsName = 'Settings'


//Creates the tab navigator
const Tab = createBottomTabNavigator();

//This is the main function containing all of our navigation
//Requires a NavigatorContainer to contain the navigation details
//Within the tab navigator, the screens to be displayed in order are listed
function MainContainer() {
    return (
        <NavigationContainer>
           <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let routeName = route.name;

                if (routeName === homeName) {
                    iconName = focused ? 'home' : 'home-outline';

                 } else if (routeName === discoveryName) {
                    iconName = focused ? 'library' : 'library-outline';

                 } else if (routeName === journalName) {
                    iconName = focused ? 'journal' : 'journal-outline';

                 } else if (routeName === affirmationsName) {
                    iconName = focused ? 'heart' : 'heart-outline';

                 } else if (routeName === settingsName) {
                    iconName = focused ? 'settings' : 'settings-outline';
                }

            // Returns an icon for the page being displayed
            //This is for when an icon isnt in focus
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
            activeTintColor: '#fd5da8',
            inactiveTintColor: '#FEB1CE',
            labelStyle: { paddingStart: 4, fontSize: 12 },
            style: { 
                padding: 15, 
                height: 80}
          }}>

        <Tab.Screen name={homeName} component={HomeScreenNavigator} />
        <Tab.Screen name={journalName} component={JournalScreenNavigator} />
        <Tab.Screen name={discoveryName} component={DiscoveryScreen} />
        <Tab.Screen name={affirmationsName} component={AffirmationsScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />

        </Tab.Navigator>
     
        </NavigationContainer>


    );
}

export default MainContainer;


