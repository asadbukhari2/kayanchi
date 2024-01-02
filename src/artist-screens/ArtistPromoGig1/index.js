import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Header, TextInput } from '../../components';
import { fonts, useTheme } from '../../utils/theme';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { capitalizeEachWord } from '../../utils/helper';
import { showMessage } from 'react-native-flash-message';

const audience = ['Female', 'Male'];

const theme = useTheme();

export default function ArtistPromoGig1() {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState();
  const [selectedAudience, setSelectedAudience] = useState([]);

  const categories = useSelector(state => state.common.categories);
  const route = useRoute();

  const clickHandler = () => {
    if (!name || !selectedCategory || !description || !selectedAudience.length > 0) {
      showMessage({
        type: 'warning',
        message: 'Enter Values',
      });
    } else {
      navigation.navigate('ArtistPromoGig2', {
        category_id: selectedCategory.id,
        target_audience: selectedAudience,
        description,
        name,
        ...route.params,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header backBtn title="Promo gig info" />
      <ScrollView>
        <View style={styles.gigVersion}>
          <Text style={styles.title}>Name your promo</Text>
        </View>
        <Text style={styles.txt}>This will be displayed as your gig title.</Text>

        <TextInput
          multiline={true}
          height={90}
          style={styles.inputField}
          value={name}
          input
          onChangeText={e => setName(e)}
          maxLength={30}
          placeholder="Sagan / Engagement makeupx"
          placeholderTextColor={'#8D8A94'}
        />
        <Text style={styles.warning}>This title cannot contain more than 30 letters</Text>
        <View style={styles.gigVersion}>
          <Text style={styles.title}>Choose category</Text>
        </View>
        <Text style={styles.txt}>Please choose from the given.</Text>

        <View
          style={{
            flex: 0,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: widthToDp(90),
              flex: 0,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {categories.map(item => {
              return (
                <TouchableOpacity
                  onPress={() => setSelectedCategory(item)}
                  style={{
                    width: 100,
                    height: 35,
                    flex: 0,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 30,
                    backgroundColor: selectedCategory.name === item.name ? '#84668C' : '#9A9A9A',
                    marginRight: 7,
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: fonts.robo_reg,
                      color: 'white',
                      lineHeight: 16,
                    }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={styles.gigVersion}>
          <Text style={styles.title}>Target audience</Text>
        </View>
        <Text style={styles.txt}>Choose the target audience, this gig is for.</Text>
        <View
          style={{
            flex: 0,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: widthToDp(90),

              flex: 0,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {audience.map(item => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    if (selectedAudience.includes(item)) {
                      setSelectedAudience(selectedAudience.filter(aud => aud !== item));
                    } else {
                      setSelectedAudience([...selectedAudience, item]);
                    }
                  }}
                  style={{
                    width: 100,
                    height: 35,
                    flex: 0,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 30,
                    backgroundColor: selectedAudience.includes(item) ? '#A77246' : '#9A9A9A',
                    marginRight: 7,
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: fonts.robo_reg,
                      color: 'white',
                      lineHeight: 16,
                    }}>
                    {capitalizeEachWord(item.split('-').join(' '))}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={styles.gigVersion}>
          <Text style={styles.title}>Promo description</Text>
        </View>
        <TextInput
          multiline={true}
          style={[styles.inputField, styles.inputFieldDescription]}
          value={description}
          input
          onChangeText={e => setDescription(e)}
          maxLength={200}
          placeholder="Please tell use anything that may assist with the order..."
          placeholderTextColor={'#8D8A94'}
        />
        <Text
          style={[
            {
              fontSize: 14,
              color: '#9A9A9A',
              paddingHorizontal: widthToDp(7),
              fontFamily: fonts.robo_reg,
              paddingTop: 5,
            },
          ]}>
          The desc can not conatain more than 200 letters
        </Text>

        <View style={{ paddingVertical: heightToDp(5) }}>
          <Button title="Continue" onPress={clickHandler} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.white,
  },
  gigVersion: {
    marginTop: 30,
  },
  warning: {
    fontSize: 14,
    marginHorizontal: 24,
    fontFamily: fonts.robo_reg,
    color: '#8D8A94',
    marginTop: 8,
    lineHeight: 18.75,
  },
  inputField: {
    backgroundColor: 'white',
    width: widthToDp(90),
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 24,
    fontFamily: fonts.hk_medium,
    color: '#8D8A94',
    marginTop: 8,
  },
  inputFieldDescription: {
    fontSize: 18,
  },

  skipView: {
    position: 'absolute',
    bottom: heightToDp(23),
    alignSelf: 'center',
  },
  btn: {
    position: 'absolute',
    bottom: heightToDp(5.5),
  },
  img: {
    resizeMode: 'cover',
    height: heightToDp(59.95),
    width: widthToDp(67.9),
    alignSelf: 'center',
    marginTop: heightToDp(6.7),
  },
  skip: {
    fontSize: 14,
    fontFamily: fonts.robo_reg,
    lineHeight: 16.41,
    color: theme.linkTxt,
  },
  txt: {
    fontSize: 16,
    marginHorizontal: 24,
    fontFamily: fonts.robo_reg,
    color: '#67718C',
    marginTop: 8,
    lineHeight: 18.75,
  },
  title: {
    fontSize: 34,
    marginHorizontal: 24,
    fontFamily: fonts.hk_bold,
    color: theme.lightBlack,
  },
});
