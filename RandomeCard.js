import { StyleSheet, Text, View, Image } from "react-native";
import Card from "./Card";
export default function RandomeCard(props) {
  console.log("randomerebo", props.customrebo);
  //  return <Card id={props.customrebo} name="random" email="randomeemail" />;
  if (props.customrebo != "") {
    return(
      <>
      <Card id={props.customrebo} name="random" email="random email" />
    </>
    );

  }
  return <></>;
}
