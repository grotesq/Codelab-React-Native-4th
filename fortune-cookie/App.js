import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const imageURL = 'https://www.astrology.com/images-US/games/game-fortune-cookie-1.png';
const messages = [
  '발 밑을 조심하세요!',
  '오래 기다려온 연락이 올 것 같습니다.',
  '건강에 유의하는 하루가 되시길',
];
const index = Math.floor( Math.random() * messages.length );

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
      <Text>{ messages[ index ] }</Text>
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
