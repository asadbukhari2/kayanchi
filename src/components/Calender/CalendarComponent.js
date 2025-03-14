import React, { useState, useMemo, useCallback, useRef } from 'react';
import {
  createWholeWeek,
  formatDate,
  createWholeWeeks,
  itemWidht,
  createNextTwoWeeks,
  createPreviousTwoWeeks,
  screenWidth,
  colors,
  styles,
  createLocalWeek,
} from '../lib';
// import { Header } from './header';
import { View, FlatList, Text } from 'react-native';
import { format } from 'date-fns';
import WeekItem from './WeekItem';
import Header from './header';
import { fonts } from '../../utils/theme';
const CalendarComponent = ({ date, language, onPressDate, selectedColor, showMonth, shadow }) => {
  const showHeader = showMonth ?? true;
  const [selectedDate, setSelectedDate] = useState(date);
  const [appearDate, setAppearDate] = useState(date);
  const flatListRef = useRef();
  const getWholeWeek = useCallback(createWholeWeek, [createWholeWeek]);
  const wholeWeek = useMemo(() => {
    return getWholeWeek(selectedDate);
  }, [selectedDate, getWholeWeek]);
  const getWholeWeeks = useCallback(createWholeWeeks, [createWholeWeeks]);
  const wholeWeeks = useMemo(() => {
    return getWholeWeeks(selectedDate, wholeWeek);
  }, [selectedDate, wholeWeek]);

  const selectDate = useCallback(
    d => {
      onPressDate(d);
    },
    [onPressDate],
  );

  const [weeks, setWeeks] = useState(wholeWeeks);

  const endReach = useCallback(() => {
    const n = createNextTwoWeeks(weeks.slice(-1)[0], []);
    setWeeks(w => {
      return [...w, ...n];
    });
  }, [weeks, createNextTwoWeeks, setWeeks]);

  const momentumEnd = useCallback(
    event => {
      const widthFromStart = event.nativeEvent.contentOffset.x;
      if (widthFromStart < screenWidth) {
        const b = createPreviousTwoWeeks(weeks[0], []);
        setWeeks(w => {
          return [...b, ...w];
        });
        flatListRef.current.scrollToIndex({ animated: false, index: 14 });
      }
      const currentPage = widthFromStart / event.nativeEvent.layoutMeasurement.width;
      setAppearDate(weeks[currentPage * 7 + 6]);
    },
    [createPreviousTwoWeeks, weeks, setWeeks, flatListRef, setAppearDate],
  );

  const localMonth = useMemo(() => {
    return format(appearDate, 'LLLL', { locale: createLocalWeek(language) });
  }, [createLocalWeek, appearDate]);

  return (
    <View
      style={
        shadow
          ? {
              backgroundColor: colors.white,
              paddingTop: 5,
              paddingBottom: 10,
              borderRadius: 10,
              ...styles.shadow,
            }
          : {
              backgroundColor: colors.white,
              paddingTop: 5,
              paddingBottom: 10,
            }
      }>
      {showHeader && (
        <View style={{ alignSelf: 'center', paddingVertical: 10 }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: fonts.sans_bold,
              color: '#0F2851',
            }}>
            {localMonth}
          </Text>
        </View>
      )}
      <Header language={language} />
      <FlatList
        ref={flatListRef}
        data={weeks}
        extraData={selectedDate}
        initialScrollIndex={14}
        horizontal
        pagingEnabled
        bounces
        showsHorizontalScrollIndicator={false}
        onEndReached={endReach}
        onEndReachedThreshold={0.01}
        onMomentumScrollEnd={momentumEnd}
        getItemLayout={(_, index) => ({
          length: itemWidht,
          offset: itemWidht * index,
          index,
        })}
        renderItem={({ item }) => {
          return (
            <WeekItem
              date={item}
              selectedDate={formatDate(item) === formatDate(date)}
              onSelectDate={selectDate}
              selectedColor={selectedColor}
              key={item.toDateString()}
            />
          );
        }}
      />
    </View>
  );
};

export default CalendarComponent;
