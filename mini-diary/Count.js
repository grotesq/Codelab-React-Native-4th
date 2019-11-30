import React from 'react';
import { AsyncStorage, Button, StyleSheet, Text, View } from 'react-native';

/*
async function name() {
  // async 함수는 결과가 Promise 형태로 리턴된다
  return '10';
}

name().then( value => {
  console.log( value ); // '10'
} );

async function run() {
  const value = await name();
  console.log( value ); // '10';
}
//*/

export default function App() {
  const [ count, setCount ] = React.useState( 0 );
  React.useEffect( async () => {
    // 비동기, Promise
    // AsyncStorage.getItem( 'count' ).then( value => {
    //   if( value ) {
    //     setCount( parseInt( value, 10 ) );
    //   }
    // } );
    const value = await AsyncStorage.getItem('count');
    if( value ) {
      setCount( parseInt( value, 10 ) );
    }
  }, [] );
  const addCount = () => {
    const newCount = count + 1;
    setCount( newCount );
    AsyncStorage.setItem( 'count', newCount.toString() );
  }
  const reset = () => {
    setCount( 0 );
    AsyncStorage.removeItem( 'count' );
  }
  return (
    <View style={styles.container}>
      <Text>{ count }</Text>

      <Button title="클릭" onPress={ addCount }/>
      <Button title="초기화" onPress={ reset }/>
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
