import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';

function fn(id) {
  
  let url = 'https://robohash.org/'+id;
  
  return url;
};

export default function Card(props) {
    const {name,email,id}=props;
   
    return (
     
     <View style={[styles.container, styles.shadowProp ]}>
        
        <Image 
        style={styles.tinyLogo}
         source={{
          
           uri: fn(id)
         }}
      
        />
        <br/>
        <Text> name: {name}</Text>
       <Text > email: {email}</Text>
        <StatusBar style="auto" />
      </View>
      
     

    );
  }

  const styles = StyleSheet.create({
    container: {
     // flex: 1,
      //flex-direction: row,
     // flexDirection:'row',
      backgroundColor: '#82f5e0',
      padding:'1rem',
      margin:'1rem',
      alignItems: 'center',
       //box-shadow: 4px 4px 8px 0 rgba( 0, 0, 0, .2 )

     //display: 'inlineBlock',
      justifyContent: 'center',
      height:370,
      width:370,
      //overflow:'scroll'

    },
   
    tinyLogo: {
      width: 300,
      height: 300,
    },
    baseText: {
      fontFamily: "Cochin"
    },
    shadowProp: {
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
      borderRadius: 10,

    },
   
  });
  

  //androide shadow