import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { heightToDp } from '../../utils/Dimensions';
import { Button } from '../../components';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from '../../utils/theme';
import { useNavigation } from '@react-navigation/native';
import SimpleOrderCard from '../../components/SimpleOrderCard';
import { rateConsumer } from '../../redux/actions';
import makeStyle from './artistGroomingDone.styles';

const grooming = require('../../assets/groomingdone.png');

export default function ArtistGroomingDone(props) {
  const theme = useTheme();
  const styles = makeStyle(theme);
  const [modalVisible, setModalVisible] = useState(true);
  const [selectedRating, setSelectedRating] = useState(null);
  const navigation = useNavigation();

  const order = props.route.params;

  const handleRateClient = async rating => {
    setSelectedRating(rating);
    const res = await rateConsumer({
      order_id: order.order.id,
      consumer_id: order.order.consumer.id,
      rating: rating,
    });

    if (res) {
      setModalVisible(false);
    }
  };

  const groomingDoneHandler = () => {
    navigation.navigate('ArtistHomeStack');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image source={grooming} style={styles.image} />
        </View>
        <View>
          <Text style={styles.heading}>Grooming done</Text>
          <Text style={{ color: '#67718C', textAlign: 'center', marginBottom: 10 }}>
            Great work! Off to the next one!
          </Text>
        </View>

        <SimpleOrderCard order={order} />
        <Button
          title="Continue to Orders"
          btnStyle={{ marginVertical: 24 }}
          onPress={() => navigation.navigate('ArtistOrders')}
        />
      </ScrollView>

      <Modal
        coverScreen={false}
        isVisible={modalVisible}
        style={{ flex: 1, margin: 0, justifyContent: 'flex-end' }}
        onSwipeComplete={() => setModalVisible(!modalVisible)}
        swipeDirection={['down']}>
        <View style={styles.modalMainView}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setModalVisible(false)}
            style={{ padding: heightToDp(4.5), position: 'absolute', right: 0 }}>
            <Feather
              name={'x'}
              style={{ fontSize: 20, color: theme.backIcon, backgroundColor: '#ddd', borderRadius: 50, padding: 3 }}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Rate This client</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {[1, 2, 3, 4, 5].map(rating => (
              <TouchableOpacity
                key={rating}
                style={[styles.ratingButton, selectedRating === rating && styles.selectedRating]}
                onPress={() => handleRateClient(rating)}>
                <Icon
                  name={selectedRating >= rating ? 'star' : 'star-o'}
                  size={30}
                  color={selectedRating >= rating ? '#FF9D2B' : 'gray'}
                />
              </TouchableOpacity>
            ))}
          </View>
          {selectedRating !== null && <Text style={styles.selectedRatingText}>{selectedRating}.0</Text>}
          <View style={styles.btnTxt}>
            <Button title="Back to home" onPress={groomingDoneHandler} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
