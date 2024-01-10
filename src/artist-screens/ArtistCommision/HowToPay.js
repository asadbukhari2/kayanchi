import { Text, Image, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Button, Header } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fonts, useTheme } from '../../utils/theme';
import { heightToDp } from '../../utils/Dimensions';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import { GET_ARTIST_COMMISSION } from '../../redux/actions';
import makeStyle from './artistCommisionStyles/howToPlay.style';

const theme = useTheme();

const HowToPay = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);
  const [commission, setCommission] = useState({ comission: '', level: '' });
const styles = makeStyle(theme)
  useEffect(() => {
    fetchCommission();
  }, []);

  const fetchCommission = async () => {
    setLoading(true);
    try {
      const response = await GET_ARTIST_COMMISSION();
      setCommission(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header backBtn />
      <Text style={styles.heading}>
        How To <Text style={{ color: theme.primary }}>Pay?</Text>
      </Text>
      <Text style={styles.text}>
        There are three level of warnings: Green, Yellow, Red where red is a critical warning. This is how it looks.
      </Text>

      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
        <Text style={styles.heading2}>Pending Kaynchi’s commission</Text>
        <Image source={require('../../assets/information.png')} style={{ height: 20, width: 20, marginLeft: 12 }} />
      </View>
      <Text style={{ color: theme.greyText, fontSize: 14 }}>Try to stay in green</Text>
      {!loading && commission.level.toLowerCase() === 'yellow' ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginVertical: 12,
          }}>
          <LinearGradient
            colors={['green', 'yellow', 'red']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            locations={[0, 0.5, 1]}
            style={{ width: '100%', borderRadius: 50 }}>
            <View style={{ width: '100%', height: 11 }} />
          </LinearGradient>

          <View style={styles.arrowYellow} />
        </View>
      ) : commission.level.toLowerCase() === 'green' ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 12,
          }}>
          <LinearGradient
            colors={['green', 'yellow', 'red']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            locations={[0, 0.5, 1]}
            style={{ width: '100%', borderRadius: 50 }}>
            <View style={{ width: '100%', height: 11 }} />
          </LinearGradient>

          <View style={styles.arrowGreen} />
        </View>
      ) : commission.level.toLowerCase() === 'red' ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'flex-end',
            marginVertical: 12,
          }}>
          <LinearGradient
            colors={['green', 'yellow', 'red']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            locations={[0, 0.5, 1]}
            style={{ width: '100%', borderRadius: 50 }}>
            <View style={{ width: '100%', height: 11 }} />
          </LinearGradient>

          <View style={styles.arrowRed} />
        </View>
      ) : null}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
        <SimpleLineIcons name="fire" size={30} color={theme.greyText} />
        <Entypo name="emoji-happy" size={30} color={theme.greyText} />
        <Entypo name="emoji-sad" size={30} color={theme.greyText} />
      </View>

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

export default HowToPay;
