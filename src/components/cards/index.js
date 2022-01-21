import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { CardList, Card, Title, Content, Desc, Link } from './styles/cards.js'

export default function Cards({ children, ...restProps }) {
    return <CardList {...restProps}>{children}</CardList>
}

Cards.Card = function CardsCard({ children, ...restProps}) {
    return <Card {...restProps}>{children}</Card>
}

Cards.Title = function CardsTitle({ children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Cards.Content = function CardsContent({ children, ...restProps}) {
    return <Content {...restProps}>{children}</Content>
}

Cards.Desc = function CardsDesc({ children, ...restProps}) {
    return <Desc {...restProps}>{children}</Desc>
}

Cards.Link = function CardsLink({ to, ...restProps}) {
    return (
        <RouterLink to={to}>
            <Link {...restProps} />
        </RouterLink>
    )
}