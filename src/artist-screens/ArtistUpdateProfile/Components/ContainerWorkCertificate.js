import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import { widthToDp, heightToDp, width } from '../../../utils/Dimensions';

import { fonts, useTheme } from '../../../utils/theme';
import moment from 'moment';
import makeStyle from './styles/containerWorkCretificate.styles';
const AddMore = require('../../../assets/addMore.png');
const theme = useTheme()
const ContainerWorkCertificate = ({ as, imageSource, title, data = [], toggleEditModal, toggleModal }) => {
  function calculateTimePeriod(start, end) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const styles = makeStyle(theme)
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


