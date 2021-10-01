import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts } from '../../../themes';

const styles = StyleSheet.create({
  container: ApplicationStyles.screen.container,
  title: {
    fontSize: Fonts.size.md,
    lineHeight: Fonts.lineHeight.md,
  },
});

export default styles;
