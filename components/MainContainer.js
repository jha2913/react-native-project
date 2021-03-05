
import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './Home'
import List from './List'
import Details from './Details'
import Actions from './Actions'
import HWTest from './HWTest'
import HomeDetails from './HomeDetails'
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useDispatch, useSelector } from 'react-redux';




const Tab = createBottomTabNavigator();
const ListStack = createStackNavigator();
const HomeStack = createStackNavigator();
const HomeDetailsStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{title:"Happy Smile", headerTitleAlign:"center"}} />
      <HomeStack.Screen name="Details" component={Details} options={{title:"Details", headerTitleAlign:"center"}}  />
      <HomeStack.Screen name="HomeDetails" component={HomeDetails} options={{title:"Lobby / 명언모음", headerTitleAlign:"center"}}  />
    </HomeStack.Navigator>
  )
}

const ListStackScreen = () => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name="List" component={List} options={{title:"목 록", headerTitleAlign:"center"}} />
      <ListStack.Screen name="Details" component={Details} options={{title:"테스트", headerTitleAlign:"center"}}  />
      <ListStack.Screen name="HomeDetails" component={HomeDetails} options={{title:"Check", headerTitleAlign:"center"}}  />
    </ListStack.Navigator>
  )
}
const HomeDetailsScreen = () => {
  return (
    <HomeDetailsStack.Navigator>
    
    <HomeDetailsStack.Screen name="Lobby" component={HomeDetails} options={{title:"Lobby / 명언모음", headerTitleAlign:"center"}}  />
    </HomeDetailsStack.Navigator>
  )
}


const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch(route.name){

      case 'Home':
        iconName = focused
          ? 'home'
          : 'home-outline'; 
        break;
        case 'Lobby':
          iconName = focused
            ? 'heart-half-outline'
            : 'heart-half-outline'; 
          break;     
      case 'List':
        iconName = focused
          ? 'list'
          : 'list-outline'; 
        break;
      case 'Result':
        iconName = focused
          ? 'checkmark'
          : 'checkmark-outline'; 
        break;     
        case 'HWTest':
          iconName = focused
            ? 'mark'
            : 'checkmark-outline'; 
          break;     
  
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
})

const tabBarOptions= {
  activeTintColor: 'yellow',
  inactiveTintColor: 'blue',
  activeBackgroundColor: 'black'
}

export default function Main() {
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log("-- main is mounted--")
    // back-end에서 tasks 데이터를 가져오고, global state를 갱신
    dispatch({type:"FETCH_TASKS"})
  }, [])



  return (
    
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Lobby" component={HomeDetailsScreen} />
            <Tab.Screen name="List" component={ListStackScreen} />
            <Tab.Screen name="Result" component={Actions} />
            <Tab.Screen name="HWTest" component={HWTest} />
            
            
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    
  );
}