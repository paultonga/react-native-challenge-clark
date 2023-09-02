import React, { useEffect, useState } from 'react';
import Screen from '../../components/Screen';
import Header from '../../components/Header';
import { Product, useProductsAPI } from '../../data/ProductsAPI';
import Container from '../../components/Container';
import TextView from '../../components/TextView';
import ProductList from '../../components/ProductList';
import { ActivityIndicator } from 'react-native';
import { styles } from './products.styles';

interface ProductsProps {}

const Products: React.FC<ProductsProps> = ({ navigation }) => {
  const { products, loading, getProducts } = useProductsAPI();
  const [refreshing, setRefreshing] = useState(false);

  const startSearch = () => navigation.navigate('Search');

  const onItemPressed = React.useCallback(
    (product: Product) => navigation.navigate('ProductDetail', { product }),
    [],
  );

  const onRefresh = async () => {
    setRefreshing(true);
    await getProducts();

    setRefreshing(false);
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
      {loading ? (
        <Container customStyle={styles.loadingContainer}>
          <ActivityIndicator animating color={'black'} />
          <TextView customStyle={styles.loadingText}>
            Loading... please wait
          </TextView>
        </Container>
      ) : (
        <ProductList
          products={products}
          onItemPressed={onItemPressed}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      )}
    </Screen>
  );
};

export default Products;
