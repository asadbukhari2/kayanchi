import React from 'react';
import { Image, Text, View } from 'react-native';
import { heightToDp, widthToDp } from '../../../utils/Dimensions';

const AvailablityAndCategoryBtn = ({ name, image }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#84668C',
        paddingVertical: heightToDp(2),
        paddingHorizontal: widthToDp(4),
        borderRadius: 20,
        marginRight: 10,
      }}>
      <Image
        source={image}
        style={{
          width: 15,
          height: 15,
          resizeMode: 'contain',
          marginRight: 5,
        }}
      />
      <Text style={{ color: 'white', fontSize: 12 }}>{name}</Text>
    </View>
  );
};

export default AvailablityAndCategoryBtn;
