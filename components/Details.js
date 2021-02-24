import React, { useEffect, useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements'

import { ScrollView } from 'react-native-gesture-handler'
import { LISTDATA } from '../shared/list'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/actions/tasks'
import api from '../api/list'

const Details = ( { route, navigation }) => {

  console.log("--detail");
  console.log(route.params);

  const { id } = route.params;

  const [item, setItem] = useState({});

  
  console.log(item);

  const dispatch = useDispatch();


  const getDetails = useCallback(async () => {
    const result = await api.get(id);
    console.log(result.data);
    setItem(result.data);
  }, [])

  useEffect(()=>{
    getDetails();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <ScrollView>
      <Card>
        <Card.Title>{item.title}</Card.Title>
        <Card.Divider/>
        <Card.Image style= {{width:350, height:210}} source={{uri: item.image}}>
        </Card.Image>
        <Card.Divider/>
        <Text style={{marginBottom: 10}}>
          {item.description}
        </Text>
      
        <Button
          onPress={() => { dispatch(addTask(item)) }}
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"red"}}
          title='결과보기' />
      </Card>
      </ScrollView>
    </View>
  ) 
}

export default Details;