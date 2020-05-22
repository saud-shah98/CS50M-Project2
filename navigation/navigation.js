import React from 'react';
import {
    createSwitchNavigator,
    createAppContainer,
  } from 'react-navigation'
import {
    createStackNavigator
} from 'react-navigation-stack'
import {
    createBottomTabNavigator
}
from 'react-navigation-tabs'
import {HomePage} from '../screens/home-page.component'


const MainStack = createStackNavigator(
    {
      Home: HomePage,
    },
    {
      initialRouteName: 'Home',
      navigationOptions: {
        headerTintColor: '#a41034',
        headerStyle: {
          backgroundColor: '#fff',
        },
      },
    }
  )

  MainStack.navigationOptions = {
    tabBarIcon: ({focused, tintColor}) => (
      <Ionicons name={`ios-contacts${focused ? '' : '-outline'}`} size={25} color={'red'} />
    ),
  }

  const MainTabs = createBottomTabNavigator(
    {
        Home: HomePage,

    },
    {
      tabBarOptions: {
        activeTintColor: '#a41034',
      },
    }
  )
  export const MovieApp = createAppContainer(MainStack);