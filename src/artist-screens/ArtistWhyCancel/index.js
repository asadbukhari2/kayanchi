import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Button } from '../../components';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import { useTheme, fonts } from '../../utils/theme';

import { RadioButton } from 'react-native-paper';
import { cancelOrder } from '../../redux/actions';
import makeStyle from './artistWhyCancel.styles';

const theme = useTheme();
const faqData = [
  { id: 1, question: 'The client is not reached yet' },
  { id: 3, question: 'Client is asking for discount?' },
  { id: 4, question: 'Others' },
];
const ArtistWhyCancel = props => {
  const styles = makeStyle(theme)
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


