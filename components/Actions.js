import React from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import { ListItem, Button, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

const Actions = () => {

  const actions = useSelector(state => state.actions);
  console.log(actions);

  return(
    <View style={{flex:1}}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", justifyContent: 'center' }}>
      {
        actions.map((item, i) => (
          <ListItem containerStyle={{width:"100%"}} key={i}>
            <Avatar source={{uri: item.image}} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))
      }
      
      </ScrollView>
      <Button
        title="테스트 결과"
        onPress={() => { console.log("아직 결과가 없습니다") }} />
    </View>
  )
}

export default Actions;