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
import { getCategory } from '../../redux/actions/commonActions';

const theme = useTheme();

// const Skills = [
//   {
//     name: 'Hair',
//     icons: [
//       require('../../assets/Haircut.png'),
//       require('../../assets/Haircolor.png'),
//       require('../../assets/Styling.png'),
//     ],
//     message: ['Haircut', 'Hair Color', 'Styling'],
//   },
//   {
//     name: 'Face',
//     icons: [
//       require('../../assets/Makeup.png'),
//       require('../../assets/EyeLashes.png'),
//       require('../../assets/Facials.png'),
//     ],
//     message: ['Makeup', 'EyeLashes', 'Facials'],
//   },
//   {
//     name: 'Body',
//     icons: [
//       require('../../assets/Waxing.png'),
//       require('../../assets/Pedicure.png'),
//       require('../../assets/Medicure.png'),
//     ],
//     message: ['Waxing', 'Pedicure', 'Medicure'],
//   },
//   {
//     name: 'Spa',
//     icons: [
//       require('../../assets/Massages.png'),
//       require('../../assets/Oiling.png'),
//       require('../../assets/Cupping.png'),
//     ],
//     message: ['Massages', 'Oiling', 'Cupping'],
//   },
//   {
//     name: 'Treatments',
//     icons: [require('../../assets/Botox.png'), require('../../assets/Fillers.png'), require('../../assets/Laser.png')],
//     message: ['Botox', 'Fillers', 'Laser'],
//   },
// ];

export default function ArtistKnownFor() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [skills, setSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const dispatch = useDispatch();
  const dataToSave = useSelector(state => state.auth.signUpUserData);
  const isSignUp = useSelector(state => state.auth.isSignUp);
  const isLoading = useSelector(state => state.auth.isLoading);
  const categories = useSelector(state => state.common.categories);

  useEffect(() => {
    setSkills(categories);
  }, [categories]);

  // const toggleSkill = skillName => {
  //   if (selectedSkills.includes(skillName)) {
  //     setSelectedSkills(prevSkills => prevSkills.filter(skill => skill !== skillName));
  //   } else {
  //     setSelectedSkills(prevSkills => [...prevSkills, skillName]);
  //   }
  // };

  const toggleSkill = skill => {
    const skillIndex = selectedSkills.findIndex(selectedSkill => selectedSkill.name === skill.name);

    if (skillIndex !== -1) {
      setSelectedSkills(prevSkills => [...prevSkills.slice(0, skillIndex), ...prevSkills.slice(skillIndex + 1)]);
    } else {
      setSelectedSkills(prevSkills => [...prevSkills, skill]);
    }
  };

  const createAccount = async () => {
    if (selectedSkills.length < 1 || !name) {
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

      // dispatch(SIGNUP({ ...dataToSave, type_login: 'artist', known_for: knf, name }));
      navigation.navigate('ArtistOnBoardingWelcome');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Skills'} />
      <ScrollView>
        <TextInput
          mainLabel={'What are you known as?'}
          subLabel={'Let your clients know what you’re the best at'}
          input={text => setName(text)}
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
          {skills.map(item => {
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

                  <View style={styles.iconContainer}>
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
                  </View>
                  {/* <View style={styles.iconContainer}>
                    {item?.icons.map((imagePath, index) => (
                      <View key={index} style={styles.iconWrapper}>
                        <Image source={imagePath} resizeMode="contain" style={{ width: 50, height: 50 }} />
                        <Text style={styles.iconText}>{item.message[index]}</Text>
                      </View>
                    ))}
                  </View> */}
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
        {isSignUp ? (
          <Button
            title="Continue"
            btnStyle={[styles.btn, { marginTop: heightToDp(10) }]}
            onPress={() => navigation.navigate('ArtistOnBoardingWelcome')}
          />
        ) : (
          <Button
            title={isLoading ? 'Loading...' : 'Continude'}
            // disable={isLoading}
            btnStyle={[styles.btn, { marginTop: heightToDp(10) }]}
            onPress={createAccount}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    // paddingTop: heightToDp(7),
  },
  btn: {
    marginBottom: heightToDp(3.5),
    // position: 'absolute',
    // bottom: heightToDp(1.5),
  },
  genTxt: {
    fontFamily: fonts.hk_bold,
    fontSize: 20,
    lineHeight: 21,
    color: theme.background,
  },
  genView: {
    width: width * 0.91,
    alignSelf: 'center',
    marginTop: heightToDp(4.5),

    // marginTopightToDp(8.5),
  },
  genBtn: {
    //   width: widthToDp(27.5),
    // height: heightToDp(9),
    paddingVertical: heightToDp(2.5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width * 0.9,
    marginTop: heightToDp(4.5),
    marginBottom: heightToDp(4.5),
  },
  iconWrapper: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  iconText: {
    textTransform: 'uppercase',
    marginTop: heightToDp(3),
    fontFamily: fonts.robo_reg,
  },
});
