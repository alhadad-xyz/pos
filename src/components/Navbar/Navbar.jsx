import styled from 'styled-components'
import { getDate, MenuIcon } from './NavbarLogic'

const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    padding: .5em 2em;
`
const Title = styled.h1`
    font-size: 2rem;

`
const Container = styled.div`
    display: flex;
    align-items: center;
    grid-gap: 0 1em;
`
const DateNow = styled.p`
    color: #222;
    font-size: .9rem;
`
const Navbar = () => {
    return (
        <Wrapper>
            <Title>Foodie's</Title>
            <Container>
                <DateNow>{getDate()}</DateNow>
                <MenuIcon />                     
            </Container>
        </Wrapper>
    )
}

export default Navbar