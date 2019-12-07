import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Entry from './pages/Entry';
import Messages from './pages/Messages';

const Navigator = createStackNavigator({
  Entry,
  Messages,
});

const Container = createAppContainer( Navigator );

export default function App() {
  return (
    <Container/>
  )
}