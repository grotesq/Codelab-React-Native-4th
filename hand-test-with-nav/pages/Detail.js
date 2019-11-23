import React from 'react';
import { Button, SafeAreaView, View } from 'react-native';

const Detail = props => {
    return (
        <SafeAreaView>
            <Button title={ '돌아가기' }
                onPress={ () => props.navigation.goBack() }/>
        </SafeAreaView>
    );
}

Detail.navigationOptions = {
    title: '디테일'
}

export default Detail;