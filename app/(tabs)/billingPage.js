import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList,Image, TouchableOpacity, ScrollView } from 'react-native';
import { router } from "expo-router";
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';
import { Link , useHistory} from "expo-router";
import { useState } from 'react';
import { Button, Icon } from 'react-native-elements';
import { Pressable } from 'react-native';


const dataArray=[
  {
    name:"Pen",
    productID:"11901",
    price: "20",
    quantity: 1,

    imageURL:"https://www.transparentpng.com/thumb/pen/HsiFdl-pen-hd-photo-png.png"
  },
  {
    name:"Tomato 1kg",
    productID:"11902",
    price: "40",
    quantity: 1,

    imageURL:"https://media.istockphoto.com/id/1414407484/photo/tomato-farm.jpg?s=612x612&w=0&k=20&c=Mp_uJ6IiRMnfqGCSIV1CMKAk4bDtyuOSH7WXddXPiq0="
  },
  {
    name:"Pencil",
    productID:"11903",
    price: "10",
    quantity: 1,

    imageURL:"https://media.istockphoto.com/id/984666828/photo/lots-of-yellow-pencils-standing-with-their-nibs-up.jpg?s=612x612&w=0&k=20&c=EioHjFS4HvzBr9rulO1mey0tg4Nimfpkfq_-WvfV2b0="
  },
  {
    name:"Raw Rice 1kg",
    productID:"11904",
    price: "65",
    quantity: 1,

    imageURL:"https://media.istockphoto.com/id/519309790/photo/pile-of-raw-basmati-rice-with-a-spoon.jpg?s=612x612&w=0&k=20&c=A9A87HykypkOo5qLMQm6bZjBQn83NE1NHMppw8-6Tnc="
  },
  {
    name:"Maida 1kg",
    productID:"11905",
    price: "35",
    quantity: 1,

    imageURL:"https://media.istockphoto.com/id/1191384026/photo/paper-bag-of-flour.jpg?s=612x612&w=0&k=20&c=7s0fmQN1vltrxU9tDAazREkBSGSudNX6g7I5w3UcM3k="
  },
  {
    name:"Maxo mosquito coil",
    productID:"11906",
    price: "40",
    quantity: 1,

    imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTEjV7J1Dob4gDMm_Rvim0PTwEntKYetzvMQ&usqp=CAU"
  },
  {
    name:"Dove soap (pack 1)",
    productID:"11907",
    price: "23",
    quantity: 1,

    imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHmCwuMz8dUJMjXsiahuOo5HPC45Zvv5c36w&usqp=CAU"
  },
  {
    name:"Colgate maxx fresh",
    productID:"11908",
    price: "40",
    quantity: 1,

    imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaK4Ma9lEeGNEUIw-aCq5OoMV5UsN7GNyS1Q&usqp=CAU"
  },
  {
    name:"Olive oil 1ltr",
    productID:"11909",
    price: "240",
    quantity: 1,

    imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmw30LJIYq1swCb5xmSFCX69ylYJMjXV4x8w&usqp=CAU"
  },
  {
    name:"Maggi instant noodles",
    productID:"11910",
    price: "25",
    quantity: 1,
    imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMcI52DEg5o6ch8RB3DnFtayfCdd799u4Hsg&usqp=CAU"
  },  
]




const billingPage= ({route, navigation})=>{
  const [userInput, setUserInput]= useState(userInput);
  const [filteredData, setFilteredData] = useState(dataArray);
  const [billItems, setBillItems] = useState([]); // Track selected items for the bill
  const [totalAmount, setTotalAmount] = useState(0);


  // {console.log(" in billingpage", typeof billItems)}

  const handleSearch = (text) => {
    setUserInput(text);
    const filteredItems = dataArray.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filteredItems);
  };

  

  
    // const addItemToBill = (item) => {
    //   const updatedBillItems = [...billItems];
    //   const itemIndex = updatedBillItems.findIndex((billItem) => billItem.productID === item.productID);
    
    //   if (itemIndex !== -1) {
    //     updatedBillItems[itemIndex].quantity += 1;
    //     updatedBillItems[itemIndex].totalPrice = updatedBillItems[itemIndex].quantity * item.price;
    //   } else {
    //     updatedBillItems.push({ ...item, quantity: 1, totalPrice: item.price });
    //   }
    
    //   setBillItems(updatedBillItems);
    
    //   // Calculate the total amount
    //   const newTotalAmount = updatedBillItems.reduce((acc, billItem) => acc + billItem.totalPrice, 0);
    //   setTotalAmount(parseFloat(newTotalAmount).toFixed(2));
    //     };
    const addItemToBill = (item) => {
      const updatedBillItems = [...billItems];
      const itemIndex = updatedBillItems.findIndex((billItem) => billItem.productID === item.productID);
    
      if (itemIndex !== -1) {
        updatedBillItems[itemIndex].quantity += 1;
        updatedBillItems[itemIndex].totalPrice = updatedBillItems[itemIndex].quantity * parseFloat(item.price);
      } else {
        updatedBillItems.push({ ...item, quantity: 1, totalPrice: parseFloat(item.price) });
      }
    
      setBillItems(updatedBillItems);
    
      // Calculate the total amount
      const newTotalAmount = updatedBillItems.reduce((acc, billItem) => acc + billItem.totalPrice, 0);
      setTotalAmount(parseFloat(newTotalAmount).toFixed(2));
    };
    
    
  

  // Calculate the total number of selected items
  // const totalItems = billItems.length;
  const totalItems = billItems.reduce((acc, item) => acc + item.quantity, 0);


  // Calculate the total price of selected items
  // const totalAmount = billItems.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')), 0);
  // Calculate the total amount by summing the totalPrice of each item in billItems
// const totalAmount = billItems.reduce((acc, item) => acc + item.totalPrice, 0);


  
  const filterData=(item) =>{

    if(userInput===''){
      return(
        <View style={styles.listItem1}>
      <View>
      <Image source={{uri:item.imageURL}}  style={{width:60, height:60,borderRadius:30}} />
      </View>
        
        <View style={{alignItems:"left",flex:1, paddingLeft: 20}}>
          <Text style={{fontWeight:"bold", color:"#ca88a5", fontSize:20}}>{item.name}</Text>
          <Text style={{fontWeight:"bold"}}>Price: ₹{item.price}</Text>
          <Text style={{fontWeight:"bold"}}>productID:{item.productID}</Text>
          {/* <Text>{item.position}</Text> */}
        </View>
      </View>
        )
    }
    if(item.name.includes(userInput)){
      return(
      <View style={styles.listItem1}>
    <View>
    <Image source={{uri:item.imageURL}}  style={{width:60, height:60,borderRadius:30}} />
    </View>
      
      <View style={{alignItems:"left",flex:1, paddingLeft: 20}}>
        <Text style={{fontWeight:"bold", color:"#ca88a5", fontSize:20}}>{item.name}</Text>
        <Text style={{fontWeight:"bold"}}>Price: ₹{item.price}</Text>
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
              <Text style={{ fontWeight: 'bold', left:200, color:'#ca88a5', fontSize:30 , bottom:18}}>₹{item.price}</Text>
              <Text style={{ fontWeight: 'bold',color:'#ca88a5', bottom:30 }}>Product ID: {item.productID}</Text>
              <TouchableOpacity onPress={() => addItemToBill(item) } 
                        style={{bottom:70,left:130, backgroundColor:'#F8F9F9', marginLeft:140, height:40, width:40, borderRadius:5, paddingTop:3}}>
                <Icon name='add' size={35} color="#ca88a5"/>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={{flexDirection:'row'}}>
      <Text style={{fontSize:17, fontWeight:'600',right:80}}>selected items:</Text>
      <Text style={{fontSize:17, fontWeight:'600', left:20}}>qty</Text>
      <Text style={{fontSize:17, fontWeight:'600', left:60}}>price</Text>
      </View>
      {/* Display selected items in the bill section */}
      <ScrollView style={styles.billContainer}>
        {billItems.map((item, index) => (
          <View style={styles.listItem2} key={index}>
            <View>
              <Image
                source={{ uri: item.imageURL}}
                style={styles.image}
              />
            </View>

            <View style={{ flex: 1, paddingLeft: 20 }}>
              <Text style={{ fontWeight: 'bold', color: '#ca88a5', fontSize: 20 }}>
                {item.name}
              </Text>
              <Text style={{ fontWeight: 'bold', left:250, color:'#ca88a5', fontSize:30 , bottom:18}}>₹{item.price}</Text>

              <Text style={{ fontWeight: 'bold',color:'#ca88a5', bottom:30 }}>Product ID: {item.productID}</Text>
              <Text style={{ fontWeight: 'bold', color:'#ca88a5', fontSize:25, bottom:65, left:200}}>{item.quantity}</Text>

            </View>
          </View>
          
        ))}
      </ScrollView>
      
 {/* Display total number of items and total amount */}
 <View style={styles.totalSection}>
        <Text style={{fontSize:16, fontWeight:'600'}}>Total Items: {totalItems}</Text>
        <Text style={{fontSize:16, fontWeight:'600'}}>Total Amount:₹{totalAmount}</Text>
      </View>
          

       
 <View style={styles.Linkbutton}>
  <Link  href={{
      pathname: '/bills',
      params: {
        billItems:JSON.stringify(billItems), // Pass the billItems array as a prop
        totalItems:totalItems,
        totalAmount:totalAmount
      }}} asChild>
      <Pressable>
        <Text style={{fontSize:18, fontWeight:'bold', color:"#fff"}}>Generate bill</Text>
      </Pressable>
    </Link>
</View> 

{console.log("in billng pageee", billItems)}

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
    backgroundColor: '#fff',
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
    backgroundColor:"#D6EAF8",
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