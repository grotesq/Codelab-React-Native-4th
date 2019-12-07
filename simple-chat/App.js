import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Entry from './pages/Entry';
import Messages from './pages/Messages';
import { Provider } from 'context-q';
import AppContainer from './components/AppContainer';

const Navigator = createStackNavigator({
  Entry,
  Messages,
});

const Container = createAppContainer( Navigator );

export default function App() {
  return (
    <Provider defaultState={{user: null}}>
      <AppContainer>
        <Container/>
      </AppContainer>
    </Provider>
  )
}