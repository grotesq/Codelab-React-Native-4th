import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import _ from 'underscore';

const imageURL = 'https://www.astrology.com/images-US/games/game-fortune-cookie-1.png';
let numbers = [];
_.times( 45, n => numbers.push( n + 1 ) ); // 45번 반복
numbers = _.shuffle( numbers ); // 뒤섞기
numbers.length = 6; // 6개만 사용
numbers = _.sortBy( numbers ); // 정렬

export default function App() {
  const source = {
    uri: imageURL,
  };
  const style = {
    width: 238,
    height: 150,
  }
  return (
    <View style={styles.container}>
      <Image source={ source } style={ style }/>
      <Text>{ numbers.join( ', ' ) }</Text>
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
