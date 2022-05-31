import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';
//import { robots } from './robots';
import Card from './Card';


function fn1(x){
    const cardcomp = x.map((card,i)=>{
       
       return  <Card key={i} id={x[i].id} name={x[i].name} email={x[i].email} /> 
      
         }
        
        )
        return cardcomp;
}



export default function Cardlist(props){

    return(
    <>

        {fn1(props.robots)}
    </>
    )
}

const style=StyleSheet.create({
    container:{
        overflow:scroll
    }
});


