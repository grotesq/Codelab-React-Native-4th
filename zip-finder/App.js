import React from 'react';
import { Alert, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import Input from './components/Input';
import Button from './components/Button';

const querystring = require( 'querystring' );

const API_KEY = 'devU01TX0FVVEgyMDE5MTIwNzE1NDExNDEwOTI4OTI=';

const Item = ({item}) => {
  console.log( item );
  return (
    <View style={{ padding: 12 }}>
      <Text style={{ fontSize: 18 }}>({ item.zipNo }) { item.roadAddr }</Text>
    </View>
  )
}

// new URLSearchParams() // error

export default function App() {
  const [keyword, setKeyword] = React.useState('');
  const [list, setList] = React.useState([]);
  const search = () => {
    const params = {
      confmKey: API_KEY,
      keyword,
      resultType: 'json',
      currentPage: 1
    }
    
    axios.get( `http://www.juso.go.kr/addrlink/addrLinkApi.do?` + querystring.stringify( params ) )
      .then( response => {
        setList( response.data.results.juso );
      } )
      .catch( error => {
        Alert.alert( '오류', error.message );
        console.warn( error );
      } );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Input value={ keyword } onChangeText={ text => setKeyword( text ) }/>
      <Button onPress={ search }>검색</Button>

      <FlatList
        data={ list }
        renderItem={ Item }
        keyExtractor={ item => item.bdMgtSn }
      />
    </SafeAreaView>
  );
}

/*
  <Text key={ 'add-1' }>(00112) 서울시 용산구</Text>
  <Text key={ 'add-2' }>(00112) 서울시 용산구</Text>
  <Text key={ 'add-3' }>(00112) 서울시 용산구</Text>
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
