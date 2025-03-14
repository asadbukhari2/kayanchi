import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Feather from 'react-native-vector-icons/Feather';
import { widthToDp } from '../../utils/Dimensions';
import CircularProgressBar from '../CircularProgressBar';
import RatingModal from '../RatingModal';
import { fonts } from '../../utils/theme';
import { useSelector } from 'react-redux';

export default function VerticalStepIndicator({ data }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedRating, setSelectedRating] = useState(null);
  console.log({ currentPage }, 'popololo');
  const [stepsCompleted, setStepsCompleted] = useState(new Array(data.length).fill(false));

  const { name } = useSelector(state => state.auth.user);

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

  const renderPage = ({ item, index }) => {
    const isCircularProgressBarVisible = index === 10;
    const isCompleted = stepsCompleted[10];

    return (
      <>
        <View style={styles.rowItem}>
          <View>
            <Text style={styles.title}>{item.status}</Text>
            <Text style={styles.body}>{item.date}</Text>
            <Text style={styles.body}>{item.time}</Text>
          </View>
          <View>
            {
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
            }
            {isCircularProgressBarVisible && !isCompleted ? (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: '#A77246', marginRight: 10 }}>You are late</Text>
                <CircularProgressBar
                  progress={80} // Set the progress value as needed
                  radius={25}
                  strokeWidth={2}
                  color="#84668C"
                  textStyle={{
                    fontSize: 10,
                    fontWeight: 'bold',
                    fill: '#29AAE2',
                  }}
                />
              </View>
            ) : null}
          </View>
        </View>
        {index !== data.length - 1 && <View style={styles.separator} />}
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
    <>
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

      {currentPage === data.length - 1 && (
        <View style={styles.ratingModal}>
          <View style={styles.separator} />
          <Text style={{ color: '#67718C', fontFamily: fonts.robo_med }}>Artist hygiene & cleanliness</Text>
          <RatingModal selectedRating={selectedRating} handleRating={setSelectedRating} />
          <Text style={{ color: '#67718C', fontFamily: fonts.robo_med }}>Service as described</Text>
          <RatingModal selectedRating={selectedRating} handleRating={setSelectedRating} />
          <Text style={{ color: '#67718C', fontFamily: fonts.robo_med }}>Would recommend</Text>
          <RatingModal selectedRating={selectedRating} handleRating={setSelectedRating} />
          <View>
            <Text style={styles.textRating}>
              We loved the service {name} provided, it was an absolute delight to see how clean and professional her
              work is. Will order again!
            </Text>
          </View>
        </View>
      )}
      {/* <View style={styles.separator} /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  stepIndicator: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  rowItem: {
    // flex: 3,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: widthToDp(5),
  },
  title: {
    //    flex: 1,
    fontFamily: fonts.robo_med,
    fontSize: 16,
    color: '#0F2851',
    paddingVertical: 6,
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
    // flex: 1,
    fontFamily: fonts.robo_reg,
    fontSize: 14,
    color: '#67718C',
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
