import React from 'react';
import { Text, View, Button } from 'react-native';

import { LISTDATA } from '../shared/list'

import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'

const List = ({ navigation }) => {

  const list = LISTDATA;
  console.log(list);

  return (
    <View style={{flex: 1}}>
      <ScrollView 
        contentContainerStyle={
          { flexGrow:1, alignItems:"center", justifyContent:"center"}}
      >
        {
          list.map((item, i) => (
          <ListItem 
            
            containerStyle={{width:"100%", height:185}} 
            key={i}
            onPress={()=>{navigation.navigate("Details", {id: item.id})}}
            >
            <Avatar source={{uri: item.image}} style={{width:220, height:150}}/>
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            </ListItem>
          ))
        }
      </ScrollView>
    </View>
  )
}
export default List;