import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../components';
import { heightToDp } from '../utils/Dimensions';
import { useTheme } from '../utils/theme';
import { useNavigation } from '@react-navigation/native';

const theme = useTheme();
const StartUp = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.main}>
      <Image source={require('../assets/logoStart.png')} resizeMode="contain" style={styles.logo} />
      <Text style={styles.heading}>Grooming for Everyone</Text>
      <Image source={require('../assets/startUpPeople.png')} resizeMode="contain" style={styles.img} />
      <Button
        title="Get Started"
        btnStyle={[styles.whiteBtn, { marginTop: heightToDp(4.5) }]}
        titleStyle={styles.blackText}
        imageStyle={styles.iconStyles}
        onPress={() => navigation.navigate('InitScreen')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#8D6997',
  },
  img: {
    width: '100%',
    bottom: 98,
  },
  heading: {
    fontSize: 36,
    color: '#fff',
    fontWeight: '100',
    marginLeft: 32,
  },
  logo: {
    marginLeft: 24,
    width: 89,
    height: 98,
    marginTop: 32,
  },
  blackText: {
    color: '#67506D',
  },
  whiteBtn: {
    backgroundColor: theme.background,
    borderWidth: 1,
    borderColor: theme.primary,
    position: 'absolute',
    bottom: 20,
  },
});
export default StartUp;
