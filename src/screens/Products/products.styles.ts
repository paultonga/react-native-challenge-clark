import { StyleSheet } from 'react-native';
import { hp, wp } from '../../ui/utils';

export const styles = StyleSheet.create({
  loadingContainer: {
    height: hp(100),
    width: wp(100),
    zIndex: 100,
    backgroundColor: '#0000004f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontWeight: 'bold',
  },
});
