import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Button, Header } from '../../components';
import { fonts, useTheme } from '../../utils/theme';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient'; // Import the LinearGradient component
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';

const AddMore = require('../../assets/addMore.png');
const theme = useTheme();

const PromoGig = require('../../assets/PromoMain.png');
// const STATUS_RADIO = [
//   {
//     source: require('../../assets/hosting4.png'),
//     title: "I'm hosting",
//   },
//   {
//     source: require('../../assets/travelling4.png'),
//     title: "I'm travelling",
//   },
// ];
// const offer = [{ title: '20% off' }, { title: '30% off' }, { title: '50% off' }];

export default function ArtistPromoMainPage(props) {
  // const [modalVisible, setModalVisible] = useState(false);
  // const [preferenceStatus, setPreferenceStatus] = useState('');
  // const [name, setName] = useState('');
  const [selectedItemIds, setSelectedItemIds] = useState([]);

  const { gigs } = useSelector(state => state.gig);

  const activeSimpleGigs = gigs.filter(_ => _.is_promotional === false);

  // const closeModal = () => {
  //   setModalVisible(false);
  // };

  const handleClick = () => {
    props.navigation.navigate('ArtistPromoGig1', { promo_services: selectedItemIds });
  };

  const handleItemPress = itm => {
    if (!selectedItemIds.find(_ => _ === itm)) {
      setSelectedItemIds(prev => [...prev, itm]);
    } else {
      setSelectedItemIds(prev => prev.filter(id => id !== itm));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header backBtn title="Create a promo" />
        <View style={styles.imageContainer}>
          <Image source={PromoGig} style={{ height: 350, width: 300, objectFit: 'cover' }} />
        </View>

        <View style={styles.gigContainer}>
          <Text style={styles.heading}>
            Active gigs
            <Text style={{ color: theme.primary, fontFamily: fonts.robo_reg, fontSize: 20 }}>
              ({activeSimpleGigs.length})
            </Text>
          </Text>
        </View>
        <Text style={styles.description}>Choose the active gigs that you want to continue with this promo deal</Text>

        <FlatList
          data={activeSimpleGigs}
          style={{ marginTop: heightToDp(1.5), marginLeft: widthToDp(1.5) }}
          horizontal
          keyExtractor={({ item, index }) => index}
          renderItem={({ item, index }) => {
            const itemId = item.id;
            const isSelected = selectedItemIds.includes(itemId);
            return (
              <TouchableOpacity onPress={() => handleItemPress(itemId)}>
                <LinearGradient
                  colors={isSelected ? ['#668C6A', '#3E5F41'] : ['black', 'black']}
                  style={[styles.Discount, { opacity: isSelected ? 1 : 0.5 }]}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    {item.is_discount ? (
                      <Text style={styles.percentTag}>{item.discount_percentage}% off</Text>
                    ) : (
                      <>
                        <Text> </Text>
                        {/* <TouchableOpacity onPress={() => console.log(item)}>
                      <Text style={styles.percentTag}>Add Discount</Text>
                    </TouchableOpacity> */}
                      </>
                    )}
                    <TouchableOpacity onPress={() => console.log(item)}>
                      <Feather style={{ color: '#193356', fontSize: 18, marginLeft: 0 }} name="edit-2" />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text style={styles.subHeading}>{item.name.replace(/["']/g, '')}</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            );
          }}
        />

        <View style={styles.gigContainer}>
          <Text style={[styles.heading, { paddingTop: 15 }]}>Additional Services</Text>
          <TouchableOpacity onPress={() => console.log('item')}>
            <Image source={AddMore} style={{ width: 20, height: 20 }} />
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>Choose the active gigs that you want to continue with this promo deal</Text>
        <View style={styles.btn}>
          <Button title="Continue" onPress={handleClick} disable={selectedItemIds.length < 2} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
