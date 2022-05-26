//imports everything as React
import * as React from 'react';

//imports in the react native features for buttons, the view and text etc.
import { Image, View, Text } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

//imports custom made styles from theme.js
import { colours, sizes, fonts } from '../src/consts/theme';

const ArticlesCard = ({ containerStyle, articleItem, onPress}) => {
    
    return (
        <TouchableOpacity 
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                marginTop: 10,
                borderRadius: sizes.radius,
                backgroundColor: colours.softPink,
                ...containerStyle
        }}
        
        onPress={onPress}>

            {/*The Images*/}
            <Image
                source = {articleItem.image}
                resizeMode = 'cover'
                style = {{width: 100, height: 100, borderRadius: sizes.radius}}/>

            {/*The Title*/}

            <View style = {{width: '65%', paddingHorizontal: 15, paddingTop: 10}}>
            <Text style={{
                flex:1,
                fontSize: 14, 
                fontWeight: "600",
            }}>
                {articleItem.name}
            </Text>

            {/*The Context*/}
            <Text style={{
                flex:2,
                fontSize: 11, 
                fontWeight: "300",
            }}>
                {articleItem.preview} 
            </Text>

            </View>

            
        </TouchableOpacity>
    )
}

export default ArticlesCard;

