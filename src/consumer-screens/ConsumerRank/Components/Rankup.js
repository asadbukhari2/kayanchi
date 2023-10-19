import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { heightToDp, widthToDp } from '../../../utils/Dimensions';

const Rankup = ({ title, heading, description, rating }) => {
  return (
    <View style={styles.containerDetail}>
      <View style={{ flex: 1 }}>
        {title && <Text style={styles.title}>{title}</Text>}
        {heading && <Text style={styles.heading}>{heading}</Text>}
        {description && <Text style={styles.description}>{description}</Text>}
      </View>
      {rating && (
        <View>
          <Text style={styles.rating}>{rating}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  //   containerDetail: {
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //     justifyContent: 'space-between',
  //     paddingHorizontal: 16,
  //     paddingVertical: 8,
  //     backgroundColor: '#FFFFFF',
  //     borderRadius: 8,
  //     marginVertical: 8,
  //   },
  containerDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: widthToDp(5),
    paddingVertical: heightToDp(4),
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  heading: {
    color: '#668C6A',
    fontSize: 16,
    paddingVertical: heightToDp(2),
  },
  description: {
    color: '#707993',
    fontSize: 12,
  },
  rating: { color: '#84668C', marginLeft: widthToDp(5) },
});

export default Rankup;
