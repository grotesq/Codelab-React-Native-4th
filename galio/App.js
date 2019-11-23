import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'galio-framework';
import HGroup from './HGroup';
import Spacer from './Spacer';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Button>버튼 텍스트</Button>
        <Spacer height={ 12 }/>
        <Button color="error">위험!!!</Button>
        <Spacer height={ 12 }/>
        <Button>버튼 텍스트</Button>
        <Spacer height={ 12 }/>
        <Button color="error">위험!!!</Button>
        <Spacer height={ 12 }/>
        <Button>버튼 텍스트</Button>
        <Spacer height={ 12 }/>
        <Button color="error">위험!!!</Button>
        <Spacer height={ 12 }/>
        <Button>버튼 텍스트</Button>
        <Spacer height={ 12 }/>
        <Button color="error">위험!!!</Button>
        <Spacer height={ 12 }/>
        <Button>버튼 텍스트</Button>
        <Spacer height={ 12 }/>
        <Button color="error">위험!!!</Button>
        <Spacer height={ 12 }/>
        <Button>버튼 텍스트</Button>
        <Spacer height={ 12 }/>
        <Button color="error">위험!!!</Button>
        <Spacer height={ 12 }/>
        <Button>버튼 텍스트</Button>
        <Spacer height={ 12 }/>
        <Button color="error">위험!!!</Button>
        <Spacer height={ 12 }/>
        <Button>버튼 텍스트</Button>
        <Spacer height={ 12 }/>
        <Button color="error">위험!!!</Button>
        <Spacer height={ 12 }/>
      </ScrollView>
    </SafeAreaView>
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
