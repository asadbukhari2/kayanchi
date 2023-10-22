import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fonts, useTheme } from '../../utils/theme';
import Entypo from 'react-native-vector-icons/Entypo';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
const theme = useTheme();

const PromotionCard = props => {
  const { title, dateFrom, dateTo, price } = props;
  return (
    <View
      style={{
        width: 216,
        height: 199,
        backgroundColor: theme.background,
        borderRadius: 10,
        marginRight: 8,
      }}>
      <View
        style={{
          width: '100%',
          height: 132,
          backgroundColor: theme.backIcon,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}></View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 4,
        }}>
        <View>
          <Text
            style={{
              fontFamily: fonts.robo_reg,
              marginLeft: 8,
              marginVertical: 8,
              fontSize: 16,
              lineHeight: 18.75,
              color: '#2F3A58',
            }}>
            {title}
          </Text>
          <Text
            style={{
              marginLeft: 8,
              fontFamily: fonts.hk_bold,
              fontSize: 18,
              lineHeight: 16.8,
              color: theme.linkTxt,
            }}>
            {price}
          </Text>
        </View>
        {/* <Text style={{marginLeft:8,fontFamily:fonts.robo_reg,fontSize:14,lineHeight:16.41,color:theme.backIcon}}>{dateFrom}{' - '}{dateTo}</Text> */}
        <Entypo name={'plus'} style={[styles.icon]} />
      </View>
    </View>
  );
};

export default PromotionCard;

const styles = StyleSheet.create({
  icon: {
    fontSize: heightToDp(5),
    color: theme.background,
    backgroundColor: '#84668C',
    paddingVertical: widthToDp(3.1),
    paddingHorizontal: 8,
    borderRadius: 10,
    marginRight: 8,
  },
});
