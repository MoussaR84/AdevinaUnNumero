import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from "../Constants/Colors"

const Header=(props)=> {
  return (
    <View style={styles.container}>
          <Text style={styles.header}>{ props.title}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
 
    container: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: "center",
        justifyContent: "center",
        borderColor: "black",
        borderWidth:2,
    },
     header: {
      fontSize: 18,
      color:'black',
    },
    
});

export default Header
