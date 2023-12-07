import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';
import MultiButton from '../../components/MultiButton';

const contact = require('../../assets/contact.png');
import VerticalStepIndicator from '../../components/VerticalStepIndicator';

import { getOrderTimeline, startGrooming } from '../../redux/actions';
import SimpleOrderCard from '../../components/SimpleOrderCard';
import RatingModal from '../../components/RatingModal';
import { useSelector } from 'react-redux';
import Map from '../../components/MapView';

const ArtistTimeline = props => {
  const [loading, setLoading] = useState(true);
  const [timeline, setTimeline] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);

  const { currentLocation } = useSelector(state => state.common);

  const order = props.route.params;
  const { timlineType } = props.route.params;

  const { name } = useSelector(state => state.auth.user);

  const GroomingHandler = async () => {
    const res = await startGrooming(order.order.id, 24.12312, 61.32432, 24.12312, 61.32432);
    props.navigation.navigate('ArtistOrderStack', { screen: 'ArtistGrooming', params: order });
    // if (res) {
    //   props.navigation.navigate('ArtistOrderStack', { screen: 'ArtistGrooming', params: order });
    // }
  };

  const fetchTimeline = _ => {
    getOrderTimeline(_)
      .then(res => {
        if (res.length > 0 && res?.timeline?.length > 0) {
          setTimeline(res.timeline);
          setLoading(false);
        } else {
          setLoading(false);
        }
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTimeline(order.order.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            <Header backBtn title="help?" titleStyle={styles.help} />
          </View>
        </View>

        <Text style={styles.heading}>Timeline</Text>

        <SimpleOrderCard order={order} type={timlineType} />

        <View style={styles.separator} />

        {loading ? <Text>Loading</Text> : timeline.length > 0 ? <VerticalStepIndicator data={timeline} /> : null}

        {timlineType === 'active' && (
          <>
            <Map
              data={[
                {
                  title: 'My Current Location',
                  description: 'Current Loccation',
                  lat: 31.5497,
                  long: 74.3436,
                  img: require('../../assets/Path.png'),
                },
                {
                  title: 'Millineum Mall',
                  description: 'this is millineum mall karachi',
                  lat: 31.5497,
                  long: 74.3436,
                  img: require('../../assets/logo2.png'),
                },
              ]}
            />
            <Text style={styles.textCenter}>You can start grooming once you’ve reached your client’s location.</Text>

            <View style={styles.indicatorView}>
              <View style={styles.row}>
                <MultiButton
                  // disable={true}
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
          <>
            <View style={styles.ratingModal}>
              <View style={styles.separator} />
              <Text style={{ color: '#67718C', fontFamily: fonts.robo_med }}>Artist hygiene & cleanliness</Text>
              <RatingModal selectedRating={selectedRating} handleRating={setSelectedRating} />
              <Text style={{ color: '#67718C', fontFamily: fonts.robo_med }}>Service as described</Text>
              <RatingModal selectedRating={selectedRating} handleRating={setSelectedRating} />
              <Text style={{ color: '#67718C', fontFamily: fonts.robo_med }}>Would recommend</Text>
              <RatingModal selectedRating={selectedRating} handleRating={setSelectedRating} />
              <View>
                <Text style={styles.textRating}>
                  We loved the service {name} provided, it was an absolute delight to see how clean and professional her
                  work is. Will order again!
                </Text>
              </View>
            </View>
            <View style={styles.separator} />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistTimeline;

const styles = StyleSheet.create({
  heading: {
    color: '#0F2851',
    fontSize: 40,
    marginLeft: widthToDp(4),
    fontFamily: fonts.hk_bold,
  },
  help: {
    position: 'absolute',
    right: 0,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#84668C',
    fontSize: 14,
    color: '#84668C',
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  textCenter: {
    color: '#67718C',
    textAlign: 'center',
    fontFamily: fonts.robo_reg,
    marginHorizontal: widthToDp(12),
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingTop: heightToDp(7),
  },
  stepIndicatorContainer: {
    marginVertical: 20,
    paddingHorizontal: widthToDp(5),
    flexDirection: 'column', // Display the steps in a column layout
  },
  progressStepContainer: {
    alignItems: 'center',
  },
  stepContent: {
    alignItems: 'center',
    marginTop: 20,
  },
  orderContainer: {
    backgroundColor: 'white',
    // width: widthToDp(44),
    marginHorizontal: widthToDp(5),
    marginTop: 20,
    marginBottom: 20,
    // width: (width * 0.91) / 2,
    paddingVertical: heightToDp(5),
    paddingHorizontal: widthToDp(1),
    borderRadius: 10,
  },
  orderDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  OrderImage: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
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
  separator: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 5,
  },
  indicatorView: {
    marginHorizontal: 24,
    marginTop: heightToDp(6),
    marginBottom: 20,
  },
  row: { flexDirection: 'row', alignItems: 'center' },

  headingName: {
    fontSize: 20,
    color: '#0F2851',
    fontFamily: fonts.hk_bold,
  },
  textBold: {
    color: '#0F2851',
    fontFamily: fonts.robo_med,
  },

  ratingModal: { marginHorizontal: widthToDp(10), marginTop: 15 },
});
