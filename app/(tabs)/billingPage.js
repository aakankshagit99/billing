import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList,Image, TouchableOpacity, ScrollView } from 'react-native';
import { router } from "expo-router";
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';
import { Link } from "expo-router";
import { useState } from 'react';
import { Icon } from 'react-native-elements';

function Item({ item }) {
  return (
    <View style={styles.listItem1}>
    <View>
    <Image source={{uri:item.imageURL}}  style={{width:60, height:60,borderRadius:30}} />
    </View>
      
      <View style={{alignItems:"left",flex:1, paddingLeft: 20}}>
        <Text style={{fontWeight:"bold", color:"#ca88a5", fontSize:20}}>{item.name}</Text>
        <Text style={{fontWeight:"bold"}}>Price: {item.price}</Text>
        <Text style={{fontWeight:"bold"}}>productID:{item.productID}</Text>

        {/* <Text>{item.position}</Text> */}
      </View>
    </View>
  );
}

const dataArray=[
  {
    name:"Pen",
    productID:"11901",
    price: "$40",
    imageURL:"https://www.transparentpng.com/thumb/pen/HsiFdl-pen-hd-photo-png.png"
  },
  {
    name:"Pencil",
    productID:"11902",
    price: "$20",
    imageURL:"https://www.transparentpng.com/thumb/pen/HsiFdl-pen-hd-photo-png.png"
  },
  {
    name:"Tomato",
    productID:"11903",
    price: "$40",
    imageURL:"https://www.transparentpng.com/thumb/pen/HsiFdl-pen-hd-photo-png.png"
  },
  {
    name:"Rice",
    productID:"11904",
    price: "$40",
    imageURL:"https://www.transparentpng.com/thumb/pen/HsiFdl-pen-hd-photo-png.png"
  },
  {
    name:"Maida",
    productID:"11905",
    price: "$40",
    imageURL:"https://www.transparentpng.com/thumb/pen/HsiFdl-pen-hd-photo-png.png"
  },
  {
    name:"Maida",
    productID:"11905",
    price: "$40",
    imageURL:"https://www.transparentpng.com/thumb/pen/HsiFdl-pen-hd-photo-png.png"
  },
  {
    name:"Maida",
    productID:"11905",
    price: "$40",
    imageURL:"https://www.transparentpng.com/thumb/pen/HsiFdl-pen-hd-photo-png.png"
  },
  {
    name:"Maida",
    productID:"11905",
    price: "$40",
    imageURL:"https://www.transparentpng.com/thumb/pen/HsiFdl-pen-hd-photo-png.png"
  },
  {
    name:"Maida",
    productID:"11905",
    price: "$40",
    imageURL:"https://www.transparentpng.com/thumb/pen/HsiFdl-pen-hd-photo-png.png"
  },
  {
    name:"Maida",
    productID:"11905",
    price: "$40",
    imageURL:"https://www.transparentpng.com/thumb/pen/HsiFdl-pen-hd-photo-png.png"
  },  
]




const billingPage= ()=>{
  const [userInput, setUserInput]= useState(userInput);
  const [filteredData, setFilteredData] = useState(dataArray);
  const [billItems, setBillItems] = useState([]); // Track selected items for the bill

  const handleSearch = (text) => {
    setUserInput(text);
    const filteredItems = dataArray.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filteredItems);
  };

  const addItemToBill = (item) => {
    setBillItems([...billItems, item]);
  };

  // Calculate the total number of selected items
  const totalItems = billItems.length;

  // Calculate the total price of selected items
  const totalAmount = billItems.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')), 0);

  const filterData=(item) =>{

    if(userInput===''){
      return(
        <View style={styles.listItem}>
      <View>
      <Image source={{uri:item.imageURL}}  style={{width:60, height:60,borderRadius:30}} />
      </View>
        
        <View style={{alignItems:"left",flex:1, paddingLeft: 20}}>
          <Text style={{fontWeight:"bold", color:"#ca88a5", fontSize:20}}>{item.name}</Text>
          <Text style={{fontWeight:"bold"}}>Price: {item.price}</Text>
          <Text style={{fontWeight:"bold"}}>productID:{item.productID}</Text>
  
          {/* <Text>{item.position}</Text> */}
        </View>
      </View>
        )
    }
    if(item.name.includes(userInput)){
      return(
      <View style={styles.listItem}>
    <View>
    <Image source={{uri:item.imageURL}}  style={{width:60, height:60,borderRadius:30}} />
    </View>
      
      <View style={{alignItems:"left",flex:1, paddingLeft: 20}}>
        <Text style={{fontWeight:"bold", color:"#ca88a5", fontSize:20}}>{item.name}</Text>
        <Text style={{fontWeight:"bold"}}>Price: {item.price}</Text>
        <Text style={{fontWeight:"bold"}}>productID:{item.productID}</Text>
        <Icon name='add'/>
        

        {/* <Text>{item.position}</Text> */}
      </View>
    </View>
      )
    }
  }
    return (
        <View style={styles.container}>
          
          <SearchBar
          style={{backgroundColor:'#FDEDEC', borderRadius:20, paddingLeft:10}}
          placeholder='type here'
          onChangeText={handleSearch}
          value={userInput}
          />

<ScrollView style={styles.scrollContainer}>
        {filteredData.map((item, index) => (
          <View style={styles.listItem1} key={index}>
            <View>
              <Image
                source={{ uri: item.imageURL }}
                style={styles.image}
              />
            </View>

            <View style={{ flex: 1, paddingLeft: 20 }}>
              <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}>
                {item.name}
              </Text>
              <Text style={{ fontWeight: 'bold', left:200, color:'#ca88a5', fontSize:30 , bottom:18}}>{item.price}</Text>
              <Text style={{ fontWeight: 'bold',color:'#ca88a5', bottom:30 }}>Product ID: {item.productID}</Text>
              <TouchableOpacity onPress={() => addItemToBill(item)} 
                        style={{bottom:70,left:130, backgroundColor:'yellow', marginLeft:140, height:40, width:40, borderRadius:5, paddingTop:3}}>
                <Icon name='add' size={35} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
<Text>selected items:</Text>
      {/* Display selected items in the bill section */}
      <ScrollView style={styles.billContainer}>
        {billItems.map((item, index) => (
          <View style={styles.listItem2} key={index}>
            <View>
              <Image
                source={{ uri: item.imageURL }}
                style={styles.image}
              />
            </View>

            <View style={{ flex: 1, paddingLeft: 20 }}>
              <Text style={{ fontWeight: 'bold', color: '#ca88a5', fontSize: 20 }}>
                {item.name}
              </Text>
              <Text style={{ fontWeight: 'bold', left:200, color:'#ca88a5', fontSize:30 , bottom:18}}>{item.price}</Text>
              <Text style={{ fontWeight: 'bold',color:'#ca88a5', bottom:30 }}>Product ID: {item.productID}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

 {/* Display total number of items and total amount */}
 <View style={styles.totalSection}>
        <Text>Total Items: {totalItems}</Text>
        <Text>Total Amount: ${totalAmount.toFixed(2)}</Text>
      </View>
          

       
<View style={styles.Linkbutton}>
    <Link href={{
      pathname:'/bills',
      params:{billItems:billItems}
    }}  >Generate Bill</Link>
</View>

      </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
  },
  billcontainer: {
    flex: 1,
    backgroundColor: '#F5EEF8',
    alignItems: 'center',
    justifyContent: 'center',
    height:'300',
    width:'auto'
  },
  scrollcontainer:{
    flex:1,
    position:'relative',
    height:300,
    width:380,
    borderRadius:20,
    backgroundColor:'yellow',
    marginBottom:10,
    backgroundColor: '#F5EEF8',

  },
  scrollContainer: {
    flex: 1,
    position: 'relative',
    height: 300,
    width: 380,
    borderRadius: 20,
    backgroundColor: 'yellow',
    marginBottom: 10,
    backgroundColor: '#F5EEF8',
  },
  totalSection: {
    alignItems: 'center',
    gap:100,
    flexDirection:'row',

    marginBottom: 10,
  },
  billContainer: {
    flex: 1,
    height: 200, // Adjust the height for your bill section
    width: 380,
    borderRadius: 20,
    backgroundColor: 'yellow',
    marginBottom: 10,
    backgroundColor: '#F5EEF8',
  },
  listItem1:{
    margin:10,
    padding:10,
    width:350,
    backgroundColor:"#ecd8e7",
    borderRadius:5,
    flex:1,
    flexDirection: 'row',
    height:60
  },
  listItem2:{
    margin:10,
    padding:10,
    width:350,
    backgroundColor:"white",   //#ecd8e7
    borderRadius:5,
    flex:1,
    flexDirection: 'row',
    height:60
  },
  Linkbutton:{
    height:50,
    width:200,
    justifyContent: 'center',
    textAlign:'center',
    alignItems:'center',
    fontSize:25,
    padding:15,
    backgroundColor:'#D98880',
    borderRadius:20,
    marginBottom:10,
  },
});

export default billingPage;