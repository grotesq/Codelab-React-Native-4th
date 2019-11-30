import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import Button from './components/Button';
import Input from './components/Input';
import TextArea from './components/TextArea';

export default function App() {
  return (
    <View style={styles.container}>
      <Input/>
      <TextArea/>
      <Button>
        내가 만든 버튼
      </Button>
      <Button>
        버튼 2
      </Button>
      <Button type="warning">
        버튼 3
      </Button>
      <Button type="danger">
        삭제
      </Button>
      <TextInput/>
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
