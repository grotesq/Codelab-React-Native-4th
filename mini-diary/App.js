import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DiaryList from './pages/DiaryList';
import DiaryForm from './pages/DiaryForm';
import DiaryDetail from './pages/DiaryDetail';
import Settings from './pages/Settings';
import { Provider } from 'context-q';

const Navigator = createStackNavigator({
    List: DiaryList,
    Detail: DiaryDetail,
    Form: DiaryForm,
    Settings: Settings,
});

const Container = createAppContainer( Navigator );

const App = () => {
    return (
        <>
            <Provider defaultState={{ fontSize: '12' }}>
                <Container/>
            </Provider>
        </>
    )
}

export default App;