import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import _ from 'underscore';

let numbers = [];
_.times( 45, n => numbers.push( n + 1 ) ); // 45번 반복
numbers = _.shuffle( numbers ); // 뒤섞기
numbers.length = 6; // 6개만 사용
numbers = _.sortBy( numbers ); // 정렬

// 리액트 함수형 컴포넌트
function Ball( props ) {
  const ballStyle = {
    width: 50, height: 50, backgroundColor: '#000',
    borderRadius: 25, alignItems: 'center', justifyContent: 'center',
  };
  const textStyle = { fontSize: 18, color: '#fff', fontWeight: 'bold' };
  if( props.number < 16 ) {
    ballStyle.backgroundColor = '#f00';
  }
  else if( props.number < 31 ) {
    ballStyle.backgroundColor = '#00f';
  }
  return (
    <View style={ ballStyle }>
      <Text style={ textStyle }>{ props.number }</Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Ball number={ numbers[ 0 ] }/>
      <Ball number={ numbers[ 1 ] }/>
      <Ball number={ numbers[ 2 ] }/>
      <Ball number={ numbers[ 3 ] }/>
      <Ball number={ numbers[ 4 ] }/>
      <Ball number={ numbers[ 5 ] }/>
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
