import React from 'react';
import { Alert, Text } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import Center from '../components/Center';
import { withContext } from 'context-q';

function Entry( props ) {
    const [name, setName] = React.useState( '' );
    const enter = () => {
        if( !name ) {
            Alert.alert( '방 이름을 입력해주세요.' );
            return;
        }
        if( !props.context.user ) {
            Alert.alert( '잠시 후 다시 시도해주세요.' );
            return;
        }
        props.navigation.navigate( 'Messages', { name } );
    }
    return (
        <>
            <Center>
                {props.context.user && (
                    <Text>사용자명 : 익명{ props.context.user.uid.substr(-4) }</Text>
                )}
                <Text>입장하실 방 이름을 입력해주세요</Text>
                <Input value={ name } onChangeText={ text => setName( text ) }/>
                <Button onPress={ enter }>입장</Button>
            </Center>
        </>
    );
}

Entry = withContext( Entry );

export default Entry;