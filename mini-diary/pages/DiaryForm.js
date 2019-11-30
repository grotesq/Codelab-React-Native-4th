import React from 'react';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import Label from '../components/Label';
import { Text } from 'react-native';
import { AsyncStorage } from 'react-native';
import Center from '../components/Center';
import styled from 'styled-components/native';

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
            <Center>
                <Label>날짜</Label>
                <Input value={ date } onChangeText={ text => setDate( text ) }/>
                <Label>날짜는 YYYY-MM-DD 형식으로 입력하세요.</Label>
                <Label>제목</Label>
                <Input value={ subject } onChangeText={ text => setSubject( text ) }/>
                <Label>내용</Label>
                <TextArea value={ content } onChangeText={ text => setContent( text ) }/>
                <Button onPress={ save }>저장</Button>
            </Center>
        </>
    )
}

export default DiaryForm;