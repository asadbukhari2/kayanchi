import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { widthToDp, heightToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';

const ModalContent = ({ data, theme }) => {
  console.log('data', data);
  return (
    <View
      style={[
        styles.modalElement,
        data.modalImageSource === theme.CreateGig ? { backgroundColor: '#416245' } : { backgroundColor: theme.primary },
      ]}>
      <View>
        <Image source={data.modalImageSource} style={styles.imageModal} />
      </View>
      <View
        style={{
          flex: 1,
          paddingLeft: 15,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.modalText}>{data.modalTitle}</Text>
        <Text style={styles.modalDescription}>{data.modalDescription}</Text>
      </View>
    </View>
  );
};

export default ModalContent;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent black background
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    paddingTop: 30,
  },
  imageModal: { width: 80, height: 100, resizeMode: 'contain' },
  closeIconContainer: {
    backgroundColor: '#EEEEEE',
    borderRadius: 20,
    position: 'absolute',
    right: 20,
    top: 5,
  },
  modalElement: {
    // width: width * 0.91,
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 10,
  },
  modalText: {
    fontSize: 18,
    fontFamily: fonts.robo_bold,
    marginBottom: 20,
    color: 'white',
  },
  modalDescription: {
    fontSize: 12,
    color: 'white',
    textAlign: 'justify',
  },
});
