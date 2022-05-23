//imports everything as React
import * as React from 'react';
import { Button, View, Text } from 'react-native';

//Sets up the default view for when on the Affirmations Screen w/ option to go home
export default function ArticleScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text onPress={() => navigation.navigate('Home')}> I am a nested screen </Text>
        </View>
      );
}
