import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { styles } from './styles/CartDetailCard.style'
import CartItemCard from './CartItemCard'
import { Button } from '../../../components'
const CartDetailCard = () => {
    return (
        <ScrollView>
            <View style={[styles.container]}>
                <View style={[styles.padding10]}>
                    <Text style={[styles.heading]}>Artist</Text>
                    <Text style={[styles.subText]}>Narmeen Iqbal</Text>
                    <Text style={[styles.subText]}>3.2 kms away from You</Text>
                </View>
                <View style={[styles.marginTop5, styles.paddingHorizontal10]}>
                    <Text style={[styles.heading]}>Appointment Date & Time</Text>
                    <Text style={[styles.subText]}>26th, April, 2023</Text>
                    <Text style={[styles.subText]}>7:30 - 8:30 PM</Text>
                </View>
                <View style={[styles.borderTopBottom, styles.marginVertical10]}>
                    <CartItemCard />
                </View>
                <View style={[styles.paddingHorizontal10, styles.flex, styles.directionRow, styles.justifyBetween, styles.alignCenter]}>
                    <Text>Total service charges</Text>
                    <Text style={[styles.count]}>Rs 7,510.85</Text>
                </View>

            </View>

        </ScrollView>
    )
}

export default CartDetailCard
