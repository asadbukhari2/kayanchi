import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Button } from '../../components';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import { useTheme, fonts } from '../../utils/theme';

import { RadioButton } from 'react-native-paper';

import { cancelOrder } from '../../redux/actions';
import makeStyle from './artistDisputeResolution.style';

const theme = useTheme();

const faqData = [
  { id: 1, question: 'The client is not reached yet' },
  { id: 2, question: 'Client is not picking up call' },
  { id: 3, question: 'Client is asking for discount?' },
  { id: 4, question: 'Others' },
];

const ArtistDisputeResolution = props => {
  const [message, setMessage] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState(null);
const styles = makeStyle(theme)
  const handleSubmit = () => {
    const { cancel_type, order_id } = props.route.params;

    if (selectedQuestion) {
      const issue = faqData.find(_ => _.id === selectedQuestion);

      const data = {
        issue: issue?.question,
        reason: message,
        cancel_type,
        order_id,
      };

      cancelOrder(data, () => {
        props.navigation.navigate('ArtistHelp');
      });
    }
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
          <View style={{ marginLeft: 0 }}>
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
                <RadioButton.Group onValueChange={newValue => setSelectedQuestion(newValue)} value={selectedQuestion}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text style={{ color: theme.dark }}>{item.question}</Text>
                    <RadioButton value={item.id} />
                  </View>
                </RadioButton.Group>
              </View>
            ))}
          </View>
        </View>

        {selectedQuestion !== null && (
          <View style={{ paddingHorizontal: widthToDp(4), marginVertical: 20 }}>
            <TextInput
              multiline
              placeholder="Please tell us anything that you think will help the situation for us."
              value={message}
              placeholderTextColor={theme.greyText}
              onChangeText={setMessage}
              style={styles.input}
            />
            <Text
              style={{
                color: '#29AAE2',
                textAlign: 'right',
                position: 'absolute',
                bottom: 10,
                right: 20,
              }}>
              {message.length}/200
            </Text>
          </View>
        )}

        <View style={styles.refundContainer}>
          <Text style={styles.refund}>We will try to resolve your dispute as soon as possible</Text>
        </View>

        <View style={styles.btn}>
          <Button title="Submit Request" onPress={handleSubmit} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistDisputeResolution;


