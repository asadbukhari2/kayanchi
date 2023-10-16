import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Header, TextInput} from '../../components';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView,
} from 'react-native';
import {fonts, useTheme} from '../../utils/theme';
import {heightToDp, width, widthToDp} from '../../utils/Dimensions';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming you want to use FontAwesome icons, you can change it to any other supported icon library.
import {showMessage} from 'react-native-flash-message';

const theme = useTheme();

const Gender = [
  {
    name: 'Hair',
    icons: [
      require('../../assets/Haircut.png'),
      require('../../assets/Haircolor.png'),
      require('../../assets/Styling.png'),
    ],
    message: ['Haircut', 'Hair Color', 'Styling'],
  },
  {
    name: 'Face',
    icons: [
      require('../../assets/Makeup.png'),
      require('../../assets/EyeLashes.png'),
      require('../../assets/Facials.png'),
    ],
    message: ['Makeup', 'EyeLashes', 'Facials'],
  },
  {
    name: 'Body',
    icons: [
      require('../../assets/Waxing.png'),
      require('../../assets/Pedicure.png'),
      require('../../assets/Medicure.png'),
    ],
    message: ['Waxing', 'Pedicure', 'Medicure'],
  },
  {
    name: 'Spa',
    icons: [
      require('../../assets/Massages.png'),
      require('../../assets/Oiling.png'),
      require('../../assets/Cupping.png'),
    ],
    message: ['Massages', 'Oiling', 'Cupping'],
  },
  {
    name: 'Treatments',
    icons: [
      require('../../assets/Botox.png'),
      require('../../assets/Fillers.png'),
      require('../../assets/Laser.png'),
    ],
    message: ['Botox', 'Fillers', 'Laser'],
  },
];

export default function ConsumerKnownFor({navigation}) {
  const [skills, setSkills] = useState([]);
  const [name, setName] = useState('');

  const [loading, setLoading] = useState(false);

  const SkillsHandler = async () => {
    navigation.navigate('ConsumerOnBoardingWelcome');
    // try {
    //   const res = await api.post('/api/users/verifypassword', {
    //     email,
    //     phone_number,
    //     password,
    //   });
    //   setLoading(true);
    //   console.log(email, password, res.data, 'EMAIL/PASSWORD');
    //   console.log(res.data);
    // if (res.status == 200) {
    //   dispatch(saveUserData(res.data));
    //   dispatch(saveToken(res.data));
    //   showMessage({
    //     message: 'Logged in successfully!',
    //     type: 'success',
    //   });
    //   navigation.navigate('OnBoardingWelcome');
    // } else {
    //   showMessage({
    //     message: res.data.message,
    //     type: 'danger',
    //   });
    // }
    // } catch (error) {
    //   showMessage({
    //     message: error?.message,
    //     type: 'warning',
    //   });
    //   console.log(error);
    // }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header backBtn titleShadow title={'Skills'} />
      <ScrollView>
        <TextInput
          mainLabel={'Give yourself a title?'}
          subLabel={"Let your client know what you're master at"}
          input={text => setName(text)}
          placeholder={'For e.g Make up artist, Stylist, Barber'}
          inputBoxStyle={{
            borderBottomColor: '#f3f0f3',
            backgroundColor: '#f3f0f3',
            borderRadius: 5,
            padding: 10,
          }}
          underlineColorAndroid="transparent"
          underlineColorIOS="transparent"
        />
        <TextInput
          mainLabel={'What are you known for?'}
          subLabel={
            "Personalize your client's Kaynchi experience. Select all possible Categories below"
          }
          removeInput
        />

        <View style={styles.genView}>
          {Gender.map(item => {
            return (
              <>
                <TouchableOpacity
                  onPress={() => setSkills(item.name)}
                  activeOpacity={0.7}
                  style={[
                    styles.genBtn,
                    {
                      backgroundColor:
                        skills === item.name ? theme.brown : theme.genderGrey,
                    },
                  ]}
                  key={item.name} // Add a unique key to the TouchableOpacity
                >
                  <Text style={styles.genTxt}>{item.name}</Text>
                </TouchableOpacity>

                <View style={styles.iconContainer}>
                  {item.icons.map((imagePath, index) => (
                    <View key={index} style={styles.iconWrapper}>
                      <Image
                        source={imagePath}
                        resizeMode="contain"
                        style={{width: 50, height: 50}}
                      />
                      <Text style={styles.iconText}>{item.message[index]}</Text>
                    </View>
                  ))}
                </View>
              </>
            );
          })}
        </View>

        <Button
          title={'Continue'}
          btnStyle={[styles.btn, {marginTop: heightToDp(10)}]}
          onPress={SkillsHandler}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  btn: {
    marginBottom: heightToDp(3.5),
    // position: 'absolute',
    // bottom: heightToDp(1.5),
  },
  genTxt: {
    fontSize: fonts.robo_reg,
    fontSize: 14,
    lineHeight: 16.41,
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
    height: heightToDp(9.7),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width * 0.9, // Use the width of the parent view to adjust the icon container
    marginTop: heightToDp(4.5),
    marginBottom: heightToDp(4.5),
  },
  iconWrapper: {
    alignItems: 'center',
    flexDirection: 'column', // Ensure text appears below the icon
  },
  iconText: {
    textTransform: 'uppercase',
    marginTop: heightToDp(3),
  },
});
