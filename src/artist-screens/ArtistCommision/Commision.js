import { Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Header } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { fonts, useTheme } from '../../utils/theme';
import { heightToDp } from '../../utils/Dimensions';
import makeStyle from './artistCommisionStyles/commision.style';

const theme = useTheme();

const Commision = () => {
  const navigation = useNavigation();
  const styles = makeStyle(theme)
  return (
    <SafeAreaView style={styles.container}>
      <Header backBtn />
      <ScrollView style={styles.container2}>
        <Text style={styles.heading}>Kaynchi's Commission</Text>
        <Text style={styles.text}>On every successful order, Kaynchi receives a commission of 20%.</Text>
        <Text style={styles.text}>For repeat orders, we will charge 15% from the second order.</Text>
        <Text style={styles.text}>We want you to grow with us.</Text>
        <Image
          source={require('../../assets/commission.png')}
          resizeMode="contain"
          style={{ alignSelf: 'center', marginVertical: 12 }}
        />
        <Button title="Continue" onPress={() => navigation.navigate('ArtistHowToPay')} btnStyle={styles.btn} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Commision;
