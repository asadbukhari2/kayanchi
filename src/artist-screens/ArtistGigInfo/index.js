import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Image, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Header, TextInput } from '../../components';
import { fonts, useTheme } from '../../utils/theme';
import { width, heightToDp, widthToDp } from '../../utils/Dimensions';
import makeStyle from './artistGigInfo.style';

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
  const styles = makeStyle(theme)
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


