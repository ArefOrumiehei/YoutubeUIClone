import { styled } from "styled-components";
import { Link } from "react-router-dom";

//Icons
import { IconBrandYoutubeFilled, IconSearch, IconUserCircle } from "@tabler/icons-react";


const Container = styled.div `
    position: sticky;
    top: 0;
    background-color: ${({theme}) => theme.bgLighter};
    height: 60px;
    width: 100%;
    z-index: 10;
`

const Wrapper = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 0 20px;
    position: relative;
`

const Search = styled.div `
    position: absolute;
    right: 100px;
    left: 0;
    margin: auto;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;

    @media screen and (max-width : 450px) {
        display: none;
    }

    & .icon {
        cursor: pointer;
        color: ${({theme}) => theme.textSoft};
    }
`

const Input = styled.input `
    width: 100%;
    font-size: 16px;
    border: none;
    background-color: transparent;
    caret-color: ${({theme}) => theme.textSoft};
    outline: none;
`

const Button = styled.button `
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    border-radius: 5px;
    color: #3ea6ff;
    font-weight: 500;
    cursor: pointer;

    @media screen and (max-width : 400px) {
        padding: 5px;
    }
`

const Logo = styled.div `
    display : flex;
    align-items : center;
    gap : 5px;
    font-weight : bold;

    & span {
        color: ${({theme}) => theme.text};
        @media screen and (max-width : 768px) {
            display: none;
        }
    }
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Link to='/' style={{textDecoration : 'none'}}>
                    <Logo>
                        <IconBrandYoutubeFilled size={35}/>
                        <span>Youtube</span>
                    </Logo>
                </Link>
                <Search>
                    <Input placeholder="Search"/>
                    <IconSearch className="icon"/>
                </Search>
                <Link style={{textDecoration : 'none'}} to='/login'>
                        <Button><IconUserCircle/> Log in</Button>
                </Link>
            </Wrapper>
        </Container>
    );
};

export default Navbar;