import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { heightToDp, widthToDp, width } from '../../utils/Dimensions';
import { Header } from '../../components';
import { TextInput } from '../../components';
import { Button } from '../../components';
const grooming = require('../../assets/grooming.png');
const clockcolor = require('../../assets/clockcolor.png');
const carBrown = require('../../assets/car_brown.png');
const host_green = require('../../assets/host_green.png');
const information = require('../../assets/information.png');
const location = require('../../assets/Path.png');
import { fonts, useTheme } from '../../utils/theme';
import SimpleOrderCard from '../../components/SimpleOrderCard';
const theme = useTheme();

export default function ArtistGrooming(props) {
  const [name, setName] = useState('');
  const order = props.route.params;

  const GroomingDoneHandler = () => {
    props.navigation.navigate('ArtistOrderStack', {
      screen: 'ArtistGroomingDone',
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ marginLeft: 0 }}>
          <Header
            backBtn
            title="help?"
            titleStyle={{
              position: 'absolute',
              right: 0,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: '#84668C',
              fontSize: 14,
              color: '#84668C',
              paddingVertical: 1,
              paddingHorizontal: 15,
            }}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image source={grooming} style={styles.image} />
        </View>
        <View>
          <Text style={styles.heading}>Grooming has started</Text>
          <Text
            style={{
              color: '#67718C',
              textAlign: 'center',
              fontFamily: fonts.robo_reg,
              marginTop: 10,
            }}>
            Estimated grooming time:
          </Text>
          <View style={styles.timeContainer}>
            <Image source={clockcolor} style={styles.clockImage} />
            <Text style={{ color: theme.primary, fontWeight: 'bold', fontSize: 16 }}>60:00 min</Text>
          </View>
        </View>

        <SimpleOrderCard order={order} />

        <View>
          <TextInput
            input={text => setName(text)}
            placeholder={'Enter total amount '}
            inputBoxStyle={{
              backgroundColor: '#84668C1A',
              borderBottomColor: '#84668C1A',
              paddingHorizontal: 20,
              borderRadius: 5,
              height: heightToDp(15),
            }}
          />
        </View>
        <Text
          style={{
            color: '#67718C',
            marginHorizontal: widthToDp(22),
            textAlign: 'center',
            marginVertical: 15,
            fontFamily: fonts.robo_reg,
          }}>
          Amount should be equal to or more than
          <Text style={{ color: '#007AFF' }}> Rs 3400</Text>
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Button title="Grooming Done" onPress={GroomingDoneHandler} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingTop: heightToDp(7),
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginBottom: 20,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: heightToDp(55),
    width: widthToDp(69),
  },
  heading: {
    fontSize: 28,
    fontFamily: fonts.hk_bold,
    color: '#0F2851',
    textAlign: 'center',
    marginTop: 10,
  },
  clockImage: {
    width: 28,
    height: 21,
    resizeMode: 'contain',
    marginRight: 5,
  },
  orderContainer: {
    backgroundColor: 'white',
    // width: widthToDp(44),
    marginHorizontal: widthToDp(5),
    // width: (width * 0.91) / 2,
    paddingVertical: heightToDp(5),
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
    fontFamily: fonts.hk_bold,
    color: '#0F2851',
  },
  textBold: {
    fontWeight: 'bold',
  },
});
