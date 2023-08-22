import { styled } from "styled-components";
import Card from "../Card";

const Container = styled.div `
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 10px;
`

const Home = () => {
    return (
        <Container>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </Container>
    );
};

export default Home;