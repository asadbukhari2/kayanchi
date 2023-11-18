import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';
import Feather from 'react-native-vector-icons/Feather';

const theme = useTheme();

const InputText = props => {
  const {
    value,
    inputBoxStyle,
    input,
    secured,
    focused,
    stepCount,
    mainLabel,
    subLabel,
    containerStyle,
    mainLabelStyle,
    disable,
    placeholder,
    multiline,
    onInputPress,
    inputMarginTop,
    keyboardType,
    removeInput,
    underlineColorAndroid,
    underlineColorIOS,
    required,
    label,
    icon,
  } = props;

  const [isSecured, setIsSecured] = useState(secured);

  return (
    <View style={[styles.container, containerStyle]}>
      {stepCount && <Text style={styles.step}>STEP {stepCount} OF 2</Text>}
      {mainLabel && <Text style={[styles.labelText, mainLabelStyle]}>{mainLabel}</Text>}
      {subLabel && (
        <Text style={styles.subLabel}>
          {subLabel}{' '}
          {required && (
            <Text style={{ color: '#29AAE2', fontSize: 16, position: 'absolute', top: 7, left: 90 }}>*</Text>
          )}
        </Text>
      )}
      {label && (
        <Text style={styles.label}>
          {label}
          {required && (
            <Text style={{ color: '#29AAE2', fontSize: 16, position: 'absolute', top: 7, left: 90 }}>*</Text>
          )}
        </Text>
      )}
      {!removeInput && (
        <View style={[{ flexDirection: 'row', marginTop: heightToDp(2.5) }, inputMarginTop]}>
          {input ? (
            <TextInput
              autoFocus={focused}
              editable={disable ? false : true}
              value={value}
              keyboardType={keyboardType ? keyboardType : 'default'}
              placeholder={placeholder}
              placeholderTextColor={theme.genderGrey}
              multiline={multiline}
              style={[styles.inputContainer, styles.txt, inputBoxStyle]}
              onChangeText={text => input(text)}
              secureTextEntry={isSecured}
              underlineColorAndroid={underlineColorAndroid}
              underlineColorIOS={underlineColorIOS}
              {...props}
            />
          ) : (
            <TouchableOpacity
              activeOpacity={1}
              onPress={onInputPress}
              style={[styles.inputContainer, { justifyContent: 'center' }]}>
              <Text style={styles.txt}>{value}</Text>
            </TouchableOpacity>
          )}
          {secured && (
            <TouchableOpacity
              onPress={() => setIsSecured(!isSecured)}
              activeOpacity={0.7}
              style={styles.secureIconView}>
              <Feather name={isSecured ? 'eye-off' : 'eye'} style={{ fontSize: 16, color: theme.backIcon }} />
            </TouchableOpacity>
          )}
          {icon && (
            <View style={styles.iconView}>
              <Feather name={icon} style={{ fontSize: 16, color: theme.backIcon }} />
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.91,
    alignSelf: 'center',
  },
  secureIconView: {
    paddingHorizontal: widthToDp(0),
    justifyContent: 'center',
    borderBottomColor: theme.inputBottom,
    borderBottomWidth: 1,
  },
  iconView: {
    justifyContent: 'center',
    borderBottomColor: theme.inputBottom,
    borderBottomWidth: 1,
  },
  inputContainer: {
    // backgroundColor: 'grey',
    flex: 1,
    borderBottomWidth: 1,
    height: heightToDp(11),
    borderBottomColor: theme.inputBottom,
  },
  txt: {
    fontSize: 16,
    fontFamily: fonts.robo_reg,
    lineHeight: 18.75,
    color: theme.inputText,
  },
  step: {
    fontSize: 14,
    fontFamily: fonts.gothic_regular,
    lineHeight: 17.17,
    color: theme.darkBlack,
    marginTop: heightToDp(4.5),
  },
  labelText: {
    fontSize: 20,
    fontFamily: fonts.hk_bold,
    lineHeight: 23.44,
    color: theme.lightBlack,
    marginTop: heightToDp(6.7),
  },
  subLabel: {
    fontSize: 14,
    lineHeight: 18.75,
    fontFamily: fonts.robo_reg,
    color: theme.darkBlack,
    marginTop: heightToDp(2.2),
  },
  label: {
    // paddingHorizontal: widthToDp(4),
    paddingTop: 15,
    color: '#747474',
    fontSize: 16,
    fontFamily: fonts.robo_med,
  },
});

export default InputText;
