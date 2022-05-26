//imports everything as React
import * as React from 'react';

//imports in the react native features for buttons, the view and text etc.
import { Image, View, Text } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

//imports custom made styles from theme.js
import { colours, fonts } from '../src/consts/theme';

const AffirmationsCard = ({ containerStyle, affirmationItem, onPress}) => {
    
    return (
        <TouchableOpacity 
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                marginTop: 10,
                borderRadius: 50,
                backgroundColor: colours.softPink,
                ...containerStyle
        }}
        
        onPress={onPress}>

            {/*The Title*/}

            <View style = {{justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
            <Text style={{
                flex:1,
                fontSize: 14, 
                fontWeight: "600",
                textAlign: 'center',
                color: colours.hotPink,
            }}>
    
                "{affirmationItem.name}"
            </Text>

            </View>

            
        </TouchableOpacity>
    )
}
export default AffirmationsCard;