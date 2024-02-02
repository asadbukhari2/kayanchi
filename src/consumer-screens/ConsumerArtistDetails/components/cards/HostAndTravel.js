import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { color } from 'react-native-reanimated'
import hosting from "../../../../assets/hosting_white.png"
import travel from "../../../../assets/travel_white.png"
const HostAndTravel = ({ icon, title }) => {
    const [type, setType] = useState("")
    return (
        <View style={[styles.container, styles.active]}>
            <Image style={[styles.icon]} source={icon} />
            <Text style={[styles.width50, styles.title]}>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: 170,
        height: 120,
        backgroundColor: '#696969',
        marginRight: 10,
        borderRadius: 15,
        padding: 15,
        display: 'flex',
        justifyContent: 'center'

    },
    active: {
        backgroundColor: "#7c6083"
    },
    colorWhite: {
        color: 'white'
    },
    icon: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },
    width50: {
        width: 90
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white',
        marginTop: 4
    }
})
export default HostAndTravel
