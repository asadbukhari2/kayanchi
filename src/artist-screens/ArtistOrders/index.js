/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { useTheme, fonts } from '../../utils/theme';

// import OrderCard from '../../components/OrderCard';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import ListingCardButton from '../../components/ListingCardButton';
import { getMyOrders } from '../../redux/actions';

const theme = useTheme();

const ArtistOrders = () => {
  const [filter, setFilter] = useState('Booking');
  const [activeTab, setActiveTab] = useState('new');
  const [newOrders, setNewOrders] = useState([]);
  const [cancelledOrders, setCancelledOrders] = useState([]);
  const [activeOrders, setActiveOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [displayedOrders, setDisplayedOrders] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyOrders());
  }, []);

  const { waiting, accepted, completed, cancelled } = useSelector(state => state.common);

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
        setDisplayedOrders(waiting);
      } else if (activeTab === 'completed') {
        setDisplayedOrders(completed);
      } else if (activeTab === 'active') {
        setDisplayedOrders(activeOrders);
      } else if (activeTab === 'cancelled') {
        setDisplayedOrders(cancelled);
      }
    }

    return () => {
      isMounted = false;
    };
  }, [activeTab, filter]);

  const handleTabChange = tab => {
    setActiveTab(tab);
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
          {displayedOrders[filter]?.map((order, index) => (
            <ListingCardButton key={index} order={order} navigation={navigation} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistOrders;

const styles = StyleSheet.create({
  heading: {
    color: '#193356',
    fontSize: 40,
    fontFamily: fonts.hk_bold,
    marginLeft: widthToDp(4),
  },
  btnContainer: {
    flexDirection: 'row',
    marginHorizontal: widthToDp(5),
    marginVertical: 10,
  },
  btnContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: widthToDp(5),
    marginVertical: 8,
    backgroundColor: 'white',
  },
  tabText: {
    fontSize: 16,
    color: 'black',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  activeTab: {
    backgroundColor: theme.primary,
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  button: {
    fontFamily: fonts.robo_reg,
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 20,
    fontSize: 14,
    marginRight: 10,
  },
  orderStatus: {
    backgroundColor: '#668C6A',
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: widthToDp(25),
    borderRadius: 20,
    marginTop: 15,
    marginBottom: 5,
  },
  subheading: {
    fontSize: 12,
    color: '#193356',
    marginRight: 10,
    width: widthToDp(30),
  },
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingTop: heightToDp(2),
  },
  orderContainer: {
    backgroundColor: 'white',
    width: width * 0.91,
    marginHorizontal: widthToDp(5),
    marginBottom: 20,
    // width: (width * 0.91) / 2,
    paddingVertical: heightToDp(5),
    paddingHorizontal: widthToDp(1),
    borderRadius: 10,
  },
  orderDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  OrderImage: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
  latestbutton: {
    backgroundColor: '#a77246',
    padding: 5,
    color: 'white',
    fontSize: 12,
    textTransform: 'uppercase',
    paddingLeft: widthToDp(3),
    paddingRight: widthToDp(3),
    borderRadius: 50,
  },
  headingName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textBold: {
    fontWeight: 'bold',
  },
});
