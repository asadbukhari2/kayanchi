import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Header, ImageCard, TextInput} from '../../components';
import {height, heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {fonts, useTheme} from '../../utils/theme';
import api from '../../utils/APIservice';
import {showMessage} from 'react-native-flash-message';
import {useDispatch} from 'react-redux';
import {saveUserData} from '../../redux/actions';
import haircolor from '../../assets/haircolor_interest.png'
import haircut from '../../assets/haircut_interest.png'
import facials from '../../assets/facials_interest.png'
import lashes from '../../assets/lashes_interest.png'
import makeup from '../../assets/makeup_interest.png'
import massage from '../../assets/massage_interest.png'
import medicure from '../../assets/medicure_interest.png'
import pedicure from '../../assets/pedicure_interest.png'
import waxing from '../../assets/waxing_interest.png'

const theme = useTheme();

const DATA = [
  {
    service: 'HAIRCUT',
    imageLink:haircut
  },
  {
    service: 'HAIRCOLOR',
    imageLink:haircolor
  },
  {
    service: 'MAKEUP',
    imageLink: makeup
  },
  {
    service: 'MASSAGES',
    imageLink: massage
  },
  {
    service: 'PEDICURE',
    imageLink:pedicure
  },
  {
    service: 'MEDICURE',
    imageLink: medicure

  },
  {
    service: 'WAXING',
    imageLink: waxing
  },
  {
    service: 'EYELASHES',
    imageLink:lashes
  },
  {
    service: 'FACIALS',
    imageLink: facials
  },
];

const ConsumerInterests = props => {
  const {navigation} = props;

  const dispatch = useDispatch();
  let [data, setData] = useState([]);
  const [interest, setInterest] = useState([]);

  useEffect(() => {
    const getInterest = async () => {
      const res = await api.get('/api/users/interest');
      setData(res.data);
    };

    getInterest();
  }, []);

  console.log(data, '*************DATA');
  console.log(interest, '*************INTEREST');

  const addInterest = async () => {
    navigation.navigate('ConsumerOnBoardingWelcome');

    try {
      const res = await api.post('/api/users/interest', {
        interest,
      });

      console.log('interestADDED', res.data);
      // setLoading(true);
      // dispatch(saveUserData(res.data));

      navigation.navigate('OnBoardingWelcome', {data: res.data});
      // } else {
      //   setLoading(false);
      //   showMessage({
      //     message: res.data,
      //     type: 'danger',
      //   });
      // }
    } catch (error) {
      showMessage({
        message: error?.message,
        type: 'warning',
      });
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header backBtn title={'Interests'} />
      <View style={{width: width * 0.868, alignSelf: 'center'}}>
        <Text style={styles.labelText}>What are you looking for?</Text>
        <Text style={styles.subLabel}>Personalize your Kaynchi.</Text>
      </View>
      <View
        style={{
          width: width * 0.91,
          alignSelf: 'center',
          marginTop: heightToDp(1.1),
        }}>
        <FlatList
          data={DATA}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          contentContainerStyle={{paddingBottom: heightToDp(70)}}
          keyExtractor={(item, index) => index}
          numColumns={3}
          renderItem={({item}) => {
            return (
              <ImageCard
                name={item.service}
                imageLink={item.imageLink}
                onPress={() => {
                  if (interest.includes(item.id)) {
                    setInterest(interest.filter(e => e !== item.id));
                  } else {
                    setInterest([...interest, item.id]);
                  }
                }}
                isSelected={interest.includes(item.id)}
              />
            );
          }}
        />
      </View>
      <Button title={'Continue'} btnStyle={styles.btn} onPress={addInterest} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  btn: {
    position: 'absolute',
    bottom: heightToDp(5.5),
  },
  labelText: {
    fontSize: 20,
    fontFamily: fonts.hk_bold,
    lineHeight: 23.44,
    color: theme.lightBlack,
    marginTop: heightToDp(5),
  },
  subLabel: {
    fontSize: 16,
    lineHeight: 18.75,
    fontFamily: fonts.robo_reg,
    color: theme.darkBlack,
    marginTop: heightToDp(2.2),
  },
});

export default ConsumerInterests;
