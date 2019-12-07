import React from 'react';
import { Alert, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import firebaseApp from '../firebase/firebaseApp';
import Input from '../components/Input';
import Button from '../components/Button';
import Center from '../components/Center';
import moment from 'moment';
import _ from 'underscore';
import { NavigationEvents } from 'react-navigation';

const firestore = firebaseApp.firestore();

export default function Messages( props ) {
  const [ message, setMessage ] = React.useState( '' );
  const [ messages, setMessages ] = React.useState( [] );
  const send = async () => {
    if( !message ) {
      return Alert.alert( '메시지를 입력하세요' );
    }
    await firestore.collection( 'messages' ).add( {
      message,
      room_id: props.navigation.state.params.name,
      created_at: moment().format( 'YYYY-MM-DD HH:mm:ss' ),
    } );
    setMessage( '' );
  }
  let unsubscribe;
  const connectFirestore = () => {
    unsubscribe = firestore.collection( 'messages' )
        .where( 'room_id', '==', props.navigation.state.params.name )
            .onSnapshot( snapshots => {
                let newList = [];
                snapshots.forEach( doc => {
                newList.push( { ...doc.data(), key: doc.id } );
                } )
                newList = _.sortBy( newList, 'created_at' ).reverse();
                setMessages( newList );
            } )
  }
  /*
    let key = setInterval( () => {}, 1000 );
    clearInterval( key );
  */
  const disconnectFirestore = () => {
    if( unsubscribe ) {
        unsubscribe();
        unsubscribe = null;
    }
  }
  return (
    <SafeAreaView>
      <NavigationEvents
        onWillFocus={ connectFirestore }
        onDidBlur={ disconnectFirestore }
      />
      <Center>
        <Text>Room : { props.navigation.state.params.name }</Text>
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
