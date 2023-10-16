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
import search from '../../assets/question.png';
import resolution from '../../assets/resolution.png';
import cancelation from '../../assets/cancelation.png';
import faq from '../../assets/faq.png';
const whatsappphone = require('../../assets/whatsappphone.png');
import {RadioButton} from 'react-native-paper';

const theme = useTheme();
const faqData = [
  {id: 1, question: 'The client is not reached yet'},
  {id: 2, question: 'Client is not picking up call'},
  {id: 3, question: 'Client is asking for discount?'},
  {id: 4, question: 'Others'},
];
const ArtistDisputeResolution = props => {
  const [name, setName] = useState('');
  const [checked, setChecked] = useState('first');
  const [selectedQuestion, setSelectedQuestion] = useState(null);

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
          <Text style={styles.heading}>What would you like to resolve</Text>
        </View>

        <View>
          <View style={styles.faqcontainer}>
            {faqData.map(item => (
              <View key={item.id} style={styles.faqContent}>
                <RadioButton.Group
                  onValueChange={newValue => setSelectedQuestion(newValue)}
                  value={selectedQuestion}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text>{item.question}</Text>
                    <RadioButton value={item.id} />
                  </View>
                </RadioButton.Group>
              </View>
            ))}
          </View>
        </View>

        {selectedQuestion !== null && (
          <View style={{paddingHorizontal: widthToDp(4), marginTop: 10}}>
            <TextInput
              multiline
              placeholder="Please tell us anything that you think will help the situation for us."
              value={name}
              onChangeText={setName}
              style={styles.input}
            />
            <Text style={{color: '#29AAE2', textAlign: 'right', position: 'absolute', bottom: 10, right: 20}}>0/200</Text>
          </View>
        )}

        <View style={styles.refundContainer}>
          <Text style={styles.refund}>
            *Refundsare only applicable on digital payments prior to the start
            of your grooming.
          </Text>
          <Text style={styles.refund}>
            We will try to resolve your dispute as soon as possible
          </Text>
        </View>

        <View>
          <Button title={'Submit Request'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistDisputeResolution;

const styles = StyleSheet.create({
  heading: {
    color: '#0F2851',
    fontSize: 40,
    marginLeft: widthToDp(4),
    fontFamily: fonts.hk_bold,
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
    height: heightToDp(30),
    backgroundColor: '#F1F1F1',
    textAlignVertical: 'top',
    borderRadius: 10,
    paddingLeft: 10,
  },
  centeredContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  faqcontainer: {
    backgroundColor: 'white',
    marginHorizontal: widthToDp(4),
    marginTop: 15,
    paddingHorizontal: widthToDp(4),
    paddingVertical: 10,
    borderRadius: 10,
  },
  refund: {
    color: '#ABABAB',
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 15,
    fontFamily: fonts.robo_reg,
  },
  refundContainer: {marginHorizontal: widthToDp(28)},
  faqContent: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
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
