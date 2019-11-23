import React from 'react';
import { View } from 'react-native';

function Spacer( props ) {
    const width = props.width || 0;
    const height = props.height || 0;
    return (
        <View style={{ width, height }}>
            { props.children }
        </View>
    )
}

export default Spacer;
