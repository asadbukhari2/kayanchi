import { Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Button, Header } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fonts, useTheme } from '../../utils/theme';
import { heightToDp } from '../../utils/Dimensions';
const theme = useTheme();
const HowToPay = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Header backBtn />
      <Text style={styles.heading}>
        How To <Text style={{ color: theme.primary }}>Pay?</Text>
      </Text>
      <Text style={styles.text}>
        There are three level of warnings: Green, Yellow, Red where red is a critical warning. This is how it looks.
      </Text>

      <Image
        source={require('../../assets/commission2.png')}
        resizeMode="contain"
        style={{ width: '100%', marginVertical: 16, height: 150 }}
      />

      <Text style={styles.heading2}>Each level has a maximum cap as per your independent selling price.</Text>
      <Text style={styles.para}>
        <Text style={styles.green}>Green: </Text> Acceptable credit range, our recommendation!
      </Text>
      <Text style={styles.para}>
        <Text style={styles.yellow}>Yellow: </Text> Kaynchi will send a soft reminder via email & SMS to clear dues.
      </Text>
      <Text style={styles.para}>
        <Text style={styles.red}>Red: </Text> You will be notified via email & SMS of account suspension risk if dues
        aren't cleared on the Red money cap.
      </Text>
      <Button title="Go back home" onPress={() => navigation.navigate('ArtistHome')} btnStyle={styles.btn} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
  },
  heading: {
    fontSize: 40,
    fontFamily: fonts.hk_bold,
    color: '#0F2851',
  },
  text: {
    fontSize: 16,
    marginVertical: 12,
  },
  heading2: {
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 12,
  },
  green: {
    color: 'green',
  },
  yellow: {
    color: 'orange',
  },
  red: {
    color: 'red',
  },
  para: {
    marginVertical: 6,
    fontSize: 16,
  },
  btn: {
    marginTop: 40,
    position: 'absolute',
    bottom: heightToDp(5.5),
  },
});
export default HowToPay;
