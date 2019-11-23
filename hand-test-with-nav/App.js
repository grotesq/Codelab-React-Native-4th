import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home';
import TypeA from './pages/TypeA';
import TypeB from './pages/TypeB';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// 여러개의 네비게이터를 생성할 수 있고 서로 겹치는 상태로 생성할 수도 있음
const Navigator = createStackNavigator( {
  Home: Home,
  TypeA: TypeA,
  TypeB: TypeB,
} );
// 네비게이터들을 하나로 묶어서 표시하는 컨테이너
const Container = createAppContainer( Navigator );

export default function App() {
  return (
    <Container/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
