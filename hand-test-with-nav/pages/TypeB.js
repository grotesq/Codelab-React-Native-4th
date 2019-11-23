import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import ImageB from '../assets/hand-type-b.png';

const TypeB = props => {
    return (
        <View>
            <Image source={ ImageB } style={{ width: 272, height: 350 }}/>
            <Text>B. 손등이 위로 오고 손가락 사이를 오므린 사람</Text>
            <Text>배려심이 강해 자신보다 남에게 맞추는게 편하다고 생각하는 성격을 가지고 있습니다.
외관상으로는 열정이 넘치고 친절해보이지만 내적으로는 안일한 생활을 추구하려는 경향을 가지고 있습니다.
잠자기를 좋아해서 주변 사람과 일에 크게 신경 쓰지 않으며 자기중심적 입니다.
또한 감정의 기복이 심하기도 한 당신은 게을러서 가끔은 ‘어떻게든 되겠지’ 라는 마음을 가지고 있습니다.
그러나 인내심이 강한 당신은 모든지 자신이 이겨내려 하며 특정 사물 혹은 사람 때문에 다투고 빼앗기는 행위를 굉장히 싫어합니다.</Text>
            <Button title={ '돌아가기' } onPress={ () => props.navigation.goBack() }/>
        </View>
    );
}

TypeB.navigationOptions = {
    title: 'Type A',
}

export default TypeB;