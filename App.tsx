import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,ScrollView} from 'react-native';
import Card from './Card';
//import  {robots}  from './robots';
import Cardlist from './Cardlist';
import  {Component} from 'react';
import Searchbar from './Searchbar';
import { useState,useEffect } from 'react';
import Seachbar2 from './Searchbar2';
 import RandomeCard from "./RandomeCard";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

// function App(){
//   return(
//     <Tab.Navigator>
//       <Tab.Screen name="komal" component={<h1>hii komal</h1>} />
//       <Tab.Screen name="bhalerao" component={<h1>hii bhalerao</h1>} />
//     </Tab.Navigator>
//   );
// }
  
function App() {
  const [robots, setRobots] = useState([]);

  const [customrebo, setCustomrebo] = useState("");

  function customrebofn(event) {
   
      setCustomrebo(event);
      console.log("inside customrebo", event);

      return (
        <>
          <Card id={event} name="random" email="randommail" />
        </>
      );
    
  };

  function getrobos(){
   
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      console.log("inside getrobos",users);
      return setRobots(users);
    });

  }
  function onSearchChange (event){
    if (event === "") {
      getrobos();
      return;
    }
   
  const filteredrobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(event.toLowerCase());
    });
    console.log(filteredrobots);
    setRobots(filteredrobots);
  };
  useEffect(() => {
    getrobos();
  },[]);

  return (
    <View
      style={{
        backgroundColor: "#4b4b63",
        alignItems: "center",
        margin: "1rem"
      }}
    >
      
       <Seachbar2 searchchange={customrebofn} />
       <RandomeCard customrebo={customrebo} /> 

       <Searchbar
        searchchange={onSearchChange} 
      />
      <ScrollView>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <Cardlist robots={robots} />
        </View>
      </ScrollView>
    </View>

  );
}


export default App;


const styles = StyleSheet.create({
  container: {
    // flex: 1,
     backgroundColor: '#4b4b63',
    // alignItems: 'center',
    // justifyContent: 'center',
   // display:  
  },
  input: {
    height: 4,
    margin: 30,
    borderWidth: 1,
    padding: 10,
    borderRadius:4,
  
  },
});
