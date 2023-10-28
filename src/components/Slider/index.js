// import React, { useState } from 'react';
// import { View, Text, Slider } from 'react-native';

// const SliderComponent = () => {
//     const [sliderValue, setSliderValue] = useState(50); // Set the initial value (e.g., 50)

//     // Function to handle slider value change
//     const onSliderValueChange = (value) => {
//       setSliderValue(value);
//     };

//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Slider
//           style={{ width: 300, height: 40 }}
//           minimumValue={0}
//           maximumValue={100}
//           minimumTrackTintColor="#007AFF" // Customize the color of the slider's track on the left side of the thumb
//           maximumTrackTintColor="#000000" // Customize the color of the slider's track on the right side of the thumb
//           thumbTintColor="#007AFF"
//           // Customize the color of the thumb
//           thumbStyle={{
//             shadowColor: '#000',
//             shadowOffset: { width: 20, height: 20 },
//             shadowOpacity: 0.5,
//             shadowRadius: 8, // Adjust the shadow radius to make it wider
//           }}
//           step={1} // Set the step increment for the slider
//           value={sliderValue}
//           onValueChange={onSliderValueChange}
//         />
//       </View>
//     );
//   };

//   export default SliderComponent;

import React, { useState } from 'react';
import { View, PanResponder, Text } from 'react-native';
import { useTheme } from '../../utils/theme';

const theme = useTheme();

const SliderComponent = ({ min, max, value, colorSlider, radius, start, end }) => {
  const [sliderValue, setSliderValue] = useState(value);
  // const [sliderWidth, setSliderWidth] = useState(0);

  // const handlePanResponderMove = (_, gestureState) => {
  //   const { moveX } = gestureState;
  //   const newValue = (moveX / sliderWidth) * (max - min) + min;
  //   const clampedValue = Math.min(max, Math.max(min, newValue));
  //   setSliderValue(clampedValue);
  //   onChange(clampedValue);
  // };

  // const panResponder = PanResponder.create({
  //   onStartShouldSetPanResponder: () => true,
  //   onMoveShouldSetPanResponder: () => true,
  //   onPanResponderMove: handlePanResponderMove,
  // });

  return (
    <>
      <View
        // onLayout={event => setSliderWidth(event.nativeEvent.layout.width)}
        // {...panResponder.panHandlers}
        style={{
          width: '90%',
          height: 10,
          backgroundColor: '#ddd',
          borderRadius: 10,
        }}>
        <View
          style={{
            width: `${((sliderValue - min) / (max - min)) * 100}%`,
            height: '100%',
            backgroundColor: colorSlider, // Updated color here
            borderRadius: radius,
          }}
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {start !== undefined ? <Text>{start}</Text> : null}
        {end !== undefined ? <Text style={{ color: theme.primary }}>{end}</Text> : null}
      </View>
    </>
  );
};

export default SliderComponent;
