import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ball from './Ball';
import HGroup from './HGroup';
import Spacer from './Spacer';

export default function App() {
  return (
    <View style={styles.container}>
      <HGroup>
        <Ball number={ 12 }/>
        <Spacer width={ 4 }/>
        <Ball number={ 24 }/>
        <Spacer width={ 4 }/>
        <Ball number={ 36 }/>
      </HGroup>
      <Spacer height={ 4 }/>
      <HGroup>
        <Ball number={ 40 }/>
        <Spacer width={ 4 }/>
        <Ball number={ 42 }/>
        <Spacer width={ 4 }/>
        <Ball number={ 44 }/>
      </HGroup>
    </View>
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
