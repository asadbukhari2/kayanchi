import { StyleSheet, View } from 'react-native';
import React from 'react';
import { widthToDp } from '../../../utils/Dimensions';

const CardSkeleton = () => {
  return (
    <>
      <View style={styles.container}>
        {/* Placeholder card content */}
        <View style={styles.imageSkeltonHAndWIdth}>

        </View>
        <View>
          <View style={styles.placeholder} />
          <View style={styles.placeholder} />
          <View style={styles.placeholder} />
        </View>
      </View>
      <View style={styles.container}>
        {/* Placeholder card content */}
        <View style={styles.imageSkeltonHAndWIdth}>

        </View>
        <View>
          <View style={styles.placeholder} />
          <View style={styles.placeholder} />
          <View style={styles.placeholder} />
        </View>
      </View>
      <View style={styles.container}>
        {/* Placeholder card content */}
        <View style={styles.imageSkeltonHAndWIdth}>

        </View>
        <View>
          <View style={styles.placeholder} />
          <View style={styles.placeholder} />
          <View style={styles.placeholder} />
        </View>
      </View>
      <View style={styles.container}>
        {/* Placeholder card content */}
        <View style={styles.imageSkeltonHAndWIdth}>

        </View>
        <View>
          <View style={styles.placeholder} />
          <View style={styles.placeholder} />
          <View style={styles.placeholder} />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F6',
    borderRadius: 13,
    padding: 16,
    marginBottom: 16,
    marginTop: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

  },
  placeholder: {
    backgroundColor: '#ccc',
    height: 16,
    borderRadius: 4,
    marginBottom: 8,
    width: 150
  },
  imageSkeltonHAndWIdth: {
    backgroundColor: '#ccc',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    width: 130,
    height: 120,
    marginRight: 10
  }
});
export default CardSkeleton;
