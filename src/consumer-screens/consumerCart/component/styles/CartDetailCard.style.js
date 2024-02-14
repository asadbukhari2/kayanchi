import { PermissionsAndroid, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    // padding: 15,
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 10,
    paddingVertical: 10,
  },
  flex: {
    display: 'flex',
  },
  directionRow: {
    flexDirection: 'row',
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#2f3a58',
  },
  subText: {
    color: '#67718c',
    fontWeight: '500',
  },
  marginTop5: {
    marginTop: 5,
  },
  borderTopBottom: {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderTopColor: '#67718c',
    borderBottomColor: '#67718c',
  },
  padding10: {
    padding: 10,
  },
  paddingHorizontal10: {
    paddingHorizontal: 10,
  },
  marginVertical10: {
    marginVertical: 10,
  },
  count: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#84668c',
  },
  colorBlue: {
    color: '#1583d8',
  },
  paddingHorizontal20: {
    paddingHorizontal: 20,
  },
});
