import React from 'react';
import Screen from '../../components/Screen';
import Header from '../../components/Header';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackProps } from '../../navigation/AppNavigator';
import Container from '../../components/Container';
import { Image, StyleSheet } from 'react-native';
import { hp, wp } from '../../ui/utils';
import TextView from '../../components/TextView';

type ProductDetailProps = NativeStackScreenProps<
  AppStackProps,
  'ProductDetail'
>;

const ProductDetail: React.FC<ProductDetailProps> = ({ navigation, route }) => {
  const product = route.params.product;

  const goBack = () => navigation.goBack();

  return (
    <Screen>
      <Header
        leftIcon="arrow-left-line"
        onPressLeftIcon={goBack}
        headerTitle="Product Details"
      />
      <Container>
        <Image
          style={styles.image}
          source={{ uri: product.imageUrl }}
          resizeMode="cover"
        />
        <Container customStyle={styles.detail}>
          <TextView customStyle={styles.name}>{product.name}</TextView>
          <TextView customStyle={styles.description}>
            {product.description}
          </TextView>
          <Container customStyle={styles.priceContainer}>
            <TextView customStyle={styles.symbol}>{'€'}</TextView>
            <TextView customStyle={styles.price}>{product.price}</TextView>
          </Container>
        </Container>
      </Container>
    </Screen>
  );
};

const styles = StyleSheet.create({
  image: {
    width: wp(100),
    height: hp(40),
  },
  detail: {
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
    alignItems: 'flex-start',
  },
  price: {
    fontSize: 35,
  },
  symbol: {
    fontSize: 20,
  },
});

export default ProductDetail;
