import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Image, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Header, TextInput } from '../../components';
import { fonts, useTheme } from '../../utils/theme';
import { width, heightToDp, widthToDp } from '../../utils/Dimensions';

const data = ['20% Commision', '5 Gigs', '2 Promos'];

const hair = require('../../assets/hair.png');
const face = require('../../assets/face.png');
const waxing = require('../../assets/body.png');
const Massages = require('../../assets/spa.png');
const Botox = require('../../assets/treatment.png');

const Gender = [
  {
    name: 'Female',
  },
  {
    name: 'Male',
  },
  {
    name: 'Non Binary',
  },
];

const Category = [
  {
    name: 'Hair',
    imageLink: hair,
  },
  {
    name: 'Face',
    imageLink: face,
  },
  {
    name: 'Body',
    imageLink: waxing,
  },
  {
    name: 'Spa',
    imageLink: Massages,
  },
  {
    name: 'Treatments',
    imageLink: Botox,
  },
];

const theme = useTheme();
export default function ArtistGigInfo(props) {
  const [name, setName] = useState('');
  const [gender, setGender] = useState([]);
  const [category, setCategory] = useState('');

  const handleClick = () => {
    props.navigation.navigate('ArtistHomeStack', {
      screen: 'ArtistGigDescription',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header backBtn title="Basic gig info" />
      <ScrollView>
        <View>
          <Text style={styles.welcomeTxt}>Name your Service</Text>
          <Text style={styles.subheading}>This will appear as your gig title</Text>
        </View>
        <TextInput
          input={text => setName(text)}
          placeholder={'Sagan / Engagement makeupx'}
          inputBoxStyle={{
            backgroundColor: '#ffffff',
            borderBottomColor: '#ffffff',
            padding: 10,
            height: heightToDp(25),
            borderRadius: 10,
            textAlignVertical: 'top',
          }}
        />
        <Text
          style={[
            {
              fontSize: 14,
              color: '#9A9A9A',
              fontFamily: fonts.robo_reg,
              paddingTop: 5,
              marginHorizontal: widthToDp(5),
            },
          ]}>
          This title cannot contain more than 30 letters
        </Text>
        <View>
          <Text style={[styles.welcomeTxt, { paddingTop: heightToDp(4) }]}>Choose category</Text>
          <Text style={styles.subheading}>Please choose from the given. </Text>
        </View>
        <View style={styles.genRow}>
          {Category.slice(0, 3).map(item => (
            <TouchableOpacity
              onPress={() => setCategory(item.name)}
              activeOpacity={0.7}
              style={[
                styles.genBtn,
                {
                  backgroundColor: category === item.name ? theme.primary : theme.genderGrey,
                },
              ]}
              key={item.name}>
              <View style={styles.categoryItem}>
                <Image source={item.imageLink} style={{ height: 25, width: 25, resizeMode: 'contain' }} />
                <Text style={styles.genTxt}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={[styles.genRow, { justifyContent: 'flex-start' }]}>
          {Category.slice(3, 5).map(item => (
            <TouchableOpacity
              onPress={() => setCategory(item.name)}
              activeOpacity={0.7}
              style={[
                styles.genBtn,
                {
                  backgroundColor: category === item.name ? theme.primary : theme.genderGrey,
                },
                { marginRight: widthToDp(5) },
                { width: widthToDp(34.5) },
              ]}
              key={item.name}>
              <View style={styles.categoryItem}>
                <Image source={item.imageLink} style={{ height: 25, width: 25, resizeMode: 'contain' }} />
                <Text style={styles.genTxt}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View>
          <Text style={[styles.welcomeTxt, { paddingTop: heightToDp(4) }]}>Target audience</Text>
          <Text style={styles.subheading}>Choose the target audience, this gig is for </Text>
        </View>
        <View style={styles.genView}>
          {Gender.map(item => {
            return (
              <TouchableOpacity
                onPress={() => setGender(item.name)}
                activeOpacity={0.7}
                style={[
                  styles.genBtn,
                  {
                    backgroundColor: gender === item.name ? theme.brown : theme.genderGrey,
                  },
                ]}
                key={item.name}>
                <Text style={{ color: '#ffffff' }}>{item.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{ paddingVertical: heightToDp(4) }}>
          <Button title="Continue" onPress={handleClick} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingTop: heightToDp(8),
  },
  genRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.91,
    alignSelf: 'center',

    marginTop: heightToDp(4.5),
  },
  genView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.91,
    alignSelf: 'center',
    marginTop: heightToDp(4.5),
    color: '#ffffff',
  },
  genTxt: { color: '#ffffff', marginLeft: 6 },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  genBtn: {
    // flex: 1,
    width: widthToDp(27.5),
    height: heightToDp(9.7),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    color: '#ffffff',
  },
  welcomeTxt: {
    fontSize: 34,
    fontFamily: fonts.hk_bold,
    color: '#2F3A58',
    paddingHorizontal: widthToDp(5),
  },
  subheading: {
    color: '#67718C',
    fontSize: 16,
    fontFamily: fonts.robo_reg,
    paddingHorizontal: widthToDp(5),
  },
});
