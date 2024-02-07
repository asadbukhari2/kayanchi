import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';
import { Image } from 'react-native';
const addMore = require('../../assets/addMore.png');
const theme = useTheme();

const ImageCard = props => {
  const { name, containerStyle, imgStyle, nameStyle, onPress, isSelected, imageLink } = props;

  const [circleBackgroundColor, setCircleBackgroundColor] = useState('#E9E9E9');

  // Function to handle circle click
  const handleCircleClick = () => {
    // Toggle the background color
    setCircleBackgroundColor(prevColor => (prevColor === '#E9E9E9' ? '#FAE5FF' : '#E9E9E9'));
    // Call the onPress function if provided
    if (onPress) {
      onPress();
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handleCircleClick} // Use the new click handler
      style={[styles.container, containerStyle]}>
      <View
        style={{
          // borderWidth: isSelected ? 1 : 0,
          // borderColor: isSelected ? theme.primary : null,
          padding: heightToDp(0.5),
          borderRadius: 100,
        }}>
        <View style={[styles.img, imgStyle, { backgroundColor: circleBackgroundColor }]}>
          <Image source={{ uri: imageLink }} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
        </View>
      </View>
      <Text style={[styles.name, nameStyle]}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: heightToDp(5.5),
  },
  img: {
    height: heightToDp(26.7),
    width: widthToDp(26.7),
    backgroundColor: '#E9E9E9',
    borderRadius: heightToDp(26.7) / 2,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Ce
  },
  name: {
    fontFamily: fonts.robo_reg,
    fontSize: heightToDp(3.3),
    lineHeight: 14.06,
    color: theme.darkBlack,
    marginTop: heightToDp(4.7),
  },
});

export default ImageCard;
