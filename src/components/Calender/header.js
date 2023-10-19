import React, { memo, useMemo, useCallback } from 'react';
import { createLocalWeek, createWeekList, screenWidth, colors } from '../lib';
import { View, Text } from 'react-native';
import { fonts } from '../../utils/theme';

const Header = ({ language }) => {
  const getLocalWeek = useCallback(createLocalWeek, [createLocalWeek]);
  const localWeek = useMemo(() => {
    return getLocalWeek(language);
  }, [language, getLocalWeek]);
  const getWeekList = useCallback(createWeekList, [createWeekList]);
  const weekList = useMemo(() => {
    return getWeekList(localWeek);
  }, [localWeek, getWeekList]);

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 10,
      }}>
      {weekList.map((w, index) => {
        return (
          <View
            key={index}
            style={{
              width: screenWidth / 8,
              alignItems: 'center',
            }}>
            <Text
              style={{
                // color:
                //   index === 0
                //     ? colors.sunday
                //     : index === 6
                //     ? colors.saturday
                //     : colors.defaultWeekColor,
                fontSize: 12,
                fontFamily: fonts.sans_bold,
                color: '#0F2851',
              }}>
              {w}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default Header;
