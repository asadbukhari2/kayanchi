import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Header, RadioButton, TextInput} from '../../components';
import {heightToDp, width} from '../../utils/Dimensions';
import {fonts, useTheme} from '../../utils/theme';

const theme = useTheme();

const ConsumserStatus = props => {
  const [radio, setRadio] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Status'} />
      <View style={[styles.center, {marginTop:heightToDp(2.7)}]}>
        <Text style={styles.title}>{'Are you hosting or travelling?'}</Text>
        <Text style={styles.txt}>
          {'You can always choose between travelling and hosting.'}
        </Text>
        <Text style={[styles.txt, {marginBottom:heightToDp(6.7)}]}>
          {'visit'}
          <Text style={{color: theme.primary}}>{' YOU '}</Text>{' '}
          {'from the side menu for options.'}
        </Text>
        <RadioButton
          text={"I'm travelling"}
          isSelected={radio === "I'm travelling"}
          onPress={() => setRadio("I'm travelling")}
          source={require('../../assets/travelling.png')}
        />
        <RadioButton
          text={"I'm hosting"}
          isSelected={radio === "I'm hosting"}
          onPress={() => setRadio("I'm hosting")}
          containerStyle={{marginVertical: heightToDp(4.5)}}
          source={require('../../assets/hosting.png')}
        />
        <RadioButton
          text={"I'll choose later"}
          isSelected={radio === "I'll choose later"}
          onPress={() => setRadio("I'll choose later")}
        />
      </View>
      <Button
        title={'Continue'}
        btnStyle={{position: 'absolute', bottom: heightToDp(5.5)}}
        onPress={() => props.navigation.navigate('MyTabs',{screen: 'Home'})}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.robo_reg,
    lineHeight: 28.13,
    color: theme.lightBlack,
  },
  txt: {
    fontSize: 16,
    fontFamily: fonts.robo_med,
    lineHeight: 18.75,
    color: theme.darkBlack,
    marginTop: heightToDp(4.5),
  },
  center: {
    width: width * 0.868,
    alignSelf: 'center',
  },
});

export default ConsumserStatus;
