
import React from 'react'
import { Image, Text, View } from 'react-native'
import ondemand from "../../../../assets/ondemand.png"
import { styles } from "../styles/AvailablityStatus.style"
const AvailablityStatus = () => {
    return (
        <View style={[styles.container]}>
            <View style={[styles.iconBg]}>

                <Image style={[styles.icon]} source={ondemand} />
            </View>
            <Text style={[styles.fontSize18, styles.colorBlack, styles.fontWeightSemiBold, styles.marginTop5, styles.textCenter]}>Availablity</Text>
            <Text style={[styles.textLightGray, styles.textCenter]}>Narmeen is taking orders on-demand</Text>
        </View>
    )
}

export default AvailablityStatus
