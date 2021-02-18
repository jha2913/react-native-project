import React, { useState, useCallback } from 'react';
import { Text, View, Button, Image } from 'react-native';

const Home = ({navigation}) => {

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Image source={require('../Image/smile.jpg')}
      style={{width: 420, height: 500}} />
        <Text></Text>
        <Button
        title="시작하기"
        onPress={() => { navigation.navigate("List") }}
        style={{width:300, height: 200}} 
        />
        
      </View>
    )
  }

export default Home;