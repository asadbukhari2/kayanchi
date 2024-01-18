import React, { useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fonts, useTheme } from '../../utils/theme';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Button, Header } from '../../components';
import { height, heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { useDispatch } from 'react-redux';
import { showMessage } from 'react-native-flash-message';
import { saveUserData } from '../../redux/actions';
import Icon from 'react-native-vector-icons/FontAwesome';
import MultiButton from '../../components/MultiButton';
import LocationTracking from '../../assets/Location_tracking.png';
import Finance_leaders from '../../assets/Finance_leaders.png';

const theme = useTheme();

const slides = [
  {
    key: 1,
    heading: 'Search',
    title: 'Find your favorite grooming service, artist or salon',
    text: 'Get services on-demand or via booking. You can also search using the map.',
    image: LocationTracking,
  },
  {
    key: 2,
    heading: 'Get Groomed',
    title: `Order at your place or visit them. You get to decide`,
    text: 'You can select multiple services from the same artist or salon as well. ',
    image: require('../../assets/Curly_hair.png'),
  },
  // {
  //   key: 3,
  //   heading: 'Orders',
  //   title: 'Menu done? Set your availablity and get verified',
  //   text: 'Verify yourself in 3 easy steps and set your availability and booking slots to get order. Color coded so you can remember easily',
  //   image: require('../../assets/Demo3.png'),
  // },
  {
    key: 3,
    heading: 'Discover & Charts',
    title: 'Kaynchi truly believes in empowerment',
    text: 'We have created a data-driven hub within our app to track and discover the top talent in Pakistan.   ',
    image: require('../../assets/Finance_leaders.png'),
  },
];

const car = require('../../assets/car.png');
const host = require('../../assets/host.png');
const booking = require('../../assets/booking.png');
const ondemand = require('../../assets/ondemand.png');
const info = require('../../assets/information.png');

const ConsumerOnBoarding = props => {
  const { navigation, route } = props;

  // const {data} = route.params;
  const dispatch = useDispatch();
  const myFlatList = useRef(null);

  const addData = async () => {
    // navigation.replace('ConsumerHomeStack');
    // try {
    //   // setLoading(true);
    //   dispatch(saveUserData(data));
    //   navigation.replace('MainStack');
    // } catch (error) {
    //   showMessage({
    //     message: error?.message,
    //     type: 'warning',
    //   });
    //   console.log(error);
    // }
  };

  const _renderItem = ({ item, index }) => {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Header title={item.heading} skip onSkip={() => navigation.replace('ArtistHome')} />
          <Image style={styles.img} source={item.image} resizeMode="contain" />

          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.txt}>{item.text}</Text>
          {item.key == 1 && (
            <View style={[styles.indicatorView, { marginVertical: 15 }]}>
              <View style={styles.row}>
                <MultiButton title={'On-Demand'} btnStyle={{ backgroundColor: '#a77246' }} image={ondemand} disable />
                <MultiButton title={'Booking Only'} btnStyle={{ backgroundColor: '#008274' }} image={booking} disable />
              </View>
            </View>
          )}
          {item.key === 2 && (
            <View style={[styles.indicatorView, { marginVertical: 25 }]}>
              <View style={styles.row}>
                <MultiButton title={'Travel to Client'} image={car} disable />
                <MultiButton title={'Host the client'} image={host} disable />
              </View>
            </View>
          )}
          {/* {item.key == 3 && (
          <View style={styles.indicatorView}>
            <View style={styles.row}>
              <MultiButton
                title={'On-Demand'}
                btnStyle={{backgroundColor: '#a77246'}}
                image={ondemand}
                disable
              />
              <MultiButton
                title={'Booking Only'}
                btnStyle={{backgroundColor: '#008274'}}
                image={booking}
                disable
              />
            </View>
          </View>
        )} */}
          {/* <Button title={item.btn} btnStyle={{position:'absolute',bottom:heightToDp(5.5)}} /> */}
        </ScrollView>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppIntroSlider
        ref={myFlatList}
        style={{ flex: 1, backgroundColor: '#FFF' }}
        renderItem={_renderItem}
        activeDotStyle={{ width: 0, height: 0 }}
        dotStyle={{ height: 0, width: 0 }}
        // renderNextButton={() => <Button title={'Next'} disable />}
        renderDoneButton={() => (
          <Button title={'Go to home'} onPress={() => props.navigation.navigate('ConsumerHomeStack')} />
        )}
        data={slides}
        onDone={addData}
        onSkip={() => navigation.replace('AuthStack')}
      />
    </SafeAreaView>
  );
};

export default ConsumerOnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    paddingTop: heightToDp(8),
  },
  indicatorTxt: {
    fontSize: 16,
    fontFamily: fonts.robo_reg,
    color: theme.darkBlack,
    lineHeight: 18.75,
    marginLeft: widthToDp(2),
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 9 / 2,
  },
  indicatorView: { marginHorizontal: 24, marginTop: heightToDp(6) },
  row: { flexDirection: 'row', alignItems: 'center' },
  img: {
    resizeMode: 'cover',
    height: heightToDp(86.95),
    width: widthToDp(69.9),
    alignSelf: 'center',
    marginTop: heightToDp(6.7),
  },
  txt: {
    fontSize: 16,
    marginHorizontal: 24,
    fontFamily: fonts.robo_reg,
    color: theme.darkBlack,
    marginTop: 8,
    lineHeight: 18.75,
    marginRight: widthToDp(5),
  },
  title: {
    fontSize: 24,
    marginHorizontal: 24,
    fontFamily: fonts.hk_bold,
    color: '#0F2851',
    marginTop: 23,
    lineHeight: 28.13,
  },
});
