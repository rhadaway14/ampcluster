import styled from 'styled-components';

export const CardList = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    // width: 60%
    justify-content: space-evenly;
`;

export const Card = styled.div`
    width: 200px;
    height: 300px;
    padding: 5px 15px;
    background: rgba(255,255,255,0.1);
    border-radius: 15px;
    margin: 10px;
    margin-top: 25px;
    box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
    border-top: 1px solid rgba(255,255,255,0.5);
    border-left: 1px solid rgba(255,255,255,0.5);
    backdrop-filter: blur(5px);
    transition: 1s;
    position: sticky;
    top: 50px;

    &:hover {
        transform: rotateY(-30deg);
    }
`;

export const Title = styled.h2`
    color: rgba(255,255,255,0.25);
    // display: flex;
    text-align: center;
    margin: 5 auto;
    // padding-right: 10px;
`;

export const Content = styled.div`
    padding: 5px;
    text-align: center;
`;

export const Desc = styled.div`
    color: White;
    font-size: 20px;
`;

export const Link = styled.a`
    position: absolute;
    bottom: 15px;
    // right: 50px;
    left: 50px;
    text-align: center;
    border: 1px solid rgba(255,255,255,0.5);
    border-radius: 15px;
    text-decoration: none;
    padding: 5px 15px;
    color: white;
    width: 150px;

    &:hover {
        box-shadow: 0 0 5px  white,
                    0 0 15px  white,
                    0 0 30px  white,
                    0 0 60px  white;
    } 
`;