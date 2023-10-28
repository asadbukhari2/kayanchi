import React, { useRef } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fonts, useTheme } from '../../utils/theme';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Button, Header } from '../../components';
import { heightToDp, widthToDp } from '../../utils/Dimensions';

import MultiButton from '../../components/MultiButton';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

const timer = require('../../assets/CreatePromo.png');
const CreateGig = require('../../assets/CreateGig.png');
const car = require('../../assets/car.png');
const host = require('../../assets/host.png');
const booking = require('../../assets/booking.png');
const ondemand = require('../../assets/ondemand.png');

const theme = useTheme();

const slides = [
  {
    key: 1,
    heading: 'Menu',
    title: 'First things first, we create our own groming menu',
    text: 'You can either offer one-off services or package them together as a deal. We recommend both.',
    image: require('../../assets/Demo1.png'),
  },
  {
    key: 2,
    heading: 'Mood',
    title: "It's all about you, so your mood comes first",
    text: 'Choose between traveling or hosting. Select both to activate all your gigs because all gigs have their own mood.',
    image: require('../../assets/Demo2.png'),
  },
  {
    key: 3,
    heading: 'Orders',
    title: 'Menu done? Set your availablity and get verified',
    text: 'Verify yourself in 3 easy steps and set your availability and booking slots to get order. Color coded so you can remember easily',
    image: require('../../assets/Demo3.png'),
  },
  {
    key: 4,
    heading: 'Charts',
    title: 'Get popular with analytics and show up on charts!',
    text: 'Track your growth with our leveling system. With our weekly top 10s for every category, you can now make a name nationally.',
    image: require('../../assets/Demo4.png'),
  },
];

const ArtistOnBoarding = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = React.useState(slides[0]);

  const myFlatList = useRef(null);

  const addData = async () => {
    //   navigation.replace('MainStack');
  };

  const _renderItem = ({ item, index }) => {
    return (
      <View style={{ flex: 1 }}>
        <Image style={styles.img} source={item.image} resizeMode="contain" />
      </View>
    );
  };

  const handleNextScreen = () => {
    // dispatch({ type: 'SIGN_UP_SUCCESS_TOKEN_SET' });
    navigation.navigate('ArtistCreateGig');
  };
  console.log({ selectedItem });
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        {selectedItem.key !== 4 && <Header title={selectedItem?.heading} skip onSkip={handleNextScreen} />}
        <View style={{ height: heightToDp(100), top: 32 }}>
          <AppIntroSlider
            ref={myFlatList}
            style={{ backgroundColor: '#fff' }}
            renderItem={_renderItem}
            activeDotStyle={{
              backgroundColor: theme.primary,
              width: widthToDp(7),
            }}
            onSlideChange={a => {
              setSelectedItem(slides[a]);
            }}
            data={slides}
            onDone={addData}
            onSkip={() => navigation.replace('AuthStack')}
          />
        </View>
        {selectedItem ? (
          <>
            <Text style={styles.title}>{selectedItem.title}</Text>
            <Text style={styles.txt}>{selectedItem.text}</Text>
            {selectedItem.key === 1 ? (
              <View
                style={[
                  {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginHorizontal: widthToDp(5),
                    marginTop: heightToDp(4),
                  },
                ]}>
                <LinearGradient colors={['#668C6A', '#3E5F41']} style={{ borderRadius: 25 }}>
                  <Button
                    title="Basic gigs"
                    titleStyle={{ fontFamily: fonts.robo_med }}
                    btnStyle={{
                      backgroundColor: 'transparent',
                      width: widthToDp(44),
                    }}
                    image={CreateGig}
                    imageStyle={[styles.buttonicon, { width: 20, height: 26, marginRight: 10 }]}
                  />
                </LinearGradient>
                <LinearGradient colors={['#84668C', '#42275A']} style={{ borderRadius: 25 }}>
                  <Button
                    title="Promotions"
                    titleStyle={{ fontFamily: fonts.robo_med }}
                    btnStyle={{
                      backgroundColor: 'transparent',
                      width: widthToDp(44),
                    }}
                    image={timer}
                    imageStyle={[styles.buttonicon, { width: 20, height: 26, marginRight: 10 }]}
                  />
                </LinearGradient>
              </View>
            ) : null}
            {selectedItem.key === 2 && (
              <View style={styles.indicatorView}>
                <View style={styles.row}>
                  <MultiButton title={'Travel to Client'} image={car} disable />
                  <MultiButton title={'Host the client'} image={host} disable />
                </View>
              </View>
            )}
            {selectedItem.key === 3 && (
              <View style={styles.indicatorView}>
                <View style={styles.row}>
                  <MultiButton title={'On-Demand'} btnStyle={{ backgroundColor: '#a77246' }} image={ondemand} disable />
                  <MultiButton
                    title={'Booking Only'}
                    btnStyle={{ backgroundColor: '#008274' }}
                    image={booking}
                    disable
                  />
                </View>
              </View>
            )}
            {selectedItem.key === 4 && (
              <Button title="Let's go" onPress={handleNextScreen} btnStyle={{ marginTop: heightToDp(4) }} />
            )}
          </>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default ArtistOnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
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
  indicatorView: { marginHorizontal: 24, marginTop: heightToDp(4) },
  row: { flexDirection: 'row', alignItems: 'center' },
  img: {
    resizeMode: 'cover',
    height: heightToDp(70),
    width: widthToDp(70),
    alignSelf: 'center',
  },
  txt: {
    fontSize: 16,
    width: '90%',
    paddingHorizontal: widthToDp(5),
    fontFamily: fonts.robo_reg,
    color: theme.darkBlack,
    marginVertical: heightToDp(4),
    lineHeight: 18.75,
    marginRight: widthToDp(19),
  },
  title: {
    fontSize: 24,
    width: '85%',
    paddingHorizontal: widthToDp(5),
    fontFamily: fonts.hk_bold,
    color: theme.lightBlack,
    marginTop: heightToDp(8),
  },
});
