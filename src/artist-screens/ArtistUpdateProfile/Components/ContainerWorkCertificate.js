import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import { widthToDp, heightToDp, width } from '../../../utils/Dimensions';

import { fonts } from '../../../utils/theme';
import moment from 'moment';
const AddMore = require('../../../assets/addMore.png');

const ContainerWorkCertificate = ({ as, imageSource, title, data = [], toggleEditModal, toggleModal }) => {
  function calculateTimePeriod(start, end) {
    const startDate = new Date(start);
    const endDate = new Date(end);

    const totalMonths =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    return `${years} y ${months} m`;
  }

  return (
    <View style={styles.Diploma}>
      <View style={styles.gigContainer}>
        <Text style={styles.heading}>{title}</Text>
        <TouchableOpacity onPress={toggleModal}>
          <Image source={AddMore} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
      </View>

      <View style={styles.separator} />

      {as === 1 &&
        data.map(_ => (
          <View style={styles.DiplomaConatiner} key={_.id}>
            <Image source={_.image_url || imageSource} style={{ width: 50, height: 50, marginLeft: 10 }} />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.subheading}>{_.name}</Text>
              <Text
                style={{
                  color: '#333333',
                  fontSize: 14,
                  fontFamily: fonts.robo_reg,
                }}>
                {_.organization}
              </Text>
              <Text
                style={{
                  color: '#67718C',
                  fontSize: 14,
                  fontFamily: fonts.robo_reg,
                }}>
                Issued {moment(_.issue_date).format('MMM YYYY')}
              </Text>
              {/* <Text>{country}</Text> */}
            </View>
            <View style={{ marginRight: widthToDp(5) }}>
              <Feather style={{ color: '#193356', fontSize: 16 }} name="edit-2" onPress={() => toggleEditModal(_)} />
            </View>
          </View>
        ))}
      {as === 2 &&
        data.map(_ => (
          <View style={styles.DiplomaConatiner} key={_.id}>
            <Image source={_.image_url || imageSource} style={{ width: 50, height: 50, marginLeft: 10 }} />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.subheading}>{_.job_title}</Text>
              <Text
                style={{
                  color: '#333333',
                  fontSize: 14,
                  fontFamily: fonts.robo_reg,
                }}>
                {_.company_name}
              </Text>
              <Text
                style={{
                  color: '#67718C',
                  fontSize: 14,
                  fontFamily: fonts.robo_reg,
                }}>
                {moment(_.start_date).format('MMM YYYY')}
                {' - '}
                {_.currently_working ? 'Present' : moment(_.end_date).format('MMM YYYY')}{' '}
                <Text style={{ color: '#29AAE2' }}> {calculateTimePeriod(_.start_date, _.end_date)}</Text>
              </Text>
              <Text>{_.location}</Text>
            </View>
            <View style={{ marginRight: widthToDp(5) }}>
              <Feather style={{ color: '#193356', fontSize: 16 }} name="edit-2" onPress={() => toggleEditModal(_)} />
            </View>
          </View>
        ))}
    </View>
  );
};

export default ContainerWorkCertificate;

const styles = StyleSheet.create({
  Diploma: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: widthToDp(5),
    marginVertical: heightToDp(4),
    borderRadius: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: widthToDp(3),
    marginVertical: 5,
  },
  titleContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  titleContainer: {
    marginTop: 10,
    backgroundColor: 'white',
    marginHorizontal: widthToDp(4),
    paddingVertical: 10,
    borderRadius: 10,
  },
  limitText: {
    color: '#29AAE2',
    textAlign: 'right',
    paddingRight: 15,
    fontFamily: fonts.robo_reg,
  },
  title: { paddingLeft: 10, flex: 1 },
  separator: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 5,
  },

  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  datePicker: {
    width: 200,
    marginTop: 10,
  },
  gigContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingRight: widthToDp(5),
    marginHorizontal: widthToDp(3),
  },
  heading: {
    fontSize: 18,
    color: '#2F3A58',
    fontFamily: fonts.hk_bold,
    // paddingHorizontal: widthToDp(4),
    paddingVertical: heightToDp(3),
  },
  headingModal: {
    fontSize: 34,
    color: '#2F3A58',
    fontFamily: fonts.hk_bold,
    paddingHorizontal: widthToDp(4),
    // paddingHorizontal: widthToDp(4),
    paddingVertical: heightToDp(3),
  },
  subheading: { fontSize: 16, color: '#333333', fontFamily: fonts.robo_med },
  subheading2: {
    fontSize: 16,
    paddingHorizontal: widthToDp(4),
    color: '#67718C',
    fontFamily: fonts.robo_reg,
    marginRight: widthToDp(15),
  },
  DiplomaConatiner: {
    width: width * 0.91,
    flexDirection: 'row',
    paddingVertical: 10,
  },
  genRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.91,
    alignSelf: 'center',

    marginTop: heightToDp(4.5),
  },
  genView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.91,
    alignSelf: 'center',
    marginTop: heightToDp(4.5),
    color: '#ffffff',
  },
  genTxt: { color: '#ffffff', marginLeft: 6 },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  genBtn: {
    // flex: 1,
    width: widthToDp(27.5),
    height: heightToDp(9.7),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    color: '#ffffff',
  },
  welcomeTxt: {
    fontSize: 16,
    fontFamily: fonts.robo_med,
    // fontWeight: 'bold',
    paddingHorizontal: widthToDp(4),
    color: '#747474',
  },
  subheading3: { color: '#67718C', paddingHorizontal: widthToDp(4) },
});
