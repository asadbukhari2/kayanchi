import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Feather from 'react-native-vector-icons/Feather';
import { widthToDp } from '../../utils/Dimensions';
import CircularProgressBar from '../CircularProgressBar';
import { fonts } from '../../utils/theme';
import { convertToAMPM } from '../../utils/helper';
import { format } from 'date-fns';

export default function VerticalStepIndicator({ data, timlineType }) {
  const [currentPage, setCurrentPage] = useState(0);
  const totalMinutes = 60;
  const [remainingTime, setRemainingTime] = useState(totalMinutes * 60);
  const [progress, setProgress] = useState(100);

  // eslint-disable-next-line no-unused-vars
  const [stepsCompleted, setStepsCompleted] = useState(new Array(data?.length).fill(false));

  const viewabilityConfig = { itemVisiblePercentThreshold: 0 };
  const stepColors = ['#29AAE2', '#84668C', '#A77246', '#E91E63', '#29AAE2', '#29AAE2', '#29AAE2', '#29AAE2']; // Define colors for each step

  const stepIndicatorStyles = {
    stepIndicatorSize: 10,
    currentStepIndicatorSize: 10,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 0,
    separatorFinishedColor: '#aaaaaa',
    separatorUnFinishedColor: '#4CAF50',
    stepIndicatorFinishedColor: '#29AAE2',
    stepIndicatorCurrentColor: stepColors[currentPage],
    stepIndicatorUnFinishedColor: '#4CAF50',
    stepIndicatorLabelFontSize: 0,
    currentStepIndicatorLabelFontSize: 0,
    stepIndicatorLabelCurrentColor: '#000000',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
    labelColor: '#666666',
    labelSize: 0,
    currentStepLabelColor: '#fe7013',
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(prevRemainingTime => {
        if (prevRemainingTime > 0) {
          const newRemainingTime = prevRemainingTime - 1;
          const newProgress = Math.floor((newRemainingTime / (totalMinutes * 60)) * 100);
          setProgress(newProgress);
          return newRemainingTime;
        } else {
          clearInterval(intervalId);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [totalMinutes]);

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secondsLeft).padStart(2, '0')}`;
  };

  function formatDate(inputDateString) {
    if (inputDateString === 'today' || inputDateString === 'Today') {
      return inputDateString;
    }
    const date = new Date(inputDateString);

    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-GB', options);

    return formattedDate;
  }

  const timeToMilliseconds = time => {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    const timeObject = new Date(2000, 0, 1, hours, minutes, seconds);
    const t = format(timeObject, 'hh:mm:ss');

    const [h, m] = t.split(':');
    const date = new Date();
    date.setHours(parseInt(h, 10), parseInt(m, 10), 0, 0);
    return date.getTime();
  };
  const isOneHourOrLessBefore = targetTime => {
    const targetTimeMilliseconds = timeToMilliseconds(targetTime);
    const currentTimeMilliseconds = new Date().getTime();

    // Calculate the difference in milliseconds
    const timeDifference = targetTimeMilliseconds - currentTimeMilliseconds;
    // Check if the difference is one hour or less
    const oneHourInMilliseconds = 60 * 60 * 1000;

    return timeDifference <= oneHourInMilliseconds;
  };

  const renderPage = ({ item, index }) => {
    const isCircularProgressBarVisible = index === 1;
    const isCompleted = stepsCompleted[10];
    const isStartTimer = isOneHourOrLessBefore(item.time);

    return (
      <>
        <View style={styles.rowItem}>
          <View>
            <Text style={styles.title}>{item.status}</Text>
            <Text style={styles.body}>{formatDate(item.date)}</Text>
            <Text style={styles.body}>{convertToAMPM(item.time)}</Text>
          </View>
          <View>
            {timlineType === 'active' && isCircularProgressBarVisible && !isCompleted ? (
              isStartTimer && (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  {remainingTime < 1 ? (
                    <Text style={{ color: '#A77246', marginRight: 10 }}>You are late</Text>
                  ) : (
                    <CircularProgressBar
                      progress={progress}
                      isText={formatTime(remainingTime)}
                      radius={35}
                      strokeWidth={2}
                      color="#84668C"
                      textStyle={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        fill: '#29AAE2',
                      }}
                    />
                  )}
                </View>
              )
            ) : (
              <Feather
                name="check"
                size={15}
                color="#4ECB5C"
                style={{
                  alignSelf: 'center',
                  padding: 5,
                  backgroundColor: '#EEEEEE',
                  borderRadius: 40,
                }}
              />
            )}
          </View>
        </View>
        {index !== data?.length - 1 && <View style={styles.separator} />}
      </>
    );
  };

  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    const visibleItemsCount = viewableItems.length;
    if (visibleItemsCount !== 0) {
      setCurrentPage(viewableItems[visibleItemsCount - 1].index);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.stepIndicator}>
        <StepIndicator
          customStyles={stepIndicatorStyles}
          stepCount={data.length}
          direction="vertical"
          currentPosition={currentPage}
        />
      </View>
      <FlatList
        style={{ flexGrow: 1 }}
        data={data}
        renderItem={renderPage}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  stepIndicator: {
    marginTop: -30,
    paddingHorizontal: 20,
  },
  rowItem: {
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: widthToDp(5),
  },
  title: {
    fontSize: 16,
    color: '#0F2851',
    paddingVertical: 6,
    fontFamily: fonts.robo_med,
  },
  textRating: {
    fontSize: 14,
    color: '#67718C',
    fontFamily: fonts.robo_reg,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  body: {
    fontSize: 14,
    color: '#606060',
    lineHeight: 24,
    marginRight: 8,
  },
  separator: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 15,
  },
  ratingModal: { marginHorizontal: widthToDp(10) },
});
