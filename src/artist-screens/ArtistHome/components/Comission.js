import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { fonts, useTheme } from '../../../utils/theme';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { widthToDp } from '../../../utils/Dimensions';
import { useNavigation } from '@react-navigation/native';
import { GET_ARTIST_COMMISSION } from '../../../redux/actions';
const theme = useTheme();

const Comission = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [commission, setCommission] = useState({ comission: '', level: '' });

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
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.heading}>Kaynchi's Comission</Text>
          <Text style={styles.beta}>BETA</Text>
          <TouchableOpacity onPress={() => navigation.navigate('ArtistCommision')}>
            <Image source={require('../../../assets/information.png')} style={{ height: 20, width: 20 }} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ color: theme.greyText, fontSize: 16 }}>{commission?.comission ?? 'loading'}</Text>
        </View>
      </View>
      <Text style={{ color: theme.greyText, marginTop: 5 }}>Coming soon!</Text>
      {!loading && commission && commission?.level.toLowerCase() === 'yellow' ? (
        <View
          style={{
            flex: 1,
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
      ) : commission?.level.toLowerCase() === 'green' ? (
        <View
          style={{
            flex: 1,
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
      ) : commission?.level.toLowerCase() === 'red' ? (
        <View
          style={{
            flex: 1,
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
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 }}>
        <SimpleLineIcons name="fire" size={30} color={theme.greyText} />
        <Entypo name="emoji-happy" size={30} color={theme.greyText} />
        <Entypo name="emoji-sad" size={30} color={theme.greyText} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: theme.darkModeText,
    fontSize: 16,
    fontFamily: fonts.hk_bold,
  },
  container: {
    marginHorizontal: widthToDp(2),
    padding: 10,
  },
  beta: {
    color: theme.greyText,
    fontSize: 12,
    marginHorizontal: 8,
  },
  arrowYellow: {
    top: 8,
    left: 7,
    width: 10,
    height: 10,
    borderBottomWidth: 15,
    borderLeftWidth: 15,
    borderLeftColor: 'transparent',
    borderBottomColor: 'yellow',
    transform: [{ rotate: '-135deg' }],
  },
  arrowGreen: {
    top: 8,
    width: 10,
    height: 8,
    borderBottomWidth: 15,
    borderLeftWidth: 15,
    borderLeftColor: 'transparent',
    borderBottomColor: 'green',
    transform: [{ rotate: '-135deg' }],
  },
  arrowRed: {
    top: 8,
    width: 10,
    height: 8,
    borderBottomWidth: 15,
    borderLeftWidth: 15,
    borderLeftColor: 'transparent',
    borderBottomColor: 'red',
    transform: [{ rotate: '-135deg' }],
    right: 7,
  },
});

export default Comission;
