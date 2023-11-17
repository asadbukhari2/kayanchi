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

  const auth = useSelector(state => state.auth);
  console.log(auth.user);
  const { gigsCount, gigs } = useSelector(state => state.gig);

  // const closeModal = () => {
  //   setModalVisible(false);
  // };

  const handleClick = () => {
    props.navigation.navigate('ArtistPromoGig1');
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
            <Text style={{ color: theme.primary, fontFamily: fonts.robo_reg, fontSize: 20 }}>({gigsCount})</Text>
          </Text>
        </View>
        <Text style={styles.description}>Choose the active gigs that you want to continue with this promo deal</Text>

        <FlatList
          data={gigs}
          style={{ marginTop: heightToDp(1.5), marginLeft: widthToDp(1.5) }}
          horizontal
          keyExtractor={({ item, index }) => index}
          renderItem={({ item, index }) => {
            return (
              <LinearGradient colors={['#668C6A', '#3E5F41']} style={styles.Discount}>
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
          <Button title="Continue" onPress={handleClick} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  imageContainer: {
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  btn: {
    marginVertical: widthToDp(5),
  },
  heading: {
    fontSize: 24,
    color: '#2F3A58',
    fontFamily: fonts.hk_bold,
    paddingHorizontal: widthToDp(4),
    paddingVertical: heightToDp(3),
  },
  description: {
    paddingHorizontal: widthToDp(4),
    marginRight: widthToDp(18),
    color: '#67718C',
    fontSize: 16,
    fontFamily: fonts.robo_reg,
  },
  gigContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: widthToDp(5),
  },
  text: {
    backgroundColor: '#D9D9D9',
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 10,
    fontSize: 12,
    marginRight: 15,
    color: theme.dark,
  },
  subHeading: {
    fontSize: 16,
    lineHeight: 18,
    color: '#ffffff',
    paddingTop: 20,
    paddingBottom: 7,
  },

  Discount: {
    borderRadius: 10,
    width: 190,
    height: 130,
    marginHorizontal: widthToDp(1),
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,
  },

  percentTag: {
    backgroundColor: '#FAE5FF',
    color: '#000',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
});
