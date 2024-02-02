import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import face_promo from "../../../assets/face_promo.png"
import { styles } from "./styles/OffersCard.style"
import plus from '../../../assets/plus.png'


const OffersCard = ({ id, title, price, imageLink }) => {

    return (
        <View style={[styles.container]}>
            <View style={[styles.cardImageContainer]}>
                <Image style={[styles.cardImage]} source={imageLink} />
            </View>
            <View style={[styles.flex, styles.flexRow, styles.justifyBetween, styles.padding10, styles.alignItemsCenter]}>
                <View>
                    <Text style={[styles.textBlack, styles.fontSize15]}>{title}</Text>
                    <Text style={[styles.fontWeightBold, styles.textColorBlue]}>Rs {price}</Text>
                </View>
                <TouchableOpacity style={[styles.btn, styles.center]}>
                    <Image style={[styles.plusIcon]} source={plus} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OffersCard
