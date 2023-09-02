import React from 'react';
import { Product } from '../../data/ProductsAPI';
import { FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Container from '../Container';
import TextView from '../TextView';
import { hp, wp } from '../../ui/utils';
import { usePalette } from '../../ui/colors';

interface ProductListProps {
  products: Product[];
  onRefresh?(): void;
  refreshing?: boolean;
  onItemPressed(product: Product): void;
}

const ProductList: React.FC<ProductListProps> = ({
  onItemPressed,
  onRefresh,
  refreshing,
  products,
}) => {
  const { colors } = usePalette();
  const renderItem = ({ item, index }: { item: Product; index: number }) => {
    return (
      <TouchableOpacity
        key={`product-${index}`}
        onPress={() => onItemPressed(item)}
        style={[
          {
            backgroundColor: colors.background,
            borderBottomColor: colors.border,
            shadowColor: colors.shadow,
          },
          styles.product,
        ]}>
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
    <FlatList
      contentContainerStyle={styles.content}
      data={products}
      renderItem={renderItem}
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  );
};

const styles = StyleSheet.create({
  product: {
    flexDirection: 'row',
    marginBottom: hp(4),
    marginRight: 29,
    borderRadius: 20,
    borderWidth: 1,
    width: wp(85),
    height: hp(11),
    alignItems: 'center',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    elevation: 22,
  },
  details: {
    width: wp(55),
    height: hp(11),
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  image: {
    height: hp(11),
    width: wp(25),
    borderRadius: 20,
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
    width: wp(48),
    fontSize: 12,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    height: hp(3.5),
  },
  price: {
    fontSize: 25,
  },
  symbol: {
    fontSize: 20,
  },
});

export default ProductList;
