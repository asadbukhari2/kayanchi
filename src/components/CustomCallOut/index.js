import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import imageIcon from '../../assets/dummyHome.png';
import { fonts } from '../../utils/theme';
const CustomCallout = ({ title, description, image }) => {
  console.log('image', image);
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        {/* <Image source={image} style={{height: 50, width: 50}} /> */}
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 8,
  },
  textContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.robo_bold,
    // fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#888',
  },
});

export default CustomCallout;
