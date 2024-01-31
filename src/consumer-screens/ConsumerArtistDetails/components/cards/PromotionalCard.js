import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import face_promo from "../../../../assets/face_promo.png"
import { styles } from "../styles/Promotional.style"
import plus from '../../../../assets/plus.png'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../../redux/actions/commonActions'

const PromotionalCard = ({ id, title, price, imageLink }) => {
    const dispatch = useDispatch();
    const handelAddToCart = () => {
        let data = {
            id, title, price, imageLink
        }
        dispatch(addToCart(data))
    }
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
                <TouchableOpacity onPress={() => handelAddToCart()} style={[styles.btn, styles.center]}>
                    <Image style={[styles.plusIcon]} source={plus} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PromotionalCard
