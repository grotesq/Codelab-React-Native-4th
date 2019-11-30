import React from 'react';
import styled from 'styled-components/native';

const CustomButton = styled.TouchableOpacity`

`;
const CustomButtonView = styled.View`
  border: 1px solid #e5e5e5;
  padding: 8px 12px;
  width: 300px;
`;

const CustomButtonText = styled.Text`
  font-size: 18px;
  text-align: center;
  ${ props => props.type === 'danger' ? 'color: #ff0000;': '' }
  ${ props => props.type === 'warning' ? 'color: #ff00ff;': '' }
`;

export default props => (
    <CustomButton { ...props }>
        <CustomButtonView { ...props }>
            <CustomButtonText { ...props }>
                { props.children }
            </CustomButtonText>
        </CustomButtonView>
    </CustomButton>
)