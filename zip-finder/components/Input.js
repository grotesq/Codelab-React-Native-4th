import React from 'react';
import styled from 'styled-components/native';

const TextInput = styled.TextInput`
    width: 300px;
    border: 1px solid #e5e5e5;
    padding: 8px 12px;
    font-size: 18px;
`;

export default props => (
    <TextInput { ...props }/>
)