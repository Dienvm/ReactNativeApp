import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Metrics = {
  basePadding: 20,
  baseMargin: 8,
  largeMargin: 16,

  screenWidth: width < height ? width : height,
};

export default Metrics;
