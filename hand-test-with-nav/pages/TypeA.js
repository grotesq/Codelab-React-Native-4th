import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import ImageA from '../assets/hand-type-a.png';

const TypeA = props => {
    return (
        <View>
            <Image source={ ImageA } style={{ width: 272, height: 350 }}/>
            <Text>A. 손등이 위로 오고 손가락 사이를 벌린사람</Text>
            <Text>당신은 감정이 얼굴에 잘 드러나서 조금만 기쁜일이 생겨도 잘 웃는 성격을 가지고 있습니다.
또한 자신의 감정을 확실히 하는 성격으로 복잡하거나 피곤한 것을 싫어합니다.
자신이 좋아하지 않는 사람에게는 단 1%의 기회도 주지않으며 자신이 좋아하는 사람에게는 매우 관대한 편 입니다.
남에게 받은 호의는 반드시 되돌려주고싶어하는 멋진 성격을 가지고 있습니다.
단, 고집이 세서 틀린 길임을 알면서도 직진하는 경향이 있으니 가끔은 고집을 꺾을줄도 알아야 합니다.</Text>
            <Button title={ '돌아가기' } onPress={ () => props.navigation.goBack() }/>
        </View>
    );
}

TypeA.navigationOptions = {
    title: 'Type A',
}

export default TypeA;