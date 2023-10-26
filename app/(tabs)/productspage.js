import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Header, Icon, Image } from 'react-native-elements';
import { router } from "expo-router";
// import { Tab } from '@rneui/themed';
import { Link } from "expo-router";
import { Button, ThemeProvider } from 'react-native-elements';
// import { useColorScheme } from 'react-native-appearance';

function Item({ item }) {
  return (
    <View style={styles.listItem}>
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
  );
}
const productsPage= ()=>{
    // const RaisedButton = (props) => <Button raised {...props} />;
      // let colorScheme = useColorScheme();
    const dataArray=[
      {
        name:"Pen",
        productID:"11901",
        price: "20",
        imageURL:"https://www.transparentpng.com/thumb/pen/HsiFdl-pen-hd-photo-png.png"
      },
      {
        name:"Tomato 1kg",
        productID:"11902",
        price: "40",
        imageURL:"https://media.istockphoto.com/id/1414407484/photo/tomato-farm.jpg?s=612x612&w=0&k=20&c=Mp_uJ6IiRMnfqGCSIV1CMKAk4bDtyuOSH7WXddXPiq0="
      },
      {
        name:"Pencil",
        productID:"11903",
        price: "10",
        imageURL:"https://media.istockphoto.com/id/984666828/photo/lots-of-yellow-pencils-standing-with-their-nibs-up.jpg?s=612x612&w=0&k=20&c=EioHjFS4HvzBr9rulO1mey0tg4Nimfpkfq_-WvfV2b0="
      },
      {
        name:"Raw Rice 1kg",
        productID:"11904",
        price: "65",
        imageURL:"https://media.istockphoto.com/id/519309790/photo/pile-of-raw-basmati-rice-with-a-spoon.jpg?s=612x612&w=0&k=20&c=A9A87HykypkOo5qLMQm6bZjBQn83NE1NHMppw8-6Tnc="
      },
      {
        name:"Maida 1kg",
        productID:"11905",
        price: "35",
        imageURL:"https://media.istockphoto.com/id/1191384026/photo/paper-bag-of-flour.jpg?s=612x612&w=0&k=20&c=7s0fmQN1vltrxU9tDAazREkBSGSudNX6g7I5w3UcM3k="
      },
      {
        name:"Maxo mosquito coil",
        productID:"11906",
        price: "40",
        imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTEjV7J1Dob4gDMm_Rvim0PTwEntKYetzvMQ&usqp=CAU"
      },
      {
        name:"Dove soap (pack 1)",
        productID:"11907",
        price: "23",
        imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHmCwuMz8dUJMjXsiahuOo5HPC45Zvv5c36w&usqp=CAU"
      },
      {
        name:"Colgate maxx fresh",
        productID:"11908",
        price: "40",
        imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaK4Ma9lEeGNEUIw-aCq5OoMV5UsN7GNyS1Q&usqp=CAU"
      },
      {
        name:"Olive oil 1ltr",
        productID:"11909",
        price: "240",
        imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmw30LJIYq1swCb5xmSFCX69ylYJMjXV4x8w&usqp=CAU"
      },
      {
        name:"Maggi instant noodles",
        productID:"11910",
        price: "25",
        imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMcI52DEg5o6ch8RB3DnFtayfCdd799u4Hsg&usqp=CAU"
      },  
    ]


    return (
      <View style={styles.container}>
        {/* <Header barStyle='dark-content' centerComponent={{ text: 'Products', style: {color: '#fff', fontSize:25 } }} 
        containerStyle={{
          backgroundColor: '#d3bfce',
          justifyContent: 'space-around',
        }}/> */}
        <FlatList
          style={{flex:1}}
          data={dataArray}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.email}
        />
      </View>
    );
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Link:{
    justifyContent: 'center',
    textAlign:'center',
    alignItems:'center',
    paddingTop:10,
    height:'auto',
    width:'auto',
    backgroundColor:'yellow',

  },
  listItem:{
    margin:10,
    padding:10,
    width:350,
    backgroundColor:"#D6EAF8", //#ecd8e7
    borderRadius:5,
    flex:1,
    flexDirection: 'row'
  }
});

export default productsPage;