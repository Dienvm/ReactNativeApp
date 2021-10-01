import { StyleSheet } from 'react-native';
import { Metrics, Fonts, Colors } from '../../../../themes';

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Metrics.screenWidth - Metrics.largeMargin * 2,

    backgroundColor: Colors.itemColor,
    padding: Metrics.basePadding,
    marginVertical: Metrics.basePadding,
    marginHorizontal: Metrics.largeMargin,
  },
  title: {
    fontSize: Fonts.size.lg,
  },
  avatar: {
    width: 50,
    height: 50,
  },
});

export default styles;
