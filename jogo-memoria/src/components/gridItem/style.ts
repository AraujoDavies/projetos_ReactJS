import styled from "styled-components";

type containerProp = {
    cardBackground: boolean //recebi a Prop
}
export const Container = styled.div<containerProp>` 
    width: 100%;
    background-color: ${props => props.cardBackground ? '#E2E3E3' : '#1550FF' /*usando a prop :D*/}; 
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-user-select: none;
    -moz-user-select: -moz-none;
    -ms-user-select: none;
     user-select: none;
`
type Props = {
    opacity?: number
}
export const Icon = styled.img<Props>`
    width: 50px;
    height: 50px;
    opacity: ${props => props.opacity ?? 1}
`