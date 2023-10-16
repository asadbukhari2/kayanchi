import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {fonts, useTheme} from '../../utils/theme';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Button, Header, TextInput} from '../../components';
import {height, heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {useDispatch} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
import {saveUserData} from '../../redux/actions';
import OrderConfirmCard from '../../components/OrderConfirmCard';
import MultiButton from '../../components/MultiButton';
import clockcolor from '../../assets/clockcolor.png';
const carBrown = require('../../assets/car_brown.png');
const location = require('../../assets/Path.png');
const panic = require('../../assets/panic.png');
const contact = require('../../assets/contact.png');
import RatingModal from '../../components/RatingModal';

const theme = useTheme();
const tips = ['Rs 100', 'Rs 250', 'Rs 500', 'Rs 1000'];
const slides = [
  {
    key: 1,
    title: 'Meet your artist',
    text: 'You are due at artist’s location in',
    image: require('../../assets/orderProcess3.png'),
  },
  {
    key: 2,
    title: `Getting groomed...`,
    text: 'Estimated grooming time:',
    image: require('../../assets/orderProcess2.png'),
  },
  {
    key: 3,
    title: 'Grooming done',
    text: 'You are good to go',
    image: require('../../assets/orderProcess1.png'),
  },
];

const orders = [
  {
    orderId: '#334758',
    name: 'Rizwan Noor',
    serviceCost: 30000,
    services: ['3x Foot Massage', 'Haircut', 'Manicure'],
    salonAddress: 'DHA Phase 8',
    arrivalTime: '50-60 mins',
    imageLink: carBrown,
    status: 'wants to TRAVEL',
  },
];
const DATA = [
  {
    serviceName: 'Haircut',
    serviceCount: 3,
    artistName: 'Narmeen iqbal',
    distance: '3.2 kms',
  },
];

const ConsumerOrderProcess = props => {
  const {navigation} = props;
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedRating2, setSelectedRating2] = useState(null);
  const [selectedRating3, setSelectedRating3] = useState(null);
  const [name, setName] = useState('');

  const handleRating = rating => {
    setSelectedRating(rating);
  };
  // const {data} = route.params;
  const dispatch = useDispatch();
  const myFlatList = useRef(null);

  const addData = async () => {
    console.log('props.navigation.navigate', props.navigation.replace);
    navigation.navigate('ConsumerHome', {showFeedbackModal: true});
    // navigation.replace("ConsumerHomeStack", { showFeedbackModal: true })
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

  const _renderItem = ({item, index}) => {
    return (
      <ScrollView>
        <View style={{flex: 1}}>
          <Header
            title={item.heading}
            skip
            backBtn
            onSkip={() => navigation.replace('ArtistHome')}
          />
          <Image style={styles.img} source={item.image} resizeMode="contain" />

          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.txt}>{item.text}</Text>
          {item.key == 1 && (
            <>
              <View style={styles.indicatorView}>
                <View style={styles.row}>
                  <Image
                    source={clockcolor}
                    style={{
                      width: 30,
                      height: 30,
                      marginLeft: 5,
                      resizeMode: 'contain',
                    }}
                  />
                  <Text style={styles.indicatorTxt}>30 min</Text>
                </View>
              </View>

              <View
                style={{
                  width: width * 0.91,
                  alignSelf: 'center',
                  padding: heightToDp(4.5),
                  backgroundColor: theme.background,
                  borderRadius: 15,
                  marginTop: 15,
                }}>
                {DATA.map((item, index) => {
                  return (
                    <View style={{marginTop: index > 0 ? heightToDp(6.7) : 0}}>
                      <OrderConfirmCard
                        serviceName={item.serviceName}
                        artistName={item.artistName}
                        serviceCount={item.serviceCount}
                        distance={item.distance}
                        screen={'OrderConfirm'}
                      />
                    </View>
                  );
                })}
              </View>
              <View style={[styles.indicatorView, {marginVertical: 20}]}>
                <View style={styles.row}>
                  <MultiButton
                    image={contact}
                    title={'Contact Artist'}
                    btnStyle={{backgroundColor: '#668C6A'}}
                    titleStyle={{fontFamily: fonts.sans_bold}}
                  />
                  <MultiButton
                    image={panic}
                    title={'Panic'}
                    btnStyle={{backgroundColor: '#EC615B'}}
                    titleStyle={{fontFamily: fonts.sans_bold}}
                  />
                </View>
              </View>
            </>
          )}
          {item.key == 2 && (
            <>
              <View style={styles.indicatorView}>
                <View style={styles.row}>
                  <Image
                    source={clockcolor}
                    style={{
                      width: 30,
                      height: 30,
                      marginLeft: 5,
                      resizeMode: 'contain',
                    }}
                  />
                  <Text style={styles.indicatorTxt}>30 min</Text>
                </View>
              </View>

              <View
                style={{
                  width: width * 0.91,
                  alignSelf: 'center',
                  padding: heightToDp(4.5),
                  backgroundColor: theme.background,
                  borderRadius: 15,
                  marginTop: 15,
                }}>
                {DATA.map((item, index) => {
                  return (
                    <View style={{marginTop: index > 0 ? heightToDp(6.7) : 0}}>
                      <OrderConfirmCard
                        serviceName={item.serviceName}
                        artistName={item.artistName}
                        serviceCount={item.serviceCount}
                        distance={item.distance}
                        screen={'OrderConfirm'}
                      />
                    </View>
                  );
                })}
              </View>
              <View style={[styles.indicatorView, {marginVertical: 20}]}>
                <View style={styles.row}>
                  <MultiButton
                    image={contact}
                    title={'Contact Artist'}
                    btnStyle={{backgroundColor: '#668C6A'}}
                    titleStyle={{fontFamily: fonts.sans_bold}}
                  />
                  <MultiButton
                    image={panic}
                    title={'Panic'}
                    btnStyle={{backgroundColor: '#EC615B'}}
                    titleStyle={{fontFamily: fonts.sans_bold}}
                  />
                </View>
              </View>
            </>
          )}
          {item.key == 3 && (
            <>
              <View>
                {orders.map((order, index) => (
                  <View key={index} style={styles.orderContainer}>
                    <TouchableOpacity
                      onPress={() =>
                        props.navigation.navigate('ArtistProfileStack', {
                          screen: 'ArtistWhyCancel',
                        })
                      }>
                      <View
                        style={{
                          paddingHorizontal: widthToDp(3),
                          paddingBottom: 5,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View>
                          <View>
                            <Text style={styles.headingName}>
                              {order.orderId}
                            </Text>

                            <Text
                              style={{
                                fontSize: 14,
                                color: '#0F2851',
                                marginVertical: 4,
                                fontFamily: fonts.robo_med,
                              }}>
                              SERVICES:
                            </Text>
                            {order.services.map((service, serviceIndex) => {
                              const maxServicesToShow = 1;

                              if (serviceIndex < maxServicesToShow) {
                                return (
                                  <Text key={serviceIndex}>{service}</Text>
                                );
                              } else if (serviceIndex === maxServicesToShow) {
                                const remainingServices =
                                  order.services.length - maxServicesToShow;
                                return (
                                  <TouchableOpacity
                                    key={serviceIndex}
                                    onPress={() => {
                                      console.log('Touchable link pressed!');
                                    }}>
                                    <Text
                                      style={{
                                        color: '#32aee3',
                                        fontSize: 12,
                                      }}>{`${remainingServices} more service(s)`}</Text>
                                  </TouchableOpacity>
                                );
                              }
                              return null;
                            })}
                            <Text
                              style={{
                                color: '#84668C',
                                fontSize: 18,
                                fontFamily: fonts.hk_bold,
                                marginTop: 5,
                              }}>
                              Rs {order.serviceCost}
                            </Text>
                          </View>
                        </View>

                        <View>
                          <View style={styles.orderDetails}>
                            <Text>
                              <Text
                                style={{
                                  color: '#84668C',
                                  fontSize: 16,
                                  fontFamily: fonts.robo_med,
                                }}>
                                {' '}
                                HOSTED
                              </Text>
                            </Text>

                            <Image
                              source={order.imageLink}
                              style={styles.OrderImage}
                            />
                          </View>
                          <Text
                            style={{
                              fontSize: 16,
                              color: '#193356',
                              fontFamily: fonts.robo_reg,
                            }}>
                            {order.name}
                          </Text>
                          <Text
                            style={{
                              color: '#29AAE2',
                              fontFamily: fonts.robo_reg,
                            }}>
                            3.5 kms{' '}
                            <Text style={{color: '#0F2851'}}>
                              away for you{' '}
                            </Text>{' '}
                          </Text>
                          <Text
                            style={[
                              {
                                fontSize: 14,
                                fontFamily: fonts.robo_med,
                                color: '#0F2851',
                                textTransform: 'uppercase',
                                marginTop: 12,
                              },
                            ]}>
                            Hosting address:
                          </Text>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <Image
                              source={location}
                              style={{
                                height: 15,
                                width: 15,
                                resizeMode: 'contain',
                              }}
                            />
                            <Text
                              style={{
                                color: '#32aee3',
                                fontFamily: fonts.robo_reg,
                                fontSize: 14,
                                marginTop: 3,
                              }}>
                              {order.salonAddress}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                ))}

                <View style={styles.amountPaid}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontFamily: fonts.robo_reg,
                      color: '#9A9A9A',
                    }}>
                    Rs
                  </Text>
                  <Text
                    style={{
                      fontSize: 17,
                      fontFamily: fonts.robo_reg,
                      color: '#67718C',
                    }}>
                    3400
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: fonts.robo_reg,
                      color: '#67718C',
                    }}>
                    Amount has been Paid
                  </Text>
                </View>

                <View style={styles.tipContainer}>
                  <Text
                    style={{
                      color: '#67718C',
                      fontSize: 14,
                      fontFamily: fonts.robo_med,
                    }}>
                    Would you like to tip your artist?
                  </Text>
                  <TextInput
                    input={text => setName(text)}
                    placeholder={'Rs'}
                    multiline
                    inputBoxStyle={{
                      backgroundColor: '#84668C1A',
                      borderBottomColor: '#84668C1A',
                      paddingHorizontal: 15,
                      height: heightToDp(13),
                      borderRadius: 10,
                      textAlignVertical: 'top',
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 14,
                    textAlign: 'center',
                    marginTop: 10,
                    fontFamily: fonts.robo_reg,
                    color: '#67718C',
                  }}>
                  via EasyPaisa
                </Text>
                <View style={styles.commonlyOffered}>
                  <Text style={{color: '#2F3A58', fontFamily: fonts.robo_reg, marginBottom: 15}}>
                    Commonly offered
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    {tips.map(tip => (
                      <Text
                        style={{
                          backgroundColor: '#668C6A',
                          paddingHorizontal: widthToDp(4),
                          paddingVertical: widthToDp(1.5),
                          borderRadius: 20,
                          color: 'white',
                          fontFamily: fonts.robo_med,
                        }}>
                        {tip}
                      </Text>
                    ))}
                  </View>
                </View>
                <View style={styles.ratingModal}>
                  <Text
                    style={{
                      fontSize: 18,
                      color:'#0F2851',
                      fontFamily: fonts.hk_bold,
                      marginTop: widthToDp(5),
                      marginBottom: widthToDp(5),
                    }}>
                    Your Review
                  </Text>
                  <View style={{marginLeft: widthToDp(3)}}>

                  <Text style={{color:"#67718C", fontSize: 14, fontFamily: fonts.robo_med}}>Artist hygiene & cleanliness</Text>
                  <RatingModal
                    selectedRating={selectedRating}
                    handleRating={setSelectedRating}
                  />
                  <Text style={{color:"#67718C", fontSize: 14, fontFamily: fonts.robo_med}}>Service as described</Text>
                  <RatingModal
                    selectedRating={selectedRating2}
                    handleRating={setSelectedRating2}
                  />
                  <Text style={{color:"#67718C", fontSize: 14, fontFamily: fonts.robo_med}}>Would recommend</Text>
                  <RatingModal
                    selectedRating={selectedRating3}
                    handleRating={setSelectedRating3}
                  />
                </View>

                  </View>
                <View>
                  <TextInput
                    input={text => setName(text)}
                    placeholder={
                      'Please tell us anything that may assist with the order...'
                    }
                    multiline
                    inputBoxStyle={{
                      backgroundColor: '#ffffff',
                      borderBottomColor: '#ffffff',
                      padding: 10,

                      height: heightToDp(45),
                      borderRadius: 10,
                      textAlignVertical: 'top',
                    }}
                  />
                  <Text
                    style={{
                      color: '#29AAE2',
                      position: 'absolute',
                      right: 25,
                      bottom: 5,
                    }}>
                    0/100
                  </Text>
                </View>
              </View>

              <View style={{marginVertical: 20}}>
                <Button
                  title={'Go to Home'}
                  onPress={() =>
                    props.navigation.navigate('ConsumerHomeStack', {
                      screen: 'ConsumerDisocver',
                    })
                  }
                  disable
                />
              </View>
            </>
          )}

          {/* <Button title={item.btn} btnStyle={{}}/> */}
        </View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <AppIntroSlider
          ref={myFlatList}
          style={{flex: 1}}
          renderItem={_renderItem}
          activeDotStyle={{width: 0, height: 0}}
          dotStyle={{height: 0, width: 0}}
          // renderNextButton={() => <Button title={'Next'} disable />}
          renderDoneButton={() => (
            <Button title={'Go to home'} onPress={addData} disable />
          )}
          data={slides}
          onDone={addData}
          onSkip={() => navigation.replace('AuthStack')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConsumerOrderProcess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingTop: heightToDp(8),
  },
  amountPaid: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: widthToDp(5),
    paddingVertical: widthToDp(4),
    paddingHorizontal: widthToDp(4),
    marginTop: 10,
    borderRadius: 10,
  },
  commonlyOffered: {marginHorizontal: widthToDp(5), marginTop: 10},
  orderContainer: {
    backgroundColor: 'white',
    // width: widthToDp(44),
    marginHorizontal: widthToDp(5),
    // width: (width * 0.91) / 2,
    paddingVertical: heightToDp(5),
    marginTop: 15,
    paddingHorizontal: widthToDp(1),
    borderRadius: 10,
  },
  orderDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  OrderImage: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  indicatorTxt: {
    fontSize: 18,

    fontFamily: fonts.robo_bold,
    color: '#84668C',
    lineHeight: 18.75,
    marginLeft: widthToDp(2),
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 9 / 2,
  },
  tipContainer: {marginHorizontal: widthToDp(5), marginTop: widthToDp(5)},
  indicatorView: {marginHorizontal: 24, marginTop: heightToDp(2)},
  row: {flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
  img: {
    resizeMode: 'cover',
    height: heightToDp(66.95),
    width: widthToDp(69.9),
    alignSelf: 'center',
    marginTop: heightToDp(6.7),
  },
  ratingModal: {marginHorizontal: widthToDp(5)},
  latestbutton: {
    backgroundColor: '#a77246',
    padding: 5,
    color: 'white',
    fontSize: 12,
    textTransform: 'uppercase',
    paddingLeft: widthToDp(3),
    paddingRight: widthToDp(3),
    borderRadius: 50,
  },
  headingName: {
    fontSize: 20,
    color: '#0F2851',
    fontFamily: fonts.hk_bold,
  },
  textBold: {
    fontWeight: 'bold',
  },

  txt: {
    fontSize: 16,
    marginHorizontal: 24,
    fontFamily: fonts.robo_reg,
    color: '#67718C',
    marginTop: 8,
    lineHeight: 18.75,
    marginRight: widthToDp(5),
    textAlign: 'center',
  },
  title: {
    fontSize: 28,
    marginHorizontal: 24,
    fontFamily: fonts.hk_bold,
    color: '#193356',
    marginTop: 23,
    lineHeight: 28.13,
    textAlign: 'center',
  },
});
