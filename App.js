import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './components/Home'
import List from './components/List'
import Details from './components/Details'
import Actions from './components/Actions'
import HomeDetails from './components/HomeDetails'

import Ionicons from 'react-native-vector-icons/Ionicons';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './redux/reducers'

const store = createStore(rootReducer)

const Tab = createBottomTabNavigator();
const ListStack = createStackNavigator();
const HomeStack = createStackNavigator();

const HomeDetailsStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{title:"Happy Smile", headerTitleAlign:"center"}} />
      <HomeStack.Screen name="Details" component={Details} options={{title:"Details", headerTitleAlign:"center"}}  />
      <HomeStack.Screen name="HomeDetails" component={HomeDetails} options={{title:"HomeDetails", headerTitleAlign:"center"}}  />
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
    
    <HomeDetailsStack.Screen name="HomeDetails" component={HomeDetails} options={{title:"Lobby / 명언모음", headerTitleAlign:"center"}}  />
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
        case 'HomeDetails':
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

    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
})

const tabBarOptions= {
  activeTintColor: 'yellow',
  inactiveTintColor: 'blue',
  activeBackgroundColor: 'black'
}

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="HomeDetails" component={HomeDetailsScreen} />
            <Tab.Screen name="List" component={ListStackScreen} />
            <Tab.Screen name="Result" component={Actions} />
            
            
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}