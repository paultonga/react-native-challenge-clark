import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Screen from '../../components/Screen';
import Header from '../../components/Header';
import { Product, useProductsAPI } from '../../data/ProductsAPI';
import { FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { wp, hp } from '../../ui/utils';
import Container from '../../components/Container';
import TextView from '../../components/TextView';
import ProductList from '../../components/ProductList';
import { styles } from './search.styles';

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

  return (
    <Screen>
      <Header
        leftIcon="arrow-left-line"
        onPressLeftIcon={goBack}
        isSearchMode
        headerTitle="Search"
        onSearcHInput={setQuery}
      />
      {filteredProducts.length > 0 ? (
        <ProductList
          products={filteredProducts}
          onItemPressed={onItemPressed}
        />
      ) : (
        <Container customStyle={styles.empty}>
          <TextView customStyle={styles.notice}>
            Please enter a search query to find products
          </TextView>
        </Container>
      )}
    </Screen>
  );
};

export default Search;
