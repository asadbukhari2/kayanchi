import React from 'react'
import { View, Text, ScrollView, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native'
import { Header } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from "./style.js"
import { useNavigation } from '@react-navigation/native';
import ArtistDetailHeader from './components/header/index.js';
import AvailablityStatus from './components/cards/AvailablityStatus.js';
import Mood from './components/cards/Mood.js';
import Socials from './components/cards/Socials.js';
import PromotionalCard from './components/cards/PromotionalCard.js';
import face_promo from "../../assets/face_promo.png"
import girl_hair from "../../assets/girl_hair.png"
import { FlatList } from 'react-native';
import { heightToDp, widthToDp } from '../../utils/Dimensions.js';

const DATA = [
    {
        id: '1',
        title: 'Face Pro Max',
        price: 2999,
        imageLink: face_promo
    },
    {
        id: '2',
        title: 'Buy 3 get one free',
        price: 2500,
        imageLink: girl_hair
    },
]
const ConsumerArtistDetails = () => {
    const navigation = useNavigation();


    return (
        <SafeAreaView style={styles.container} >
            <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
                <View>
                    <ArtistDetailHeader />

                </View>
                <View style={[styles.flex, styles.flexDirectionRow, styles.justifyContentBetween, styles.paddingVertical15, styles.paddingHorizontal0]}>
                    <AvailablityStatus />
                    <Mood />
                    <Socials />
                </View>

                <ScrollView
                    horizontal
                    style={[styles.paddingleftl0]}
                    contentContainerStyle={{ paddingBottom: 90 }}
                >
                    <FlatList
                        horizontal
                        data={DATA}
                        renderItem={({ item }) => <PromotionalCard {...item} />}
                        keyExtractor={item => item.id}
                    />
                    {/* <PromotionalCard />
                    <PromotionalCard />
                    <PromotionalCard />
                    <PromotionalCard /> */}
                </ScrollView>





                <View>
                    <Text>This is the for the Tabs</Text>
                </View>
                <View>
                    <Text>This is the for the Tabs cards</Text>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default ConsumerArtistDetails
