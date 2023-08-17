import { StyleSheet, Text, View,Image,FlatList } from "react-native";


import car from "../images/car.png";
import {
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';
import menuOptions from '../app/menuOptions.js';
import MenuOption from '../components/MenuOption.js';

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View >
        <Text style={styles.title}>My Tesla Model</Text>
        <Text style={styles.subtitle}>Kartik Customized</Text>
        </View>
        <FontAwesome name="user-circle" size={28} color="white" />
      </View>
      <Image source={car} style={styles.image} resizeMode="contain"/>
      <View style={styles.controls}>
  <Entypo name="lock" size={26} color='white' />
  <MaterialCommunityIcons name="fan" size={26} color='white' />
  <FontAwesome5 name="bsolt" size={26} color='white' />
  <Ionicons name="car-sport-sharp" size={26} color='white' />
</View>
<View style={styles.controlsText}>
  <Text style={{color:'gray'}}>Lock</Text>
  <Text style={{color:'gray', marginLeft:9,}}>Engine</Text>
  <Text style={{color:'gray'}}>Charge</Text>
  <Text style={{color:'gray',marginRight:6,}}>Auto</Text>
  
</View>

   {/*  menu */}
  <View style={styles.optionsRow}>
    {/*  icon  */}
    <Ionicons name="car-sport-outline" size={26} color="white" />

        {/*  text  */} 

<Text style={styles.optionText}>Controls</Text>
            {/*  icon */}


            <FontAwesome5 name="caret-right" size={26} color="white" style={{ marginLeft: 'auto' }} />
            </View>
  );
  <FlatList data={menuOptions} renderItem={MenuOption} />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor:'#161818',
  },
  header:{
marginTop:50,
flexDirection:"row",

justifyContent:"space-between",


  },
  title: {
    fontSize:24,
    fontWeight: "bold",
    color: '#00FFFF',
    marginBottom:8,
    
  },
  subtitle: {
    color: "gray",
    fontWeight:'500',
  },
  image:{
    width:'100%',
height:300,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
controlsText:{
color:'white',
flexDirection:'row',
justifyContent:'space-around',
marginLeft:5.5,

},
optionsRow: {
  flexDirection: 'row',
  alignItems: 'center',
  marginVertical: 20
},
optionText: {
  color: '#eee',
  fontSize: 18,
  fontWeight: 'bold',
  marginLeft: 10,
},

});
