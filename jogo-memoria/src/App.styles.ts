import styled from "styled-components";

/* 1 */
export const Container = styled.div`
    width: 750px;
    margin: auto;
    padding: 50px 0;
    display: flex;

    @media (max-width:750px){
        flex-direction: column;
    }
`;
/* 2 */
export const InfoArea = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    
    @media (max-width:750px){
        text-align: center;
    }
`;
/* 3 */
export const Logo = styled.a`
    display: block;
`;
export const Reiniciar = styled.button`
    height: 50px;
    @media (max-width:750px){
        width: 200px;
        margin: auto;
        margin-bottom: 15px;
    }
`;
/* 2 */
export const GridArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;

    @media (max-width:750px){
        margin: 0 10px;
        justify-content: center;
    }
`;
/* 3 */
export const Grid = styled.div`
    width: 430px;
    display: grid;
    grid-columns: (4, 1fr);
    gap: 10px;
`