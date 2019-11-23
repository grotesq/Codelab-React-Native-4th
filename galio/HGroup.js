import React from 'react';
import { View } from 'react-native';

function HGroup( props ) {
    return (
        <View style={{ flexDirection: 'row' }}>
            { props.children }
        </View>
    )
}

export default HGroup;
