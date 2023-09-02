import React, { useEffect, useRef } from 'react';
import Screen from '../../components/Screen';
import Header from '../../components/Header';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackProps } from '../../navigation/AppNavigator';
import Container from '../../components/Container';
import { Image, Animated } from 'react-native';
import TextView from '../../components/TextView';
import { styles } from './productDetail.styles';
import Button from '../../components/Button';

type ProductDetailProps = NativeStackScreenProps<
  AppStackProps,
  'ProductDetail'
>;

const ProductDetail: React.FC<ProductDetailProps> = ({ navigation, route }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(100)).current;

  const product = route.params.product;

  const goBack = () => navigation.goBack();

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),

      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
  }, [fadeAnim, translateYAnim]);

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
        <Animated.View
          style={{
            opacity: fadeAnim,
            transform: [{ translateY: translateYAnim }],
          }}>
          <Container customStyle={styles.detail}>
            <TextView customStyle={styles.name}>{product.name}</TextView>
            <TextView customStyle={styles.description}>
              {product.description}
            </TextView>
            <Container customStyle={styles.priceContainer}>
              <TextView customStyle={styles.symbol}>{'€'}</TextView>
              <TextView customStyle={styles.price}>{product.price}</TextView>
            </Container>
            <Button label="Add to Cart" />
          </Container>
        </Animated.View>
      </Container>
    </Screen>
  );
};

export default ProductDetail;
