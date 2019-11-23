import React from 'react';
import { Button, SafeAreaView, View } from 'react-native';

const Home = props => {
    return (
        <SafeAreaView>
            <Button title={ '디테일 페이지로' }
                onPress={ () => props.navigation.navigate( 'Detail' ) }/>
        </SafeAreaView>
    );
}

Home.navigationOptions = {
    title: '홈'
}

export default Home;