import React from 'react';
import Button from '../components/Button';

const DiaryList = props => {
    return (
        <>
            <Button onPress={ () => props.navigation.navigate( 'Form' )}>
                일기 작성
            </Button>
        </>
    )
}

export default DiaryList;