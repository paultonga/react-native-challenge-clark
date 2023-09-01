import React, { useEffect } from 'react';
import Screen from '../../components/Screen';
import Header from '../../components/Header';
import { FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Product, useProductsAPI } from '../../data/ProductsAPI';
import Container from '../../components/Container';
import TextView from '../../components/TextView';
import { hp, wp } from '../../ui/utils';

interface ProductsProps {}

const Products: React.FC<ProductsProps> = ({ navigation }) => {
  const { products, loading, getProducts } = useProductsAPI();

  const startSearch = () => navigation.navigate('Search');

  const onItemPressed = React.useCallback(
    (product: Product) => navigation.navigate('ProductDetail', { product }),
    [],
  );

  const renderItem = ({ item, index }: { item: Product; index: number }) => {
    return (
      <TouchableOpacity
        key={`product-${index}`}
        onPressOut={() => onItemPressed(item)}
        style={styles.product}>
        <Image
          style={styles.image}
          source={{ uri: item.imageUrl }}
          resizeMode="cover"
        />
        <Container customStyle={styles.details}>
          <TextView customStyle={styles.productName}>{item.name}</TextView>
          <TextView
            numberOfLines={2}
            ellipsizeMode="tail"
            mode="secondary"
            customStyle={styles.description}>
            {item.description}
          </TextView>
          <Container customStyle={styles.priceContainer}>
            <TextView customStyle={styles.symbol}>{'€'}</TextView>
            <TextView customStyle={styles.price}>{item.price}</TextView>
          </Container>
        </Container>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Screen>
      <Header
        rightIcon="search-line"
        onPressRightIcon={startSearch}
        headerTitle="Products"
      />
      <FlatList
        contentContainerStyle={styles.content}
        data={products}
        renderItem={renderItem}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  product: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: hp(4),
    marginRight: 29,
    borderRadius: 10,
  },
  details: {
    paddingHorizontal: 15,
  },
  image: {
    height: hp(10),
    width: wp(30),
  },
  content: {
    width: wp(100),
    paddingHorizontal: wp(8),
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    width: wp(50),
    fontSize: 13,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  price: {
    fontSize: 30,
  },
  symbol: {
    fontSize: 20,
  },
});

export default Products;
