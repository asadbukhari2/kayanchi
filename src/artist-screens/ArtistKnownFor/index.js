import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Header, TextInput } from '../../components';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { fonts, useTheme } from '../../utils/theme';
import { heightToDp, width } from '../../utils/Dimensions';

import { useNavigation } from '@react-navigation/native';
import { SIGNUP } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message';
import makeStyle from './artistKnownFor.style';

const theme = useTheme();

export default function ArtistKnownFor() {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [skills, setSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const styles = makeStyle(theme)
  const dispatch = useDispatch();
  const dataToSave = useSelector(state => state.auth.signUpUserData);

  const isLoading = useSelector(state => state.auth.isLoading);
  const categories = useSelector(state => state.common.categories);

  useEffect(() => {
    setSkills(categories);
  }, [categories]);

  const toggleSkill = skill => {
    const skillIndex = selectedSkills.findIndex(selectedSkill => selectedSkill.name === skill.name);

    if (skillIndex !== -1) {
      setSelectedSkills(prevSkills => [...prevSkills.slice(0, skillIndex), ...prevSkills.slice(skillIndex + 1)]);
    } else {
      setSelectedSkills(prevSkills => [...prevSkills, skill]);
    }
  };

  const createAccount = async () => {
    if (selectedSkills.length < 1 || !title) {
      showMessage({
        message: 'Please Select atleast one category or fill your title',
        type: 'warning',
      });
    } else {
      const knf = selectedSkills.map(item => {
        return {
          name: item.name,
          id: item.id,
        };
      });
      // console.log(knf);
      dispatch(SIGNUP({ ...dataToSave, type_login: 'artist', known_for: knf, title }, navigation));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Skills'} />
      <ScrollView>
        <TextInput
          mainLabel={'What are you known as?'}
          subLabel={'Let your clients know what you’re the best at'}
          input={text => setTitle(text)}
          placeholder={'For e.g Make up artist, Stylist, Barber'}
          inputBoxStyle={{
            borderBottomColor: '#EEEEEE',
            backgroundColor: '#EEEEEE',
            borderRadius: 5,
            paddingVertical: 5,
            height: 50,
            padding: 15,
          }}
          underlineColorAndroid="transparent"
          underlineColorIOS="transparent"
        />
        <TextInput
          mainLabel={'What are you known for?'}
          subLabel={"Personalize your clients' Kaynchi experience. Select all possible categories below"}
          removeInput
        />

        <View style={styles.genView}>
          {skills &&
            skills?.map(item => {
              return (
                <View key={item.name}>
                  <TouchableOpacity onPress={() => toggleSkill(item)} activeOpacity={0.7}>
                    <View
                      style={[
                        styles.genBtn,
                        {
                          backgroundColor: selectedSkills.some(selectedSkill => selectedSkill.name === item.name)
                            ? theme.brown
                            : '#D5D5D5',
                        },
                      ]}>
                      <Text
                        style={[
                          styles.genTxt,
                          {
                            color: !selectedSkills.some(selectedSkill => selectedSkill.name === item.name)
                              ? theme.lightBlack
                              : theme.background,
                          },
                        ]}>
                        {item.name}
                      </Text>
                    </View>

                    {/* <View style={styles.iconContainer}>
                    <View style={styles.iconWrapper}>
                      <Image
                        source={{
                          uri: item.image,
                        }}
                        resizeMode="contain"
                        style={{ width: 50, height: 50 }}
                      />
                      <Text style={styles.iconText}>{item.message}</Text>
                    </View>
                  </View> */}
                    <View style={styles.iconContainer}>
                      {/* {item.image_urls &&
                      item?.image_urls.map((imagePath, index) => (
                        <View key={index} style={styles.iconWrapper}>
                          <Image source={imagePath} resizeMode="contain" style={{ width: 50, height: 50 }} />
                          <Text style={styles.iconText}>po</Text>
                        </View>
                      ))} */}
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
        </View>

        <Button
          title={isLoading ? 'Loading...' : 'Continue'}
          disable={isLoading}
          btnStyle={[styles.btn, { marginTop: heightToDp(10) }]}
          onPress={createAccount}
        />
      </ScrollView>
    </SafeAreaView>
  );
}


