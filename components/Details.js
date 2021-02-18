import React from 'react';
import { Text, View } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements'

import { useDispatch } from 'react-redux'
import { addAction } from '../redux/actions'

import { LISTDATA } from '../shared/list'

const Details = ( { route, navigation }) => {

  console.log("--detail");
  console.log(route.params);

  const { id } = route.params;

  const item = LISTDATA.filter(item => item.id == id)[0];
  console.log(item);

  const dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Card>
        <Card.Title>{item.title}</Card.Title>
        <Card.Divider/>
        <Card.Image source={{uri: item.image}}>
        </Card.Image>
        <Card.Divider/>
        <Text style={{marginBottom: 10}}>
          {item.description}
        </Text>
        <Button
          onPress={() => { navigation.navigate("HomeDetails", {id: item.id}) }}
          icon={<Icon name='checkmark' type='ionicon' color='#ffffff' />}
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"red"}}
          title='START' />
      </Card>
    </View>
  ) 
}

export default Details;