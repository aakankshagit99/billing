import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { router } from "expo-router";
import { Link } from "expo-router";
import { useRoute } from '@react-navigation/native';
import { View, StyleSheet,Text } from 'react-native';
import { useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { DataTable } from 'react-native-paper';
import { FAB, Button } from '@rneui/themed';

export default bills = () => {
  const route = useRoute();
  const {otherProp, billItems, totalItems, totalAmount } = route.params || [];
   const billingItems =JSON.parse(billItems);
   const [visible, setVisible] = React.useState(true);
   
  // const billItems = route.params?.billItems || [];
  // {console.log("in bills page", billItems)}
  {console.log("route",route)}

  console.log('billingItems:', billingItems.price);
  console.log('otherProp:', otherProp);
  console.log('totalamount', totalAmount);
  console.log('totalitems:', totalItems);

  const invoiceData = {
    invoiceNumber: '12345',
    invoiceDate: '01/01/2022',
    customerName: 'Aakanksha Hanchinamath',
    customerEmail: 'aakanksha@example.com',
    customerAddress: 'Manipal very beautiful',
  };

  return (
    <View style={{height:'100%', width:'auto'}}>
 <ScrollView>
  <View>
        <View style={styles.container} >
        <View style={styles.header}>
          <Text style={styles.title}>Exelon Stores</Text>
          <Text >opp AB Towers, Manipal</Text>

        </View>
        <View style={styles.invoiceInfoContainer}>
          <View style={styles.invoiceInfo}>
            <Text style={styles.label}>Invoice Number:</Text>
            <Text style={styles.text}>{invoiceData.invoiceNumber}</Text>
          </View>
          <View style={styles.invoiceInfo}>
            <Text style={styles.label}>Invoice Date:</Text>
            <Text style={styles.text}>{invoiceData.invoiceDate}</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.customerInfoContainer}>
          <Text style={styles.subtitle}>Customer Information</Text>
          <View style={styles.customerInfo}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.text}>{invoiceData.customerName}</Text>
          </View>
          <View style={styles.customerInfo}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.text}>{invoiceData.customerEmail}</Text>
          </View>
          <View style={styles.customerInfo}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.text}>{invoiceData.customerAddress}</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.itemsContainer}>
          <Text style={styles.subtitle}>Invoice Items</Text>

          <DataTable >
      <DataTable.Header>
      <DataTable.Title style={{flex:0.5}}>slno</DataTable.Title>
        <DataTable.Title>Item name</DataTable.Title>
        <DataTable.Title numeric style={{flex:2}}>Qt</DataTable.Title>
        <DataTable.Title numeric>price</DataTable.Title>

        <DataTable.Title numeric>total</DataTable.Title>
      </DataTable.Header>

          {billingItems && billingItems.map((item, index) => (
        <DataTable.Row key={index}>
        <DataTable.Cell style={{flex:0.5}}>{index+1}</DataTable.Cell>
        <DataTable.Cell style={{flex:2}}>{item.name}</DataTable.Cell>
        <DataTable.Cell numeric>{item.quantity}</DataTable.Cell>
        <DataTable.Cell numeric>₹{item.price}</DataTable.Cell>

        <DataTable.Cell numeric>₹{item.totalPrice}</DataTable.Cell>
      </DataTable.Row>
          ))}
          </DataTable>
        </View>
        

    <View style={styles.divider} />
      <View style={styles.totalContainer}>
           <View style={{flexDirection:'row'}}>
              <Text style={styles.labelqty}>Total Qty:</Text>
              <Text style={styles.totalqty}>{totalItems}</Text>
           </View>
           <View style={{flexDirection:'row'}}>
              <Text style={styles.labelamt}>Total:</Text>
              <Text style={styles.totalamt}>₹{totalAmount}</Text>
            </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.stars}>
      <Text style={{fontSize:30}}>***</Text>

      </View>

    </View > 

     <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
     <Text style={{fontSize:20, fontWeight:'bold', letterSpacing:1}}>Customer is God</Text>
     <Text></Text>
     <Text style={{fontSize:18, fontWeight:'bold'}}>Thankyou! </Text>
     <Text style={{fontSize:18, fontWeight:'bold'}}>Do visit Again!!</Text>
     </View>
     
     
</View>

    
</ScrollView>
<FAB
        visible={visible}
        title=" Print bill " 
        upperCase
        icon={{ name: 'print', color: 'white' }}
        color='#D98880'
        style={{position:"absolute",right:110, bottom:20, }}
        
      />
      </View>
);
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop:10,
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
  labelamt: {
    fontSize:20,
    fontWeight: 'bold',
  },
  labelqty: {
    fontSize:20,
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
    marginTop: 20,
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
    justifyContent: 'space-between',
    marginTop: 20,
  },
  totalamt: {
    fontSize: 25,
    fontWeight: 'bold',
    bottom:4
  },
  totalqty: {
    fontSize: 25,
    fontWeight: 'bold',
    bottom:4
  },
  stars:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }
});