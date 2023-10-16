import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Button, Header} from '../../components';
import {fonts, useTheme} from '../../utils/theme';
import {heightToDp, widthToDp, height, width} from '../../utils/Dimensions';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient'; // Import the LinearGradient component
import Modal from 'react-native-modal';
import {TextInput} from '../../components';
const AddMore = require('../../assets/addMore.png');
const theme = useTheme();


const PromoGig = require('../../assets/PromoMain.png')
const STATUS_RADIO = [
  {
    source: require('../../assets/hosting4.png'),
    title: "I'm hosting",
  },
  {
    source: require('../../assets/travelling4.png'),
    title: "I'm travelling",
  },
];
const offer = [{title: '20% off'}, {title: '30% off'}, {title: '50% off'}];

export default function ConsumerPromoMainPage(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [preferenceStatus, setPreferenceStatus] = useState('');
  const [name, setName] = useState('');

  const closeModal = () => {
    setModalVisible(false);
  };
   
  const handleClick = () => {
    props.navigation.navigate('ConsumerHomeStack', {
      screen: 'ConsumerPromoGig1',
    });
  } 

  return (
    <SafeAreaView style={styles.container}>
      <Header backBtn title="Create a promo" />
      <View style={styles.imageContainer}>

      <Image source={PromoGig} style={{height: 250, width: 250, }}/>

      </View>
      
      <View style={styles.gigContainer}>
        <Text style={styles.heading}>Active gigs
        <Text style={{color: theme.primary, fontFamily: fonts.robo_light, fontSize: 20}}>(3)</Text>
        </Text>
      </View>
      <Text style={styles.description}>
        Choose the active gigs that you want to continue with this promo deal
      </Text>
      <LinearGradient
        colors={['#668C6A', '#3E5F41']} // Define your gradient colors here
        style={styles.Discount}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>Add Discount</Text>
          <Feather
            style={{color: '#193356', fontSize: 18, marginLeft: 10}}
            name="edit-2"
          />
        </View>
        <View>
          <Text style={styles.subHeading}>Hydra facial super extreme</Text>
        </View>
      </LinearGradient>

      <View style={styles.gigContainer}>
        <Text style={styles.heading}>Additional Services</Text>
        <Image source={AddMore} style={{width: 20, height: 20}} />
      </View>
      <Text style={styles.description}>
        Choose the active gigs that you want to continue with this promo deal
      </Text>
      <View style={styles.btn}>
     <Button  title='Continue' onPress={handleClick} />  

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    paddingTop: heightToDp(8),
  },
  imageContainer:{  
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    
  },
  
  btn:{position:'absolute', bottom:heightToDp(5), marginHorizontal: widthToDp(5)},
  heading: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    paddingHorizontal: widthToDp(4),
    paddingVertical: heightToDp(3)
  },
  description: {
    paddingHorizontal: widthToDp(4),
    marginRight: widthToDp(18),
    color: '#67718C',
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
  },
  subHeading: {
    fontSize: 16,
    lineHeight: 18,
    color: '#ffffff',
    paddingTop: 20,
    paddingBottom: 7,
  },
  subHeading2: {
    fontSize: 16,
    lineHeight: 18,
    color: 'white',
    paddingTop: heightToDp(15),
    paddingBottom: 10,
  },
  Discount: {
    borderRadius: 10,
    width: widthToDp(41),
    marginHorizontal: widthToDp(5),
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,
  },
  DiscountOffer: {
    backgroundColor: '#ADADAD',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    color: '#FFFFFF',
    borderRadius: 15,
    marginRight: 15,
  },

});
