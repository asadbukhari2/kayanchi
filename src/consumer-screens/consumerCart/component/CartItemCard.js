import React from 'react'
import { Text, View } from 'react-native'
import { styles } from "./styles/CartItemCard.style"
const CartItemCard = () => {
    return (
        <View style={[styles.container, styles.flex, styles.directionRow, styles.justifyBetween]}>
            <View>
                <Text style={[styles.heading]}>Haircut</Text>
                <Text style={[styles.subText]}>1-2 hours</Text>
                <Text style={[styles.colorBlue]}>Rs 1,500</Text>
            </View>
            <View>
                <View style={[styles.flex, styles.directionRow, styles.alignCenter, styles.countSignContainer, styles.justifyBetween]}>
                    <Text style={[styles.subText, styles.fontSize18]}>-</Text>
                    <Text style={[styles.count]}>5</Text>
                    <Text style={[styles.subText, styles.fontSize18]}>+</Text>
                </View>
            </View>
        </View>
    )
}

export default CartItemCard
