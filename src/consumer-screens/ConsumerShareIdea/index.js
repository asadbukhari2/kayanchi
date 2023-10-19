import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Button, Header, TextInput } from '../../components';
import { heightToDp, widthToDp, width, height } from '../../utils/Dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { fonts, useTheme } from '../../utils/theme';
import attachfile from '../../assets/attachfile.png';
const theme = useTheme();
const PAYMENTS = [
  {
    icon: <SimpleLineIcons name={'bell'} style={{ fontSize: 16, color: theme.primary }} />,
    title: 'Notifications',
    onPress: () =>
      props.navigation.navigate('ArtistProfileStack', {
        screen: 'ArtistNotifications',
      }),
  },
  {
    icon: (
      <Image
        source={require('../../assets/orderList.png')}
        style={{
          width: widthToDp(4.5),
          height: heightToDp(4.5),
          resizeMode: 'cover',
        }}
      />
    ),
    title: 'Ordering',
    onPress: () =>
      props.navigation.navigate('ArtistProfileStack', {
        screen: 'ArtistOrderSetting',
      }),
  },

  {
    icon: (
      <Image
        source={require('../../assets/logout.png')}
        style={{
          width: widthToDp(4.5),
          height: heightToDp(4.5),
          resizeMode: 'cover',
        }}
      />
    ),
    title: 'Sign out',
    onPress: () => dispatch(signout()),
  },

  {
    icon: <Icon name={'magnify'} style={{ fontSize: 16, color: theme.primary }} />,
    title: 'Finding a service',
  },

  {
    icon: <FontAwesome name={'credit-card'} style={{ fontSize: 16, color: theme.primary }} />,
    title: 'Payments',
  },
  {
    icon: (
      <Image
        source={require('../../assets/marketplace.png')}
        style={{
          width: widthToDp(4.5),
          height: heightToDp(4.5),
          resizeMode: 'cover',
        }}
      />
    ),
    title: 'Marketplace',
    onPress: () =>
      props.navigation.navigate('ArtistProfileStack', {
        screen: 'ArtistOrderSetting',
      }),
  },
  {
    title: 'Other',
    // onPress: () => props.navigation.navigate('ArtistSavedAddresses'),
    onPress: () =>
      props.navigation.navigate('ArtistProfileStack', {
        screen: 'ArtistSavedAddresses',
      }),
  },
];

const renderItem = ({ icon, title, onPress }) => (
  <TouchableOpacity style={styles.optionContainer} onPress={onPress}>
    <View style={styles.iconContainer}>{icon}</View>
    <Text style={styles.optionTitle}>{title}</Text>
  </TouchableOpacity>
);

export default function ConsumerShareIdea(props) {
  const [name, setName] = useState('');

  const firstRowOptions = PAYMENTS.slice(0, 3);
  const secondRowOptions = PAYMENTS.slice(3, 5);
  const thirdRowOptions = PAYMENTS.slice(5);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header title="Share an idea" backBtn />
      </View>
      <View>
        <Text style={[styles.subHeading, { marginBottom: 15 }]}>Which area does your idea relate to?</Text>
      </View>
      <View style={styles.optionsContainer}>
        <View style={styles.rowContainer}>
          {firstRowOptions.map((item, index) => (
            <React.Fragment key={index}>{renderItem(item)}</React.Fragment>
          ))}
        </View>
        <View style={styles.rowContainer}>
          {secondRowOptions.map((item, index) => (
            <React.Fragment key={index}>{renderItem(item)}</React.Fragment>
          ))}
        </View>
        <View style={styles.rowContainer}>
          {thirdRowOptions.map((item, index) => (
            <React.Fragment key={index}>{renderItem(item)}</React.Fragment>
          ))}
        </View>
      </View>

      <View>
        <Text style={styles.subHeading}>Tell us about your idea</Text>
      </View>
      <View>
        <TextInput
          input={text => setName(text)}
          placeholder={'What did you expect and what happened instead?'}
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
      </View>
      <View>
        <View style={styles.files}>
          <View style={styles.imageFileContainer}>
            <Image source={attachfile} style={styles.imageFile} />
          </View>
          <Text
            style={{
              paddingHorizontal: 5,
              fontSize: 12,
              color: '#ABABAB',
              fontFamily: fonts.robo_med,
            }}>
            Attach a file
          </Text>
          <Text style={{ color: '#29AAE2' }}>0/2500</Text>
        </View>
      </View>
      <View style={{ marginTop: 60 }}>
        <Button title="Submit" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingTop: heightToDp(7),
  },
  subHeading: {
    // fontWeight: '500',
    fontSize: 16,
    fontFamily: fonts.robo_med,
    color: '#0F2851',
    marginLeft: widthToDp(5),
    marginBottom: 10,
  },
  files: {
    position: 'absolute',
    right: 20,
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: widthToDp(5),
    marginTop: 10,
  },
  imageFileContainer: {
    backgroundColor: '#eeeeee',
    padding: 5,
    borderRadius: 30,
  },
  imageFile: { width: 20, height: 20, resizeMode: 'contain' },
  rowContainer: {
    flexDirection: 'row',
    // justifyContent:"space-between",
    marginBottom: 20,
  },
  optionsContainer: {
    paddingHorizontal: 20,
    width: width * 0.91,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 7,
    backgroundColor: '#EEEEEE',
    borderRadius: 30,
  },
  iconContainer: {
    marginRight: 10,
    // marginLeft: 10
  },
  optionTitle: {
    fontSize: 12,
    color: '#0F2851',
  },
});
