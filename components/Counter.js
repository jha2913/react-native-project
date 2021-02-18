
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Counter = () => {

  const [count, setCount] = useState(0);

  return (
    <View 
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >

      <Text>You clicked {count} times</Text>

      <Button onPress={() => setCount(count+1)} title="Click me!"></Button>

    </View>
  )
}

export default Counter;