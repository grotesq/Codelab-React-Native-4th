import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

const url = 'https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/kDx/image/Nr1LCf_PHCUJ85AznXn9Rq8bOR0.jpg';
let number = 0;

export default function App() {
  // 상태 state
  /*
    const opacityState = React.useState( 0.5 ); // 배열
    opacityState[ 0 ] // 값
    opacityState[ 1 ] // 값을 업데이트 시킬 수 있는 함수
    const opacity = opacityState[ 0 ];
    const setOpacity = opacityState[ 1 ];
  */
  const [ opacity, setOpacity ] = React.useState( 0.5 ); // [ 값, 업데이트 함수 ]
  function opacityDown() {
    setOpacity( opacity - 0.1 );
  }
  function opacityUp() {
    setOpacity( opacity + 0.1 );
  }
  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={{ width: 320, height: 214, opacity: opacity }}/>
      <Button title={ '투명하게' } onPress={ opacityDown }/>
      <Button title={ '선명하게' } onPress={ opacityUp }/>
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
