import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Button } from '../../components';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import { useTheme, fonts } from '../../utils/theme';

import { RadioButton } from 'react-native-paper';
import { cancelOrder } from '../../redux/actions';

const theme = useTheme();
const faqData = [
  { id: 1, question: 'The client is not reached yet' },
  { id: 3, question: 'Client is asking for discount?' },
  { id: 4, question: 'Others' },
];
const ArtistWhyCancel = props => {
  const [message, setMessage] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const { cancel_type, order_id } = props.route.params;
  const handleSubmit = () => {
    if (selectedQuestion) {
      const issue = faqData.find(_ => _.id === selectedQuestion);

      const data = {
        issue: issue?.question,
        reason: message,
        cancel_type,
        order_id,
      };

      cancelOrder(data, () => {
        props.navigation.navigate('ArtistOrder', { screen: 'ArtistOrders' });
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: widthToDp(5),
          width: widthToDp(90),
        }}>
        <View style={{ marginLeft: 0 }}>
          <Header backBtn />
        </View>
      </View>
      <View>
        <Text style={styles.heading}>Tell us why?</Text>
        <Text style={styles.subheading}>Please make sure you tell us everthing</Text>
      </View>

      <View>
        <View style={styles.faqcontainer}>
          {faqData.map(item => (
            <View key={item.id} style={styles.faqContent}>
              <RadioButton.Group onValueChange={newValue => setSelectedQuestion(newValue)} value={selectedQuestion}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={{ color: theme.lightBlack }}>{item.question}</Text>

                  <RadioButton value={item.id} />
                </View>
              </RadioButton.Group>
            </View>
          ))}
        </View>
      </View>

      <View style={{ paddingHorizontal: widthToDp(4), marginTop: 10 }}>
        <TextInput
          multiline
          placeholder="Please tell us anything that you think will help the situation for us."
          value={message}
          placeholderTextColor={theme.greyText}
          onChangeText={setMessage}
          style={styles.input}
        />
      </View>

      <Button title="Confirm Cancellation" btnStyle={styles.btn} onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default ArtistWhyCancel;

const styles = StyleSheet.create({
  heading: {
    color: '#0F2851',
    fontSize: 40,
    marginLeft: widthToDp(4),
    fontFamily: fonts.hk_bold,
  },
  subheading: {
    marginLeft: widthToDp(4),
    fontSize: 16,
    color: '#67718C',
    marginBottom: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  btn: {
    position: 'absolute',
    bottom: heightToDp(5.5),
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

  image: { position: 'absolute', width: 16, height: 16, marginLeft: 8 },
  resolution: { width: 48, height: 48, resizeMode: 'contain', margin: 5 },
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
    height: heightToDp(30),
    backgroundColor: 'white',
    color: theme.dark,
    textAlignVertical: 'top',
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 20,
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
  refund: {
    color: '#ABABAB',
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 15,
  },
  refundContainer: { marginHorizontal: widthToDp(28) },
  faqContent: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    paddingVertical: widthToDp(2),
  },
  faqimage: { width: 12, height: 12, resizeMode: 'contain' },
  iconStyles: {
    width: 25,
    height: 25,
    marginRight: 10,
    resizeMode: 'contain',
    // , position: 'absolute', left: widthToDp(5)
  },
});
