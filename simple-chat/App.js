import React from 'react';
import { Alert, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import firebaseApp from './firebase/firebaseApp';
import Input from './components/Input';
import Button from './components/Button';
import Center from './components/Center';
import moment from 'moment';

const firestore = firebaseApp.firestore();

export default function App() {
  const [ message, setMessage ] = React.useState( '' );
  const [ messages, setMessages ] = React.useState( [] );
  const send = async () => {
    if( !message ) {
      return Alert.alert( '메시지를 입력하세요' );
    }
    await firestore.collection( 'messages' ).add( {
      message,
      created_at: moment().format( 'YYYY-MM-DD HH:mm:ss' ),
    } );
    setMessage( '' );
  }
  React.useEffect( async () => {
    firestore.collection( 'messages' ).onSnapshot( snapshots => {
      const newList = [];
      snapshots.forEach( doc => {
        newList.push( { ...doc.data(), key: doc.id } );
      } )
      setMessages( newList );
    } )
  }, [] );
  return (
    <SafeAreaView>
      <Center>
        <Input value={ message } onChangeText={ t => setMessage( t ) }/>
        <Button onPress={ send }>전송</Button>
      </Center>
      <FlatList
        data={ messages }
        renderItem={ ({ item }) => <Text>{ item.message }</Text> }
      />
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
