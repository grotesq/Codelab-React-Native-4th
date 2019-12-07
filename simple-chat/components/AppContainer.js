import React from 'react';
import { Text } from 'react-native';
import { withContext } from 'context-q';
import firebase from '../firebase/firebaseApp';

function AppContainer(props) {
    React.useEffect( () => {
        console.log( 'sign in anonymously' );
        firebase.auth().signInAnonymously()
        .catch( error => {
            console.warn( error );
        });
        firebase.auth().onAuthStateChanged( function( user ) {
        if( user ) {
            // 로그인
            console.log( 'user', user );
            props.context.update( {
                user: user,
            } );
        }
        else {
            // 로그아웃
        }
        });
    }, [] );
    return (
        <>
            { props.children }
        </>
    )
}

AppContainer = withContext( AppContainer );

export default AppContainer;