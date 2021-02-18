import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})

const Greeting = ({ name }) => {
  return (
    <View style={styles.center}>

      <Text>Hello {name}!</Text>      
    </View>
  );
}

const LotsOfGreetings = () => {
  return (
    <View style={[styles.center, {top: 50}]}>

      <Greeting name='Rexxar' />
      <Greeting name='Jaina' />
      <Greeting name='Valeera' />
    </View>
  );
}

export default LotsOfGreetings;