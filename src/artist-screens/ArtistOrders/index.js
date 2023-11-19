import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { useTheme, fonts } from '../../utils/theme';

import OrderCard from '../../components/OrderCard';
import { useNavigation } from '@react-navigation/native';
const carBrown = require('../../assets/car_brown.png');
const host_green = require('../../assets/host_green.png');

const theme = useTheme();

const orders = [
  {
    name: 'John Doe',
    serviceCost: 30000,
    statusOrder: 'Active',
    services: ['3x Foot Massage', 'Haircut', 'Manicure'],
    salonAddress: 'NOrth Nazimabad',
    imageLink: carBrown,
  },
  {
    name: 'Jane Smith',
    serviceCost: 25000,
    statusOrder: 'Active',
    services: ['1x Facial', 'Pedicure'],
    salonAddress: 'NOrth Nazimabad',
    arrivalTime: '30-40 mins',
    imageLink: host_green,
  },
  {
    name: 'Doe',
    serviceCost: 30000,
    statusOrder: 'New',
    services: ['3x Foot Massage', 'Haircut', 'Manicure'],
    salonAddress: 'NOrth Nazimabad',
    imageLink: carBrown,
  },
  {
    name: 'Jane',
    serviceCost: 25000,
    statusOrder: 'Completed',
    services: ['1x Facial', 'Pedicure'],
    salonAddress: 'NOrth Nazimabad',
    arrivalTime: '30-40 mins',
    imageLink: host_green,
  },
  {
    name: 'Doe Joe',
    serviceCost: 30000,
    statusOrder: 'Completed',
    services: ['3x Foot Massage', 'Haircut', 'Manicure'],
    salonAddress: 'NOrth Nazimabad',
    imageLink: carBrown,
  },
  {
    name: 'Jane Mr',
    statusOrder: 'Cancelled',
    serviceCost: 25000,
    services: ['1x Facial', 'Pedicure'],
    salonAddress: 'NOrth Nazimabad',
    arrivalTime: '30-40 mins',
    imageLink: host_green,
    status: 'Cancelled',
    cancelReason: ' Order Cancelled by customer service',
  },
];
const ArtistOrders = () => {
  const [name, setName] = useState('');
  const [activeTab, setActiveTab] = useState('New');
  const [activeOrders, setActiveOrders] = useState([]);
  const [newOrders, setNewOrders] = useState([]);
  const [cancelledOrders, setCancelledOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [displayedOrders, setDisplayedOrders] = useState([]);
  const navigation = useNavigation();
  console.log('display', displayedOrders);

  useEffect(() => {
    let isMounted = true;

    const active = orders.filter(order => order.statusOrder === 'Active');
    const newOrder = orders.filter(order => order.statusOrder === 'New');
    const completed = orders.filter(order => order.statusOrder === 'Completed');
    const cancelled = orders.filter(order => order.statusOrder === 'Cancelled');

    setActiveOrders(active);
    setCompletedOrders(completed);
    setCancelledOrders(cancelled);
    setNewOrders(newOrder);
    if (isMounted) {
      // Update the state only if the component is still mounted
      setActiveOrders(active);
      setCompletedOrders(completed);
      setCancelledOrders(cancelled);
      setNewOrders(newOrder);

      if (activeTab === 'Active') {
        setDisplayedOrders(active);
      } else if (activeTab === 'Completed') {
        setDisplayedOrders(completed);
      } else if (activeTab === 'New') {
        setDisplayedOrders(newOrder);
      } else if (activeTab === 'Cancelled') {
        setDisplayedOrders(cancelled);
      }
    }

    return () => {
      // Cleanup function: Mark the component as unmounted when it's being unmounted
      isMounted = false;
    };
  }, [activeTab]);

  const handleTabChange = tab => {
    setActiveTab(tab);

    if (tab === 'Active') {
      setDisplayedOrders(activeOrders);
    } else if (tab === 'Completed') {
      setDisplayedOrders(completedOrders);
    } else {
      setDisplayedOrders([]);
    }
  };

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
          {/* <Image source={back} /> */}
          <View style={{ marginLeft: 0 }}>
            <Header backBtn />
          </View>
        </View>

        <View>
          <Text style={styles.heading}>My Orders </Text>
        </View>

        <View style={styles.btnContainer2}>
          {/* // * Check it thoroughly after API integration */}
          <TouchableOpacity onPress={() => handleTabChange('New')}>
            <Text style={[styles.tabText, activeTab === 'New' && styles.activeTab]}>New</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabChange('Active')}>
            <Text style={[styles.tabText, activeTab === 'Active' && styles.activeTab]}>Active</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabChange('Completed')}>
            <Text style={[styles.tabText, activeTab === 'Completed' && styles.activeTab]}>Completed</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabChange('Cancelled')}>
            <Text style={[styles.tabText, activeTab === 'Cancelled' && styles.activeTab]}>Cancelled</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
          <View>
            <TouchableOpacity>
              <Text style={styles.button}>On-Demand</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Text
                style={[
                  styles.button,
                  {
                    color: '#008274',
                    borderColor: '#008274',
                    paddingHorizontal: 10,
                  },
                ]}>
                Booking
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          {displayedOrders.map((order, index) => (
            <OrderCard key={index} order={order} navigation={navigation} />
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
    fontWeight: fonts.robo_bold,
    paddingVertical: 10,
  },
  button: {
    color: '#9A9A9A',
    borderColor: '#9A9A9A',
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
