import { useState } from 'react';
import { Alert } from 'react-native';

export const API_URL =
  'https://my-json-server.typicode.com/paultonga/db-demo/products';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  salesPrice: number;
  imageUrl: string;
}

export const useProductsAPI = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const handleError = (e: any) => {
    setLoading(false);

    Alert.alert(
      'An Error Ocurred',
      `${e}`,
      [{ text: 'OK', onPress: () => console.log(e) }],
      { cancelable: false },
    );
  };

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();

      setProducts(data);
      setLoading(false);
    } catch (error) {
      handleError(error);
    }
  };

  return {
    getProducts,
    loading,
    products,
  };
};
