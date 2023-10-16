import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AddNewBtn, Button, Header, TextInput } from '../../components';
import { heightToDp, widthToDp, width } from '../../utils/Dimensions';
import { GLOBAL_STYLES } from '../../utils/styles';
import { useTheme } from '../../utils/theme';
import easypaisa from '../../assets/jazz_cash.png';
const theme = useTheme();

const ConsumerAddJazzCash = (props) => {
  const [name, setName] = useState('');

  return (
    <SafeAreaView style={GLOBAL_STYLES.containerHome}>
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingBottom: heightToDp(30) }}
        >
          <Header backBtnGrey />
          <Text style={GLOBAL_STYLES.title}>
            {'Add JazzCash'}
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: '#67718C',
              marginLeft: widthToDp(6),
              marginRight: widthToDp(6),
              marginBottom: 9,
            }}
          >
Add your JazzCash account details          </Text>

          <TextInput
            input={(text) => setName(text)}
            placeholder={'CNIC'}
            inputBoxStyle={{
              backgroundColor: '#ebe8ec',
              borderBottomColor: '#ebe8ec',
              borderRadius: 5,
            }}
          />
          <TextInput
            input={(text) => setName(text)}
            placeholder={'Jazzcash mobile accout'}
            inputBoxStyle={{
              backgroundColor: '#ebe8ec',
              borderBottomColor: '#ebe8ec',
              borderRadius: 5,
            }}
          />
        </ScrollView>

        <View style={{ position: 'absolute', bottom: heightToDp(5), width: '100%', alignItems: 'center', justifyContent: 'center', height: 100 }}>
  <Image source={easypaisa} style={{ width: 86, height: 34, resizeMode:"contain" }} />
  <Text style={{ textAlign: 'center', marginVertical: 10 }}>All your information is kept safe and secure</Text>
  <Button title="Save"             onPress={() =>
              props.navigation.navigate('ConsumerProfileStack', {
                screen: 'ConsumerPaymentMethods',
              })
            }/>
</View>

      </View>
    </SafeAreaView>
  );
};

export default ConsumerAddJazzCash;
