//imports everything as React
import * as React from 'react';
import { FlatList, Button, View, Text } from 'react-native';
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import ArticlesCard from '../../components/articlescard';

//imports custom data from constants
import dummyactivities from '../../src/consts/dummyactivities';

//imports custom made designs from components

//imports custom made styles from theme.js
import { colours, fonts, sizes } from '../../src/consts/theme';

//Sets up the default view for when on the Discovery Screen w/ option to go home
export default function DiscoveryScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <FlatList
            data={dummyactivities.categories} //gets data from this class holding an array of data
            keyExtractor = {item => '${item.id}'} //gets the item's id
            keyboardDismissMode = 'on-drag'
            showsVerticalScrollIndicator = {false}
            ListHeaderComponent = {<View></View>}
            
            renderItem={({item}) => {
              return (
                < ArticlesCard containerStyle = {{
                  marginHorizontal: sizes.padding
                }}
                
                articleItem={item}
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
          <TouchableOpacity onPress={() => navigation.navigate("ArticleScreen", {msg: "I came From Discover as an"})}>
           <Text >Go to my Journal</Text>
         </TouchableOpacity>
        </View>
      );
}