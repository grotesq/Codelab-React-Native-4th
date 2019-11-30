import React from 'react';
import { Alert, AsyncStorage, Text } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import Label from '../components/Label';
import Center from '../components/Center';
import { withContext } from 'context-q';
import _ from 'underscore';

const Settings = props => {
    const updateSize = text => {
        const value = parseInt( text, 10 );
        if( _.isNaN( value ) ) {
            return false;
        }
        props.context.update( {
            fontSize: value,
        } );
    }
    const save = async () => {
        const value = parseInt( props.context.fontSize, 10 );
        if( _.isNaN( value ) ) {
            Alert.alert( '유효하지 않은 값입니다' );
            return false;
        }
        if( value < 10 ) {
            Alert.alert( '10보다 작은 수는 입력할 수 없습니다' );
            return false;
        }
        if( value > 40 ) {
            Alert.alert( '40보다 큰 수는 입력할 수 없습니다' );
            return false;
        }
        await AsyncStorage.setItem( 'fontSize', value.toString() );
        props.navigation.goBack();
    }
    return (
        <>
        <Center>
            <Label style={{ fontSize: props.context.fontSize }}>설정</Label>
            <Label style={{ fontSize: props.context.fontSize }}>텍스트 크기</Label>
            <Input value={ props.context.fontSize } onChangeText={ updateSize }/>
            <Button onPress={ save }>저장</Button>
        </Center>
        </>
    )
}

// Hight Order Component HoC
export default withContext( Settings );