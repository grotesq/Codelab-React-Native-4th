import React from 'react';
import { Text } from 'react-native';
import _ from 'underscore';
import { NavigationEvents } from 'react-navigation';
import { AsyncStorage } from 'react-native';

let DiaryDetail = props => {
    const [ item, setItem ] = React.useState( {} );
    const load = async () => {
        const id = props.navigation.state.params.id;
        let list = await AsyncStorage.getItem( 'diary' );
        list = list ? JSON.parse( list ) : [];
        const item = _.find( list, element => element.id === id );
        setItem( item );
    }
    return (
        <>
            <NavigationEvents onWillFocus={load}/>
            <Text>날짜</Text>
            <Text>{ item.date }</Text>
            <Text>제목</Text>
            <Text>{ item.subject }</Text>
            <Text>내용</Text>
            <Text>{ item.content }</Text>
        </>
    )
}

export default DiaryDetail;
