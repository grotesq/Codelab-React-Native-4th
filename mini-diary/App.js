import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DiaryList from './pages/DiaryList';
import DiaryForm from './pages/DiaryForm';
import DiaryDetail from './pages/DiaryDetail';

const Navigator = createStackNavigator({
    List: DiaryList,
    Detail: DiaryDetail,
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