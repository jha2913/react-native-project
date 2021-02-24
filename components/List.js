import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import api from '../api/list'
import { LISTDATA } from '../shared/list'

import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'

const List = ({ navigation }) => {

  console.log(list);

  const [list, setList] = useState([]);  

  //, [] <- 함수가 재생성될 조건
  //, [] <- 컴포넌트가 처음 마운트 됐을 때만 생성
  //, [data] <- data라는 객체/변수가 생성되거나 바뀔 때 함수가 생성
  // memoizing function 정의
  const getList = useCallback(async () => {
    const result = await api.list();
    console.log(result.data);
    // state를 갱신해서 다시 그리기
    setList(result.data);
  }, [])

  // useEffect
  // 특정 조건에 맞게 실행하는 함수를 정의
  // , [] 컴포넌트가 처음 마운트 됐을 때 실행되는 함수를 정의
  // , [data] <- data라는 객체/변수가 생성되거나 바뀔 때 함수가 실행
  // componentDidMount : event hook
  // useEffect(()=> {
  //   getList();
  // }, [])

  useEffect(()=>{
    // navigation 이벤트 리스너를 생성
    // 반환 값이 이벤트 리스너 해제 함수
    const unsubscribe = navigation.addListener(
      'focus',
      () => {
        console.log('focus')
        getList();
      }
    )
    
    // clean-up function
    // 객체 소멸 함수

    
    // component가 unmount 되는 시점에 clean-up 함수가 실행됨
    // useEffect(()=>{ 
    //   ...
    //  
    //  return 함수
    // }, [])
    
    

    // navigation이 변경되는 시점에 clean-up 함수가 실행됨
    // return () => {
    //   navigation.removeListener(unsubscribe);
    // }
    return unsubscribe;
  }, [navigation])


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