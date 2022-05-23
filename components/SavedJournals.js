//imports everything as React
import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { colours } from '../src/consts/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const SavedJournals = ({item, onPress}) => {
    const {title, entry} = item;

    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
        <TouchableOpacity styles={styles.container}>
            <Text style={styles.title} numberOfLines={2}>
                {title}
            </Text>
            <Text numberOfLines={3}>{entry}</Text>
        </TouchableOpacity>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.softPink,
    padding: 8,
    borderRadius: 10,
    width: '48%',
    borderColor: colours.hotPink,
    borderWidth: 1.5
    
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colours.hotPink,
  },
});

export default SavedJournals;