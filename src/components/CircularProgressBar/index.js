import React from 'react';
import {View} from 'react-native';
import {Svg, Text, Circle} from 'react-native-svg';

const CircularProgressBar = ({
  progress,
  radius,
  strokeWidth,
  color,
  textStyle,
}) => {
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (progress / 100) * circumference;
  const remainingMinutes = Math.floor((100 - progress) * 60 / 100);
  const remainingHours = Math.floor(remainingMinutes / 60);
  const formattedTime = `${remainingHours}:${remainingMinutes % 60}`;


  return (
    <View>
      <Svg width={radius * 2} height={radius * 2}>
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke="#E6E6E6"
          strokeWidth={strokeWidth}
          strokeLinejoin
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={10}
        />
            <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke="#84668C"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progressOffset}
        />
        <Text
          x={radius}
          y={radius}
          textAnchor="middle"
          alignmentBaseline="central"
          style={textStyle}>
          {`${formattedTime}`}
        </Text>
      </Svg>
    </View>
  );
};

export default CircularProgressBar;
