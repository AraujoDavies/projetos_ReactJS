import styled from "styled-components";
/* 1 */
export const Container = styled.div`
    margin: 15px 0;
`
/* 2 */
export const Label = styled.div`
    font-size: 13px;
    color: #6a7d8b;
`
export const Value = styled.div`
    font-weight: bold;
    font-size: 40px;
    color: #101C40;
    margin-top: -5px;

    @media (max-width: 750px){
        text-align: center;
    }
`