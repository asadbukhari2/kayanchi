import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Header, ImageCard } from '../../components';
import { heightToDp, width } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';
import { showMessage } from 'react-native-flash-message';
import { useDispatch, useSelector } from 'react-redux';
import { SIGNUP } from '../../redux/actions';

import { Fetch } from '../../utils/APIservice';

const theme = useTheme();

const ConsumerInterests = props => {
  const { navigation } = props;

  const dispatch = useDispatch();
  const [interest, setInterest] = useState([]);
  const [interestData, setInterestData] = useState([]);
  const dataToSave = useSelector(state => state.auth.signUpUserData);

  const createAccount = async () => {
    if (interest.length < 1) {
      showMessage({
        message: 'Please Select atleast one interest to proceed',
        type: 'warning',
      });
    } else {
      dispatch(SIGNUP({ ...dataToSave, interests: interest }, navigation));
    }
  };
  const fetchInterests = async () => {
    console.log('function call fetchInterests');
    try {
      let res = await Fetch.get('/api/interest/app');
      res = await res.json();
      console.log('this is the response form the fetchInterests', res);
      setInterestData(res);
      return res;
    } catch (error) {
      console.log('error in the fetchinterests api response', error);
      return error;
    }
  };
  useEffect(() => {
    fetchInterests();
    console.log('interestData', interestData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <Header backBtn title={'Interests'} />
      <View style={{ width: width * 0.868, alignSelf: 'center' }}>
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
          data={interestData}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          contentContainerStyle={{ paddingBottom: heightToDp(70) }}
          keyExtractor={(item, index) => item.id}
          numColumns={3}
          renderItem={({ item }) => {
            return (
              <ImageCard
                name={item.name.toUpperCase()}
                imageLink={item.image}
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
      <Button title={'Continue'} btnStyle={styles.btn} onPress={createAccount} />
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
