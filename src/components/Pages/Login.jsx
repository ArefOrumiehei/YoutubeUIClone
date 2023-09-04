import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: calc(100vh - 60px);
    color: ${({theme}) => theme.text};

    @media screen and (min-width: 250px) {
        height: calc(100vh + 56px);
    }
`

const Wrapper = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${({theme}) => theme.bgLighter};
    border: 1px solid ${({theme}) => theme.soft};
    padding: 20px 50px;
    gap: 10px;
`

const Title = styled.h1 `
    font-size: 24px;
`
const SubTitle = styled.h2 `
    font-size: 20px;
    font-weight: 300;
`
const Input = styled.input `
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${({theme}) => theme.soft};
    caret-color: ${({theme}) => theme.textSoft};
    outline: none;
    padding: 7px;
    font-size: 16px;
    color: ${({theme}) => theme.text};
    width: 100%;
`
const Button = styled.button `
    border: none;
    background-color: ${({theme}) => theme.soft};
    color: ${({theme}) => theme.text};
    padding: 10px 20px;
    font-size: 15px;
    cursor: pointer;
    border-radius: 5px;
    transition: all .2s ease;

    &:hover {
        background-color: darkgreen;
        color: #fff;
    }

`


const More = styled.div `
    display: flex;
    font-size: 12px;
    margin-top: 10px;
    color: ${({theme}) => theme.textSoft};

`

const Links = styled.div `
    display: flex;
    margin-left: 50px;
    gap: 10px;
    
    & .link {
        text-decoration: none;
        color: ${({theme}) => theme.text};
    }
`


const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Log in</Title>
                <SubTitle>to continue to Youtube</SubTitle>
                <Input placeholder="username" />
                <Input type="password" placeholder="password" />
                <Button>Log in</Button>
                <Title>Or</Title>
                <Input placeholder="username" />
                <Input type="email" placeholder="email" />
                <Input type="password" placeholder="password" />
                <Button>Sign up</Button>
            </Wrapper>
            <More>
                <span>English(USA)</span>
                <Links>
                    <Link className="link" to=''>Help</Link>
                    <Link className="link" to=''>Privacy</Link>
                    <Link className="link" to=''>Terms</Link>
                </Links>
            </More>
        </Container>
    );
};

export default Login;