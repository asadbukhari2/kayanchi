import React from 'react'
import { View, Text, ScrollView, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native'
import { Button, Header } from '../../components';
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
import NavigationTabs from './components/NavigationTabs.js';
import ServiceDetiailCard from './components/cards/ServiceDetiailCard.js';

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
];
const serviceDetailData = [
    {
        id: 1,
        title: 'Hair Cut',
        off: 20,
        price: 1500,
        reachTime: '40 mins',
        travel: true,
        hosting: true,
    },
    {
        id: 2,
        title: 'Hydra Facial',
        off: 0,
        price: 1500,
        reachTime: '1-2 hours',
        travel: true,
        hosting: true,
    },
    {
        id: 3,
        title: 'Rebonding',
        off: 20,
        price: 15000,
        reachTime: '2-3 hours',
        travel: true,
    },
    {
        id: 4,
        title: 'Special Braids',
        off: 0,
        price: 2000,
        reachTime: '30 mins',
        hosting: true,
    },
];
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
                <View
                    style={[styles.paddingleftl0]}
                >

                    <View style={[styles.marginBottom10]}>
                        <Text style={[styles.cardHeading]}>Promotional offers</Text>
                    </View>
                <ScrollView
                        horizontal
                        contentContainerStyle={{ paddingBottom: 10 }}
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
                </View>




                <View >

                    <View style={[styles.borderBottom1, styles.borderBottomColorLightGray]} >
                        <NavigationTabs />
                    </View>
                    <View style={[styles.paddingleftl0]}>
                        <FlatList

                            data={serviceDetailData}
                            renderItem={({ item }) => <ServiceDetiailCard {...item} />}
                            keyExtractor={item => item.id}
                        />

                    </View>
                </View>
                <View style={[styles.marginTop30]}>
                    <Button title="Continue" />
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default ConsumerArtistDetails
