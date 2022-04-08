import styled from "styled-components";

export const Container = styled.div`
    width: 200px;
    height: 50px;
    border-radius: 10px;
    background-color: #1550FF;
    cursor: pointer;
    display: flex;
    opacity: 1;
    transition: all ease .3s;

    &:hover {
        opacity: 0.8;
    }
`

export const Icon = styled.img`
    
`
export const IconArea = styled.div`
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Label = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    flex: 1;
    font-size: 20px;
    border-left: 1px solid #fff;
`