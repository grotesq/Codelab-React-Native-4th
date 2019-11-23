import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import HGroup from './HGroup';

const textStyle = { fontSize: 36 };
export default function App() {
  const [ time, setTime ] = React.useState( moment() );
  const [ showColon, setShowColon ] = React.useState( true );
  /*
    1. 함수형 컴포넌트의 생성된 직후 시점
    2. 함수형 컴포넌트 내의 '무언가'가 변경되었을 때
      -> '무언가' : useEffect의 두번째 인자로 받은 배열 내에 선언된 요소들
  */
  React.useEffect( () => {
    setInterval( () => {
      const now = moment();
      setTime( now );
      const seconds = parseInt( now.format( 'ss' ), 10 );
      setShowColon( seconds % 2 == 0 );
    }, 500 );
  }, [] );
  return (
    <View style={styles.container}>
      <Text style={ textStyle }>{ time.format( 'YYYY년 MM월 DD일' ) }</Text>
      <HGroup>
        <Text style={ textStyle }>{ time.format( 'HH' ) }</Text>
        <Text style={ textStyle }>
          { showColon && (
            <>{ ':' }</>
          ) }
          { !showColon && (
            <>{ ' ' }</>
          ) }
        </Text>
        <Text style={ textStyle }>{ time.format( 'mm' ) }</Text>
        <Text style={ textStyle }>
          { showColon ? <>{ ':' }</> : <>{ ' ' }</> }
        </Text>
        <Text style={ textStyle }>{ time.format( 'ss' ) }</Text>
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
