import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Products from '../screens/Products/products.screen';
import ProductDetail from '../screens/ProductDetail/productDetail.screen';
import Search from '../screens/Search/search.screen';
import { Product } from '../data/ProductsAPI';

export type AppStackProps = {
  Products: undefined;
  ProductDetail: { product: Product };
  Search: undefined;
};
const AppStack = createNativeStackNavigator<AppStackProps>();

export const AppNavigator = () => (
  <AppStack.Navigator
    initialRouteName="Products"
    screenOptions={{ headerShown: false }}>
    <AppStack.Screen name="Products" component={Products} />
    <AppStack.Screen name="ProductDetail" component={ProductDetail} />
    <AppStack.Screen name="Search" component={Search} />
  </AppStack.Navigator>
);
