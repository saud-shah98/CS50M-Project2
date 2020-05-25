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
import {ResultsPage} from '../screens/results-page.component'
import {DetailPage} from '../screens/detail-page.component';

const MainStack = createStackNavigator(
    {
      Home: HomePage,
      Results: ResultsPage,
      Detail: DetailPage,
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
        Results: ResultsPage,
        Detail: DetailPage,


    },
    {
      tabBarOptions: {
        activeTintColor: '#a41034',
      },
    }
  )
  export const MovieApp = createAppContainer(MainStack);