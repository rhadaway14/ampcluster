import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`;

export const Title = styled.h1`
color: white;
margin: 40px auto;
`;

export const Card = styled.div`
width: 300px;
height: 400px;
display: flex;
flex-direction: column;
padding: 5px 15px;
background: rgba(255,255,255,0.1);
border-radius: 15px;
margin: 50px;
box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
border-top: 1px solid rgba(255,255,255,0.5);
border-left: 1px solid rgba(255,255,255,0.5);
backdrop-filter: blur(5px);
`;

export const Pass = styled.input`
font-size: 1.25rem;
font-weight: 700;
padding: .35em .3em;
letter-spacing: 1px;
background-color: rgba(255,255,255,0);
border-radius: 15px;
box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
border: none;
border-top: 1px solid rgba(255,255,255,0.5);
border-left: 1px solid rgba(255,255,255,0.5);
width: 12em;
color: white;
margin: 20px auto;

&:focus {
    outline: none;
}

&:hover {
box-shadow: 0 0 5px  white,
            0 0 15px  white,
            0 0 30px  white,
            0 0 60px  white;
}
`;

export const Name = styled.input`
font-size: 1.25rem;
font-weight: 700;
padding: .35em .3em;
letter-spacing: 1px;
background-color: rgba(255,255,255,0);
border-radius: 15px;
box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
border: none;
border-top: 1px solid rgba(255,255,255,0.5);
border-left: 1px solid rgba(255,255,255,0.5);
width: 12em;
color: white;
margin: 0 auto;
margin-bottom: 20px;

&:focus {
    outline: none;
}

&:hover {
box-shadow: 0 0 5px  white,
            0 0 15px  white,
            0 0 30px  white,
            0 0 60px  white;
}
`;

export const Button = styled.p`
font-size:20px;
margin-top: 60px;
margin-left: auto;
text-align: center;
margin-right: auto;
width: 12em;
background-color: rgba(255,255,255,0);
border-radius: 15px;
box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
border: none;
border-top: 1px solid rgba(255,255,255,0.5);
border-left: 1px solid rgba(255,255,255,0.5);
padding: 5px 10px;

&:hover {
box-shadow: 0 0 5px  white,
            0 0 15px  white,
            0 0 30px  white,
            0 0 60px  white;
}
`;

export const Res = styled.h4`
color: white;
height: 16px;
margin: 0 auto;
`;