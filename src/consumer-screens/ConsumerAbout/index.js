import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Switch,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header, Button} from '../../components';
import {height, heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {useTheme, fonts} from '../../utils/theme';
import back from '../../assets/back.png';
import faq from '../../assets/faq.png';
import CalendarComponent from '../../components/Calender/CalendarComponent';
const theme = useTheme();
const faqData = [
  {id: 1, question: 'Terms & conditions'},
  {id: 2, question: 'Privacy Policy'},
  {id: 3, question: 'Payments & Wallet terms'},
];
const ConsumerAbout = props => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const handleDateSelection = (date) => {
    // Handle the selected date here
    setSelectedDate(date);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: widthToDp(5),
            width: widthToDp(90),
          }}>
          {/* <Image source={back} /> */}
          <View style={{marginLeft: 0}}>
            <Header backBtn />
          </View>
        </View>

        <View>
          <Text style={styles.heading}>About </Text>
        </View>
              <View style={styles.faqcontainer}>
          {faqData.map(item => (
            <View style={styles.faqContent}>
              <Text style={{fontSize: 16}}>{item.question}</Text>
              <Image source={faq} style={styles.faqimage} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConsumerAbout;

const styles = StyleSheet.create({
  heading: {
    color: '#0F2851',
    fontSize: 40,
    marginLeft: widthToDp(4),
   fontFamily: fonts.hk_bold
  },
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingTop: heightToDp(7),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 12,
    borderColor: 'white',
    paddingVertical: 2,
    marginHorizontal: widthToDp(4),
  },

  image: {position: 'absolute', width: 16, height: 16, marginLeft: 8},
  resolution: {width: 48, height: 48, resizeMode: 'contain', margin: 5},
  helpContainer: {
    backgroundColor: 'white',
    paddingHorizontal: widthToDp(5),
    paddingVertical: heightToDp(5),
    borderRadius: 10,
  },
  containerContent: {
    flexDirection: 'row',
    marginVertical: heightToDp(4),
    marginHorizontal: widthToDp(4),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginLeft: 15,
  },
  centeredContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  faqcontainer: {
    backgroundColor: 'white',
    marginHorizontal: widthToDp(4),
    paddingHorizontal: widthToDp(4),
    paddingVertical: 10,
    borderRadius: 10,
  },
  faqContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: widthToDp(2),
  },
  faqimage: {width: 12, height: 12, resizeMode: 'contain'},
  iconStyles: {
    width: 25,
    height: 25,
    marginRight: 10,
    resizeMode: 'contain',
    // , position: 'absolute', left: widthToDp(5)
  },
});
