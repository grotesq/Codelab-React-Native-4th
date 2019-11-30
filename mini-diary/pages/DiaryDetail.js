import React from 'react';
import { Text } from 'react-native';
import _ from 'underscore';
import { NavigationEvents } from 'react-navigation';
import { AsyncStorage } from 'react-native';
import { withContext } from 'context-q';

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
            <Text style={{ fontSize: props.context.fontSize }}>날짜</Text>
            <Text style={{ fontSize: props.context.fontSize }}>{ item.date }</Text>
            <Text style={{ fontSize: props.context.fontSize }}>제목</Text>
            <Text style={{ fontSize: props.context.fontSize }}>{ item.subject }</Text>
            <Text style={{ fontSize: props.context.fontSize }}>내용</Text>
            <Text style={{ fontSize: props.context.fontSize }}>{ item.content }</Text>
        </>
    )
}

DiaryDetail = withContext( DiaryDetail );

export default DiaryDetail;
