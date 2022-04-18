import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps) => (
    `
    background-color: #20212C;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 5px;

    input{
        width: 25px;
        height: 25px;
        margin-right: 10px;
    }

    label{
        text-decoration: ${done ? 'line-through' : 'initial'};
    }
    `
))