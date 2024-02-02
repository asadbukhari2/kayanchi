import React, { useEffect, useRef, useState } from 'react'
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
import Modal from 'react-native-modal';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from '../../utils/theme.js';
import HostAndTravel from './components/cards/HostAndTravel.js';
import hosting from "../../assets/hosting_white.png"
import travel from "../../assets/travel_white.png"
import { useSelector } from 'react-redux';
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
        id: 'c28c63f7-7255-40e7-a874-4ed6e847fd34',
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
const ModalData = [
    {
        id: '1',
        icon: travel,
        title: "Travel to their studio"
    },
    {
        id: '2',
        icon: hosting,
        title: "Host them at your place"
    },
]
const theme = useTheme();

const ConsumerArtistDetails = () => {
    const navigation = useNavigation();
    const cart = useSelector(state => state.common.cart);
    console.log(cart, '----->');
    const [openModal, setOpenModal] = useState(false);
    console.log(openModal);
    const handleCLoseModal = () => {
        setOpenModal(prev => !prev);
        console.log('close and open');
    }
    useEffect(() => {
        setOpenModal(prev => !prev);
    }, [cart])
    const calculateCartTotal = (cartItem) => {
        let total = 0;
        for (let i = 0; i < cartItem.length; i++) {
            const element = cartItem[i];
    // if (element.discount_price > 0) {
    //     total += (element.discount_price - element.price)
    // } else {

            total += (element.price * element.quantity)
            // }
        }
        return total;
    }
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
                <TouchableOpacity style={[styles.marginTop30]}>
                    {cart.length > 0 ? <Button onPress={() =>
                        navigation.navigate('ConsumerHomeStack', {
                            screen: 'ConsumerCart',
                        })
                    }
                        title={`View your cart Rs ${calculateCartTotal(cart)}`} /> : <View></View>}
                </TouchableOpacity>
            </ScrollView>
            <Modal
                // coverScreen={false}
                isVisible={openModal}
                // animationType={'fade'}
                // transparent={true}
                style={[styles.flex1, styles.marginTop500, styles.marginHorizontal0, styles.marginBottom0, styles.backGroundWhite, styles.releative, styles.borderRadiusTop]}
                onSwipeComplete={false}
                swipeDirection={'down'}
                onSwipeCancel={() => handleCLoseModal()}
            >
                <View style={[styles.heightFull, styles.flex, styles.justifyContentBetween, styles.alignItemsCenter, styles.padding10]}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => handleCLoseModal()}
                    >
                        <View style={{ width: 60, height: 5, borderRadius: 3, backgroundColor: '#c4c4c4' }}></View>
                    </TouchableOpacity>
                    <View style={[styles.flex, styles.flexDirectionRow, styles.justifyContentCenter]}>
                        <FlatList
                            contentContainerStyle={[styles.justifyContentCenter, styles.alignItemsCenter, styles.flex, styles.marginLeftAuto]}
                            data={ModalData}
                            renderItem={({ item }) => <HostAndTravel {...item} />}
                            keyExtractor={item => item.id}
                            horizontal
                        />

                    </View>
                    <Button title="Add to cart" />
                </View>
            </Modal>
        </SafeAreaView >
    )
}

export default ConsumerArtistDetails
