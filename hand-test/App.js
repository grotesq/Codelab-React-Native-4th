import React from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HGroup from './HGroup';
import TypeA from './assets/hand-type-a.png';
import TypeB from './assets/hand-type-b.png';
import TypeC from './assets/hand-type-c.png';
import TypeD from './assets/hand-type-d.png';

// <Image source={ require( './assets/hand-type-a.png' ) }/>
export default function App() {
  const [ type, setType ] = React.useState( '' );
  return (
    <View style={styles.container}>
      { type === '' && (
        <>
          <HGroup>
            <TouchableOpacity onPress={ () => setType( 'a' ) }>
              <Image source={ TypeA } style={{ width: 136, height: 175 }}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => setType( 'b' ) }>
              <Image source={ TypeB } style={{ width: 136, height: 175 }}/>
            </TouchableOpacity>
          </HGroup>
          <HGroup>
            <TouchableOpacity onPress={ () => setType( 'c' ) }>
              <Image source={ TypeC } style={{ width: 136, height: 175 }}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => setType( 'd' ) }>
              <Image source={ TypeD } style={{ width: 136, height: 175 }}/>
            </TouchableOpacity>
          </HGroup>
        </>
      ) }
      { type === 'a' && (
        <>
          <Image source={ TypeA } style={{ width: 272, height: 350 }}/>
          <Text>A. 손등이 위로 오고 손가락 사이를 벌린사람</Text>
        </>
      ) }
      { type === 'b' && (
        <>
          <Image source={ TypeB } style={{ width: 272, height: 350 }}/>
          <Text>B. 손등이 위로 오고 손가락 사이를 오므린 사람</Text>
        </>
      ) }
      { type !== '' && (
        <Button title={ '돌아가기' } onPress={ () => setType( '' ) }/>
      ) }
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
