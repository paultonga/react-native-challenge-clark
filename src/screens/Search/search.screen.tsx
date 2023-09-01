import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Screen from '../../components/Screen';
import Header from '../../components/Header';
import { Product, useProductsAPI } from '../../data/ProductsAPI';
import { FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { wp, hp } from '../../ui/utils';
import Container from '../../components/Container';
import TextView from '../../components/TextView';

interface SearchProps {}

const Search: React.FC<SearchProps> = ({ navigation }) => {
  const { products, getProducts } = useProductsAPI();
  const [query, setQuery] = useState('');

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goBack = () => navigation.goBack();

  const onItemPressed = React.useCallback(
    (product: Product) => navigation.navigate('ProductDetail', { product }),
    [navigation],
  );

  const filteredProducts = useMemo(
    () =>
      query.length >= 2
        ? products.filter(product => product.name.includes(query))
        : [],
    [products, query],
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

  return (
    <Screen>
      <Header
        leftIcon="arrow-left-line"
        onPressLeftIcon={goBack}
        isSearchMode
        headerTitle="Search"
        onSearcHInput={setQuery}
      />
      <FlatList
        contentContainerStyle={styles.content}
        data={filteredProducts}
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

export default Search;
