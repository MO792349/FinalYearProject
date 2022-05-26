//imports everything as React
import * as React from 'react';
import { Button, View, Text } from 'react-native';

//Sets up the default view for when on the Affirmations Screen w/ option to go home
const ArticleScreen = ({route}) => {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> {route.params.msg} </Text>
      </View>
    );
}

export default ArticleScreen;