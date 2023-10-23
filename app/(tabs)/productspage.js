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
        <Text style={{fontWeight:"bold"}}>Price: {item.price}</Text>
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
    backgroundColor:"#ecd8e7",
    borderRadius:5,
    flex:1,
    flexDirection: 'row'
  }
});

export default productsPage;