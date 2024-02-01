import React, { useState } from 'react'
import { FlatList, StyleSheet } from 'react-native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { fonts } from '../../../utils/theme';
const hair = require('../../../assets/HairDark.png');
const face = require('../../../assets/FaceDark.png');
const waxing = require('../../../assets/BodyDark.png');
const Massages = require('../../../assets/SpaDark.png');
const Botox = require('../../../assets/TreatDark.png');
const DATA = [
    {
        name: 'Hair',
        imageLink: hair,
    },
    {
        name: 'Face',
        imageLink: face,
    },
    {
        name: 'Body',
        imageLink: waxing,
    },
    {
        name: 'Spa',
        imageLink: Massages,
    },
    {
        name: 'Treat',
        imageLink: Botox,
    },
];
const NavigationTabs = () => {
    const [category, setCategory] = useState("")
    console.log(category);
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.container, category === item.name ? styles.activeBorder : styles.extraLightGrayBorder]}
            onPress={() => {
                setCategory(item.name)
            }}
        >
            <Image source={item.imageLink} style={{ width: 20, height: 20, resizeMode: 'contain', marginRight: 10, }} />
            <TouchableOpacity >
                <Text style={[category === item.name ? styles.active : styles.colorLightGray, styles.fontFamilyRobo_med]}>{item.name}</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={renderItem} keyExtractor={item => item.name} horizontal
            />
        </View>
    )
}
const styles = StyleSheet.create({
    active: {
        color: '#83658b',
        fontWeight: 'bold',
        fontSize: 15,

    },
    fontFamilyRobo_med: {
        fontFamily: fonts.robo_med
    },
    colorLightGray: {
        color: '#737373'
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        gap: 5,
        borderBottomWidth: 1,
    },
    activeBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#83658b'
    }, extraLightGrayBorder: {
        borderBottomColor: '#d5d5d5'

    }
})
export default NavigationTabs
