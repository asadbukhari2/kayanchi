import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { fonts, useTheme } from '../../../utils/theme';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { widthToDp } from '../../../utils/Dimensions';
const theme = useTheme();
const Comission = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.heading}>Kaynchi's Comission</Text>
          <Text style={styles.beta}>BETA</Text>
          <Image source={require('../../../assets/information.png')} style={{ height: 20, width: 20 }} />
        </View>
        <View>
          <Text style={{ color: theme.greyText, fontSize: 16 }}>-15500</Text>
        </View>
      </View>
      <Text style={{ color: theme.greyText, marginTop: 5 }}>Coming soon!</Text>
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
        <View style={{ height: 8 }}>
          <View style={styles.arrow} />
        </View>
      </View>
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
  arrow: {
    width: 10,
    height: 10,
    borderBottomWidth: 15,
    borderLeftWidth: 15,
    borderBottomColor: 'green',
    borderLeftColor: 'transparent',
    transform: [{ rotate: '-135deg' }],
    position: 'absolute',
    top: 8,
    right: widthToDp(-2), // adjust this to move arrow according to number line MAX 40 to -45
    // -2 for center
  },
});

export default Comission;
