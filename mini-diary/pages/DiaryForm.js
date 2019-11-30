import React from 'react';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { Text } from 'react-native';
import { AsyncStorage } from 'react-native';

const DiaryForm = props => {
    const [ date, setDate ] = React.useState( '' );
    const [ subject, setSubject ] = React.useState( '' );
    const [ content, setContent ] = React.useState( '' );
    const save = async () => {
        const diary = {
            id: 'diary-' + ( new Date().getTime() ),
            date,
            subject,
            content,
        };

        let list = await AsyncStorage.getItem( 'diary' );
        if( !list ) {
            list = [];
        }
        else {
            list = JSON.parse( list );
        }
        list.push( diary );
        await AsyncStorage.setItem( 'diary', JSON.stringify( list ) );
        props.navigation.navigate( 'List' );
    }
    return (
        <>
            <Text>날짜</Text>
            <Input value={ date } onChangeText={ text => setDate( text ) }/>
            <Text>날짜는 YYYY-MM-DD 형식으로 입력하세요.</Text>
            <Text>제목</Text>
            <Input value={ subject } onChangeText={ text => setSubject( text ) }/>
            <Text>내용</Text>
            <TextArea value={ content } onChangeText={ text => setContent( text ) }/>
            <Button onPress={ save }>저장</Button>
        </>
    )
}

export default DiaryForm;