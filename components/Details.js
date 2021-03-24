import React, { useEffect, useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements'

import { ScrollView } from 'react-native-gesture-handler'
import { LISTDATA } from '../shared/list'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, removeTask } from '../redux/actions/tasks'
import api from '../api/list'

const Details = ({ route, navigation }) => {

  console.log("--detail");
  console.log(route.params);

  const { id } = route.params;

  const [item, setItem] = useState({});


  console.log(item);

  const dispatch = useDispatch();

  const tasks = useSelector(state => state.tasks);
  console.log("--tasks--");
  console.log(tasks);

  const isExistedTask = tasks.filter(item => item.id == id).length > 0 ? true : false;
  console.log("--isExistedTask--");
  console.log(isExistedTask);


  const getDetails = useCallback(async () => {
    const result = await api.get(id);
    console.log(result.data);
    setItem(result.data);
  }, [])

  useEffect(() => {
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
          <Card.Divider />
          <Card.Image style={{ width: 350, height: 210 }} source={{ uri: item.image }}>
          </Card.Image>
          <Card.Divider />
          <Text style={{ marginBottom: 10 }}>
            {item.description}
          </Text>
          {
            isExistedTask
              ?
              <Button
                onPress={() => { dispatch(removeTask(id)) }}

                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: "gray" }}
                title='취소하기'
              />
              :
              <Button
                onPress={() => { dispatch(addTask(item)) }}
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: "red" }}
                title='결과보기' />
          }
        </Card>
      </ScrollView>
    </View>
  )
}

export default Details;