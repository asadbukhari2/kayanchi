import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Header, RadioButton, TextInput } from '../../components';
import { heightToDp, width } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';
import makeStyle from './artistStatus.styles';

const theme = useTheme();

const ArtistStatus = props => {
  const [radio, setRadio] = useState(null);
  const styles = makeStyle(theme)
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Status'} />
      <View style={[styles.center, { marginTop: heightToDp(2.7) }]}>
        <Text style={styles.title}>{'Are you hosting or travelling?'}</Text>
        <Text style={styles.txt}>{'You can always choose between travelling and hosting.'}</Text>
        <Text style={[styles.txt, { marginBottom: heightToDp(6.7) }]}>
          {'visit'}
          <Text style={{ color: theme.primary }}>{' YOU '}</Text> {'from the side menu for options.'}
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
          containerStyle={{ marginVertical: heightToDp(4.5) }}
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
        btnStyle={{ position: 'absolute', bottom: heightToDp(5.5) }}
        onPress={() => props.navigation.navigate('MyTabs', { screen: 'Home' })}
      />
    </SafeAreaView>
  );
};



export default ArtistStatus;
