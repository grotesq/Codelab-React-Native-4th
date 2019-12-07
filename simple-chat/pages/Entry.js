import React from 'react';
import { Text } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import Center from '../components/Center';

export default function Entry( props ) {
    const [name, setName] = React.useState( '' );
    const enter = () => {
        props.navigation.navigate( 'Messages', { name } );
    }
    return (
        <>
            <Center>
                <Text>입장하실 방 이름을 입력해주세요</Text>
                <Input value={ name } onChangeText={ text => setName( text ) }/>
                <Button onPress={ enter }>입장</Button>
            </Center>
        </>
    );
}