/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { useTheme, fonts } from '../../utils/theme';

import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import ListingCardButton from '../../components/ListingCardButton';
import { getMyOrders } from '../../redux/actions';
import makeStyle from './artistOrders.style';

const theme = useTheme();

const ArtistOrders = () => {
  const styles = makeStyle(theme);
  const [filter, setFilter] = useState('');
  const [activeTab, setActiveTab] = useState('new');
  const [newOrders, setNewOrders] = useState([]);
  const [cancelledOrders, setCancelledOrders] = useState([]);
  const [activeOrders, setActiveOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [displayedOrders, setDisplayedOrders] = useState([]);

  const dispatch = useDispatch();

  const { waiting, accepted, completed, cancelled } = useSelector(state => state.common);
  console.log(completed, 'this is the states in the artists order');
  useEffect(() => {
    const focusHandler = navigation.addListener('focus', () => {
      dispatch(getMyOrders());
    });
    return focusHandler;
  }, [navigation]);

  useEffect(() => {
    let isMounted = true;

    setActiveOrders(accepted);
    setCompletedOrders(completed);
    setCancelledOrders(cancelled);
    setNewOrders(waiting);

    if (isMounted) {
      setActiveOrders(accepted);
      setCompletedOrders(completed);
      setCancelledOrders(cancelled);
      setNewOrders(waiting);

      if (activeTab === 'new') {
        setDisplayedOrders(newOrders);
      } else if (activeTab === 'completed') {
        setDisplayedOrders(completedOrders);
      } else if (activeTab === 'active') {
        setDisplayedOrders(activeOrders);
      } else if (activeTab === 'cancelled') {
        setDisplayedOrders(cancelledOrders);
      }
    }

    return () => {
      isMounted = false;
    };
  }, [activeTab, filter]);
  const convertObjectsOfArrayToArray = data => {
    const keys = Object.keys(data);
    console.log('this is the keys in the data', keys);
    let newArray = keys.map(key => {
      return data[key];
    });
    // Flatten the array of arrays into a single array
    const flatArray = newArray.flat();
    return flatArray;
  };
  const handleTabChange = tab => {
    setActiveTab(tab);
    setFilter('');
    if (tab === 'active') {
      setDisplayedOrders(activeOrders);
    } else if (tab === 'completed') {
      setDisplayedOrders(completedOrders);
    } else if (tab === 'cancelled') {
      setDisplayedOrders(cancelledOrders);
    } else if (tab === 'new') {
      setDisplayedOrders(newOrders);
    } else {
      setDisplayedOrders([]);
    }
  };

  const handleFilterPress = e => {
    setFilter(e);
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: widthToDp(5),
            width: widthToDp(90),
          }}>
          <View style={{ marginLeft: 0 }}>
            <Header backBtn />
          </View>
        </View>

        <View>
          <Text style={styles.heading}>My Orders </Text>
        </View>

        <View style={styles.btnContainer2}>
          <TouchableOpacity onPress={() => handleTabChange('new')}>
            <Text style={[styles.tabText, activeTab === 'new' && styles.activeTab]}>New</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabChange('active')}>
            <Text style={[styles.tabText, activeTab === 'active' && styles.activeTab]}>Active</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabChange('completed')}>
            <Text style={[styles.tabText, activeTab === 'completed' && styles.activeTab]}>Completed</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabChange('cancelled')}>
            <Text style={[styles.tabText, activeTab === 'cancelled' && styles.activeTab]}>Cancelled</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={() => {
              handleFilterPress('Booking');
            }}>
            <Text
              style={[
                styles.button,
                {
                  color: filter === 'Booking' ? '#008274' : theme.greyText,
                  borderColor: filter === 'Booking' ? '#008274' : theme.greyText,
                },
              ]}>
              Booking
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleFilterPress('On-Demand');
            }}>
            <Text
              style={[
                styles.button,
                {
                  color: filter === 'On-Demand' ? '#A77246' : theme.greyText,
                  borderColor: filter === 'On-Demand' ? '#A77246' : theme.greyText,
                },
              ]}>
              On Demand
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          {filter.length > 0
            ? displayedOrders[filter]?.map((order, index) => (
                <ListingCardButton key={index} order={order} navigation={navigation} />
              ))
            : convertObjectsOfArrayToArray(displayedOrders)?.map((order, index) => (
                <ListingCardButton key={index} order={order} navigation={navigation} />
              ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistOrders;
