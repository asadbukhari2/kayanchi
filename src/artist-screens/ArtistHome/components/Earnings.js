import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { widthToDp } from '../../../utils/Dimensions';
import { fonts, useTheme } from '../../../utils/theme';

import { GET_ARTIST_EARNING, GET_INSIGHTS } from '../../../redux/actions/homeAction';
import { Modal } from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';

const impression = require('../../../assets/impressions.png');

const leftArrow = require('../../../assets/left.png');
const rightArrow = require('../../../assets/right.png');
const upArrow = require('../../../assets/up.png');

const theme = useTheme();

const limitOptions = [
  { title: 'Last Month', value: 30 },
  { title: 'Bi Month', value: 14 },
  { title: 'Weekly', value: 7 },
];
const typeOptions = [
  { title: 'Total', value: 0 },
  { title: 'Booking', value: 1 },
  { title: 'Hosting', value: 2 },
];

const Earning = React.memo(() => {
  const [loading, setLoading] = useState(true);
  const [limitIndex, setLimitIndex] = useState(0);
  const [type, setType] = useState(1);
  const [amount, setAmount] = useState(0);
  const [insightsData, setInsightsData] = useState([]);

  const fetchInsights = async _ => {
    setLoading(true);
    const res = await GET_ARTIST_EARNING(_);
    console.log(res);
    setAmount(res.total_earnings);
    const result = [];
    Object.entries(res).forEach(([k, v]) => {
      let key = k.split('_').join(' ');
      key = key[0].toUpperCase() + key.slice(1);

      result.push({ title: key, count: v });
    });

    setInsightsData(result);
    setLoading(false);
  };

  const handleArrowClick = direction => {
    if (direction === 'left') {
      setLimitIndex(prevIndex => Math.max(prevIndex - 1, 0));
    } else if (direction === 'right') {
      setLimitIndex(prevIndex => Math.min(prevIndex + 1, limitOptions.length - 1));
    }
  };

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedType, setSelectedType] = useState(typeOptions[0]);

  const handleTypeClick = value => {
    setSelectedType(typeOptions.find(option => option.value === value));
    setDropdownVisible(false);
  };
  console.log(type);
  useEffect(() => {
    fetchInsights(limitOptions[limitIndex].value);
  }, [limitIndex]);

  return (
    <>
      <View style={styles.EarningDetail}>
        <View>
          <Text style={[styles.heading, { marginVertical: 10 }]}>Earnings</Text>
        </View>
        <View style={styles.arrowDetail}>
          <TouchableOpacity
            disabled={limitIndex === 0}
            onPress={() => {
              handleArrowClick('left');
            }}
            style={{ padding: 5 }}>
            <Text
              style={{
                color: limitIndex !== 0 ? theme.primary : theme.greyText,
                fontSize: 16,
                fontWeight: 'bold',
                padding: 4,
              }}>
              {'<'}
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              marginHorizontal: widthToDp(5),
              color: '#0F2851',
              fontFamily: fonts.hk_medium,
            }}>
            {limitOptions[limitIndex].title}
          </Text>

          <TouchableOpacity
            disabled={limitIndex === limitOptions.length - 1}
            onPress={() => handleArrowClick('right')}
            style={{ padding: 5 }}>
            <Text
              style={{
                color: limitIndex !== limitOptions.length - 1 ? theme.primary : theme.greyText,
                fontSize: 16,
                fontWeight: 'bold',
                padding: 4,
              }}>
              {'>'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.EarningConatiner}>
        <View style={styles.hostingContainer}>
          {/* <Text style={styles.hostingHeading}>{typeOptions[type].title}</Text>
          <TouchableOpacity
            onPress={() => {
              handleTypeClick(typeOptions[type].value);
            }}>
            <Image source={upArrow} style={styles.arrow} />
          </TouchableOpacity> */}

          {dropdownVisible && (
            <FlatList
              data={typeOptions}
              contentContainerStyle={{ flexGrow: 1 }}
              keyExtractor={item => item.value.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleTypeClick(item.value)}>
                  <Text style={styles.dropdownItem}>{item.title}</Text>
                </TouchableOpacity>
              )}
              style={styles.dropdownList}
            />
          )}

          <TouchableOpacity onPress={() => setDropdownVisible(!dropdownVisible)}>
            <Text style={styles.hostingHeading}>{selectedType.title}</Text>
            <Image source={upArrow} style={styles.arrow} />
          </TouchableOpacity>
        </View>

        <View style={styles.TotalEarned}>
          <Text style={styles.EarnedAmount}>Rs {amount || 0}</Text>
          <Text style={{ textAlign: 'right', color: '#677790', fontSize: 12 }}>Total Earned</Text>
        </View>
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  EarningDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: widthToDp(5),
  },
  heading: {
    fontSize: 34,
    fontFamily: fonts.hk_bold,
    color: '#2F3A58',
  },
  arrowDetail: { flexDirection: 'row', alignItems: 'center' },
  EarningConatiner: {
    flexDirection: 'row',
    marginHorizontal: widthToDp(5),
  },
  hostingContainer: {
    backgroundColor: theme.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: widthToDp(5),
    paddingHorizontal: widthToDp(4),
    borderRadius: 10,
    marginRight: 10,
    width: widthToDp(44),
  },
  hostingHeading: {
    fontSize: 24,
    color: 'white',
    fontFamily: fonts.robo_bold,
    marginRight: 12,
  },

  TotalEarned: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: widthToDp(44),
    paddingVertical: widthToDp(7),
    paddingHorizontal: widthToDp(3),
  },
  EarnedAmount: {
    fontSize: 22,
    color: theme.primary,
    textAlign: 'right',
    fontFamily: fonts.hk_bold,
  },
  dropdownList: {
    position: 'absolute',
    top: 0, // Adjust the position as needed
    left: 80,
    width: 100,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: theme.primary,
    borderRadius: 5,
    // maxHeight: 150,
    zIndex: 99,
  },
  dropdownItem: {
    padding: 8,
    fontSize: 16,
    color: theme.greyText,
  },
});

export default Earning;
