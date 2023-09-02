import { StyleSheet } from 'react-native';
import { wp, hp } from '../../ui/utils';

export const styles = StyleSheet.create({
  image: {
    width: wp(100),
    height: hp(40),
  },
  detail: {
    height: hp(52),
    paddingHorizontal: wp(8),
    paddingVertical: hp(3),
  },
  name: {
    fontSize: 42,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 20,
    fontWeight: '300',
  },
  priceContainer: {
    flexDirection: 'row',
    marginTop: hp(2),
    marginBottom: hp(3),
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    height: hp(5.5),
  },
  price: {
    fontSize: 35,
  },
  symbol: {
    fontSize: 20,
  },
});
