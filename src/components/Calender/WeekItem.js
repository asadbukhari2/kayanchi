import React, { memo, useCallback } from 'react';
import { styles, itemWidht, colors } from '../lib';
import { View, TouchableOpacity, Text } from 'react-native';
import { getDate, getDay } from 'date-fns';

const WeekItem = ({ date, selectedDate, onSelectDate, selectedColor }) => {
  const day = getDate(date);

  const selectDate = useCallback(() => {
    onSelectDate(date);
  }, [date, onSelectDate]);

  const bgColor = selectedColor ?? colors.defaultBg;

  return (
    <View
      style={{ width: itemWidht, alignItems: 'center', paddingVertical: 5 }}
    >
      <TouchableOpacity onPress={selectDate}>
        <Text
          style={
            selectedDate
              ? {
                  ...styles.eachDay,
                  backgroundColor: "#84668C",
                  // borderColor: bgColor,
                  color: colors.white,
                }
              : {
                  ...styles.eachDay,
                  // color:
                  //   getDay(date) === 0
                  //     ? colors.sunday
                  //     : getDay(date) === 6
                  //     ? colors.saturday
                  //     : colors.black,
                }
          }
        >
          {day}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WeekItem;
