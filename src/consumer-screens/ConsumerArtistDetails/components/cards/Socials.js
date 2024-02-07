import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from "../styles/Socials.style"
import location from "../../../../assets/location5.png"
import star from "../../../../assets/filled_star.png"
import heart from "../../../../assets/heart.png"
const Socials = ({ followers, rating_count, rating, distance }) => {
    return (
        <View style={[styles.container]}>
            <View style={[styles.flex, styles.flecDirestionRow, styles.alignItemsCenter, styles.marginBottom5]}>
                <Image style={[styles.icons]} source={heart} />
                <View>
                    <Text style={[styles.colorPurple, styles.fontBold]}>Followers</Text>
                    <Text style={[styles.textBlack]}>{followers}</Text>
                </View>
            </View>
            <View style={[styles.flex, styles.flecDirestionRow, styles.alignItemsCenter, styles.marginBottom5]}>
                <Image style={[styles.icons]} source={star} />
                <View>
                    <Text style={[styles.colorPurple, styles.fontBold]}>Ratings</Text>
                    <Text style={[styles.textBlack]}>{rating}({rating_count})</Text>
                </View>
            </View>
            <View style={[styles.flex, styles.flecDirestionRow, styles.alignItemsCenter]}>
                <Image style={[styles.icons]} source={location} />
                <View>
                    <Text style={[styles.colorLightGray]}>{distance} Kms</Text>
                    <Text style={[styles.colorLightGray]}>away</Text>
                </View>
            </View>
        </View>
    )
}

export default Socials
