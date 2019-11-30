import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DiaryList from './pages/DiaryList';
import DiaryForm from './pages/DiaryForm';

const Navigator = createStackNavigator({
    List: DiaryList,
    Form: DiaryForm,
});

const Container = createAppContainer( Navigator );

const App = () => {
    return (
        <>
            <Container/>
        </>
    )
}

export default App;