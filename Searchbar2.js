import React, { Component, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function Seachbar2({ searchchange }) {
  return (
    <TextInput
      style={styles.input}
      onChangeText={searchchange}
      placeholder={"find random robo..."}
      //value={"your search here"}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 4,
    margin: 30,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    backgroundColor: "#fff"
  }
});
