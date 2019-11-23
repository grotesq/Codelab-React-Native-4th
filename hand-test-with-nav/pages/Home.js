import React from 'react';
import { Button, Image, SafeAreaView, TouchableOpacity, View } from 'react-native';
import HGroup from '../components/HGroup';
import Spacer from '../components/Spacer';
import TypeA from '../assets/hand-type-a.png';
import TypeB from '../assets/hand-type-b.png';
import TypeC from '../assets/hand-type-c.png';
import TypeD from '../assets/hand-type-d.png';

const imageStyle = { width: 136, height: 175 };

const Home = props => {
    return (
        <SafeAreaView>
            <HGroup>
                <TouchableOpacity onPress={ () => props.navigation.navigate( 'TypeA' )}>
                    <Image source={ TypeA } style={ imageStyle }/>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => props.navigation.navigate( 'TypeB' )}>
                    <Image source={ TypeB } style={ imageStyle }/>
                </TouchableOpacity>
            </HGroup>
            <HGroup>
                <TouchableOpacity onPress={ () => props.navigation.navigate( 'TypeC' )}>
                    <Image source={ TypeC } style={ imageStyle }/>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => props.navigation.navigate( 'TypeD' )}>
                    <Image source={ TypeD } style={ imageStyle }/>
                </TouchableOpacity>
            </HGroup>
        </SafeAreaView>
    );
}

Home.navigationOptions = {
    title: '심리 테스트'
}

export default Home;