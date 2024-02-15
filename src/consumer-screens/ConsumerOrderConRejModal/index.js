import React from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import { fonts } from '../../utils/theme';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import CircularProgressBar from '../../components/CircularProgressBar';
import MultiButton from '../../components/MultiButton';

const ConsumerOrderConRejModal = ({ visible, close, navigation }) => {
  return (
    <Modal visible={visible} animationType="slide" onRequestClose={close}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text
            style={{
              fontSize: 34,
              fontFamily: fonts.robo_bold,
              color: '#2F3A58',
              marginHorizontal: widthToDp(5),
            }}>
            Waiting for confirmation
          </Text>
          <View style={{ alignItems: 'center', marginVertical: 20 }}>
            <CircularProgressBar
              progress={80}
              radius={80}
              strokeWidth={4}
              color="#84668C"
              textStyle={{
                fontSize: 20,
                fontWeight: 'bold',
                fill: '#29AAE2',
              }}
            />
          </View>
          <Text style={{ fontSize: 16, marginHorizontal: widthToDp(5) }}>
            Waiting for Narmeen Iqbal to accept your booking.
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginTop: 10,
              marginHorizontal: widthToDp(5),
            }}>
            You may cancel your booking in 3 minutes if she does not accept.
          </Text>
          <View style={styles.indicatorView}>
            <View style={styles.row}>
              <MultiButton
                title={'Go Back Home'}
                btnStyle={{ backgroundColor: '#67506D' }}
                onPress={() => navigation.navigate('ConsumerHomeStack', { screen: 'ConsumerHome' })}
              />
              <MultiButton title={'Cancel Request'} btnStyle={{ backgroundColor: '#9A9A9A' }} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Transparent black background
  },
  modalContent: {
    // padding: 20,
    borderRadius: 10,
    paddingTop: 20,
  },
  indicatorView: {
    marginHorizontal: widthToDp(5),
    marginTop: heightToDp(3),
    marginBottom: 15,
  },
  row: { flexDirection: 'row', alignItems: 'center' },
});
export default ConsumerOrderConRejModal;
