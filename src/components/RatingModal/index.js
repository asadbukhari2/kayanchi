import React from 'react';
import { StyleSheet } from 'react-native';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RatingModal = ({ selectedRating, handleRating }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
      }}
    >
      {[1, 2, 3, 4, 5].map(rating => (
        <TouchableOpacity
          key={rating}
          style={[
            styles.ratingButton,
            selectedRating === rating && styles.selectedRating,
          ]}
          onPress={() => handleRating(rating)}
        >
          <Icon
            name={selectedRating >= rating ? 'star' : 'star-o'}
            size={20}
            color={selectedRating >= rating ? '#FF9D2B' : 'gray'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RatingModal;

const styles = StyleSheet.create({
  ratingButton:{paddingRight: 10}
})