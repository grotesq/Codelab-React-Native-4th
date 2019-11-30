import React from 'react';
import { Text } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import { withContext } from 'context-q';
import _ from 'underscore';

const Settings = props => {
    const updateSize = text => {
        const value = parseInt( text, 10 );
        if( _.isNaN( value ) ) {
            return false;
        }
        // if( value < 10 ) {
        //     return false;
        // }
        // if( value > 30 ) {
        //     return false;
        // }
        props.context.update( {
            fontSize: value,
        } );
    }
    return (
        <>
            <Text style={{ fontSize: props.context.fontSize }}>설정</Text>
            <Text style={{ fontSize: props.context.fontSize }}>텍스트 크기</Text>
            <Input value={ props.context.fontSize } onChangeText={ updateSize }/>
            <Button onPress={ () => props.navigation.goBack() }>저장</Button>
        </>
    )
}

// Hight Order Component HoC
export default withContext( Settings );