import React from 'react'


import { Container, Title, Card, Pass, Name, Button, Res} from './styles/signin'

export default function Signin({ children, ...restProps }) {
    return <Container{...restProps}>{children}</Container>
}

Signin.Title = function SigninTitle({ children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Signin.Card = function SigninForm({ children, ...restProps}) {
    return <Card {...restProps}>{children}</Card>
}

Signin.Input = function SigninInput({children, ...restProps}) {
    return <Name {...restProps}>{children}</Name>
}

Signin.Button = function SigninButton({onClick, children, ...restProps} ) {
    return (
        <Button onClick={onClick} {...restProps}>Launch</Button>
    )   
}
