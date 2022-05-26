//imports everything as React
import * as React from 'react';

//imports in the react native features for buttons, the view and text etc.
import { Image, View, Text } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

//imports custom made styles from theme.js
import { colours, sizes, fonts } from '../src/consts/theme';

const ActivityCard = ({ containerStyle, activityItem, onPress}) => {
    
    return (
        <TouchableOpacity 
            style={{
                flexDirection: 'row',
                alignItems: 'left',
                padding: 10,
                marginTop: 10,
                marginBottom: 15,
                marginLeft: 2,
                borderRadius: sizes.radius,
                backgroundColor: colours.softPink,
                ...containerStyle
        }}
        
        onPress={onPress}>

            {/*The Images*/}
            <Image
                source = {activityItem.image}
                resizeMode = 'cover'
                style = {{width: 100, height: 100, borderRadius: sizes.radius}}/>

            {/*The Title*/}

            <View style = {{width: '55%', paddingHorizontal: 10}}>
            <Text style={{
                flex:1,
                paddingTop: 5,
                fontSize: 14, 
                fontWeight: "600",
            }}>
                {activityItem.name}
            </Text>

            {/*The Context*/}
            <Text style={{flex:1, fontSize: 11, fontWeight: "300", }}>
                {activityItem.preview} 
            </Text>

            </View>

            
        </TouchableOpacity>
    )
}

export default ActivityCard;