import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';
import MultiButton from '../../components/MultiButton';
import VerticalStepIndicator from '../../components/VerticalStepIndicator';

import { getOrderTimeline, startGrooming } from '../../redux/actions';
import SimpleOrderCard from '../../components/SimpleOrderCard';
import RatingModal from '../../components/RatingModal';
import { useSelector } from 'react-redux';
import Map from '../../components/MapView';
import makeStyle from './artistTimeline.styles';

const contact = require('../../assets/contact.png');

const theme = useTheme();

const ArtistTimeline = props => {
  const [loading, setLoading] = useState(true);
  const [timeline, setTimeline] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
const styles = makeStyle(theme)
  const order = props.route.params;
  const { timlineType } = props.route.params;

  const { name } = useSelector(state => state.auth.user);

  const GroomingHandler = async () => {
    const isDone = await startGrooming(order.order.id, '31.5497', '74.3436', '31.5497', '74.3436');
    if (isDone) {
      props.navigation.navigate('ArtistOrderStack', { screen: 'ArtistGrooming', params: order });
    }
  };

  const fetchTimeline = _ => {
    getOrderTimeline(_)
      .then(res => {
        setTimeline(res.timeline);
        setLoading(false);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchTimeline(order.order.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleHelp = () => {
    props.navigation.navigate('ArtistProfileStack', { screen: 'ArtistHelp' });
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
          <View style={{ marginLeft: 0 }}>
            <Header backBtn text="help?" onPress={handleHelp} titleStyle={styles.help} />
          </View>
        </View>

        <Text style={styles.heading}>Timeline</Text>

        <SimpleOrderCard order={order} type={timlineType} />

        <View style={styles.separator} />

        {loading ? (
          <Text style={{ alignSelf: 'center', marginTop: 15 }}>Loading</Text>
        ) : (
          <VerticalStepIndicator
            data={timeline}
            orderDate={order.order?.date + 'T' + order.order?.booking_slot?.start_time}
            timeToReach={order.order?.time_to_reach}
            timlineType={timlineType}
          />
        )}

        {timlineType === 'active' && (
          <>
            <Map />
            <Text style={styles.textCenter}>You can start grooming once you’ve reached your client’s location.</Text>

            <View style={styles.indicatorView}>
              <View style={styles.row}>
                <MultiButton
                  title="Start Grooming"
                  btnStyle={{ backgroundColor: '#84668C' }}
                  onPress={GroomingHandler}
                />
                <MultiButton title="Contact client" image={contact} btnStyle={{ backgroundColor: '#668C6A' }} />
              </View>
            </View>
          </>
        )}
        {timlineType === 'finished' && (
          <View>
            <View style={styles.leftBar} />
            <View style={styles.ratingModal}>
              <View style={styles.separator} />
              <Text style={{ color: '#67718C', fontFamily: fonts.robo_med }}>Artist hygiene & cleanliness</Text>
              <RatingModal selectedRating={selectedRating} handleRating={setSelectedRating} />
              <Text style={{ color: '#67718C', fontFamily: fonts.robo_med }}>Service as described</Text>
              <RatingModal selectedRating={selectedRating} handleRating={setSelectedRating} />
              <Text style={{ color: '#67718C', fontFamily: fonts.robo_med }}>Would recommend</Text>
              <RatingModal selectedRating={selectedRating} handleRating={setSelectedRating} />
              <View>
                <Text style={{ color: theme.greyText, marginTop: 24 }}>
                  We loved the service {name} provided, it was an absolute delight to see how clean and professional her
                  work is. Will order again!
                </Text>
              </View>
            </View>
            <View style={styles.separator} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistTimeline;


