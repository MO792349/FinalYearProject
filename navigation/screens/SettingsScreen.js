//imports everything as React
import * as React from 'react';
import { Button, View, Text } from 'react-native';

//Sets up the default view for when on the Settings Screen w/ option to go home
export default function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text onPress={() => navigation.navigate('Home')}> Settings </Text>
        </View>
      );
}