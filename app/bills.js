import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { router } from "expo-router";

import { Link } from "expo-router";

import { useRoute } from '@react-navigation/native';
import { View, StyleSheet,Text } from 'react-native';

export default bills = () => {
  const route = useRoute();
  const billItems = route.params?.billItems || [];
  {console.log("billitems:", billItems)}
  
  const invoiceData = {
    invoiceNumber: '12345',
    invoiceDate: '01/01/2022',
    customerName: 'John Smith',
    customerEmail: 'john@example.com',
    customerAddress: '123 Main St, Anytown USA 12345',
    items: [
      {
        id: 1,
        name: 'Item 1',
        quantity: 2,
        price: 9.99,
        total: 19.98,
      },
      {
        id: 2,
        name: 'Item 2',
        quantity: 1,
        price: 19.99,
        total: 19.99,
      },
    ],
    total: 39.97,
  };
  

  useEffect(() => {
    console.log("bill",billItems);
    return (
 
      <View>
      <Text>Selected Items in the Bill:</Text>
      {billItems && billItems.map((item, index) => (
            <View key={index}>
              <Text>Name: {item.name}</Text>
              <Text>Price: {item.price}</Text>
              <Text>Product ID: {item.productID}</Text>
              
            </View>
          ))}
    </View>
    );
  },);


  return (
 
  <View>
  {/* <Text>Selected Items in the Bill:</Text>
  {billItems && billItems.map((item, index) => (
        <View key={index}>
          <Text>Name: {item.name}</Text>
          <Text>Price: {item.price}</Text>
          <Text>Product ID: {item.productID}</Text>
          {/* Add other item details here */}
        {/* </View> */}
      {/* // ))}  */}
</View>
);
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  invoiceInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  invoiceInfo: {
    flexDirection: 'row',
  },
  label: {
    fontWeight: 'bold',
  },
  text: {
    marginLeft: 5,
  },
  divider: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  customerInfoContainer: {
    
  },
  customerInfo: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemsContainer: {
    marginTop: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  itemName: {
    fontSize: 16,
  },
  itemDetails: {},
  itemTotal: {
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});