import { IconBrandYoutubeFilled, IconMusic , IconBallFootball, IconNews, IconSettings, IconMessageReport, IconHelp, IconSun, IconUserCircle, IconMoon } from "@tabler/icons-react";
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';

import { styled } from "styled-components";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Container = styled.div `
    flex : 1;
    background-color : ${({theme}) => theme.bgLighter};
    color : ${({theme}) => theme.text};
    height : 100%;
    font-size: 14px;
    position: sticky;
    top: 0;
`

const Wrapper = styled.div `
    padding : 18px 26px;
`

const Logo = styled.div `
    display : flex;
    align-items : center;
    gap : 5px;
    font-weight : bold;
    margin-bottom : 25px;

    & span {
        color: ${({theme}) => theme.text};
    }
`

const Title = styled.h2 `
    font-size: 14px;
    font-weight: 500;
    color: #aaaaaa;
    margin-bottom: 10px;
`

const Item = styled.div `
    display: flex;
    align-items: center;
    gap: 15px;
    cursor: pointer;
    margin-bottom: 10px;
    padding: 5px 10px;

    &:hover {
        background-color: ${({theme}) => theme.hover};
        border-radius: 10px;
    }
`

const Hr = styled.hr `
    margin: 10px 0;
    border : 0.5px solid ${({theme}) => theme.soft};
`

const Login = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
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
    margin-top: 10px;
`

const Menu = ({themeMode , setThemeMode}) => {
    return (
        <Container>
            <Wrapper>
                <Link to='/' style={{textDecoration : 'none'}}>
                    <Logo>
                        <IconBrandYoutubeFilled size={35}/>
                        <span>Youtube</span>
                    </Logo>
                </Link>
                <Item>
                    <HomeIcon/>
                    <span>Home</span>
                </Item>
                <Item>
                    <ExploreOutlinedIcon/>
                    Explore
                </Item>
                <Item>
                    <SubscriptionsOutlinedIcon/>
                    Subscriptions
                </Item>
                <Hr/>
                <Item>
                    <VideoLibraryOutlinedIcon/>
                    Library
                </Item>
                <Item>
                    <HistoryOutlinedIcon/>
                    History
                </Item>
                <Hr/>
                <Login>
                    <span>Log in to like videos, comment and subscribe.</span>
                    <Link style={{textDecoration : 'none'}} to='/login'>
                        <Button><IconUserCircle/> Log in</Button>
                    </Link>
                </Login>
                <Hr/>
                <Title>
                    Best Categories
                </Title>
                <Item>
                    <IconMusic/>
                    Music
                </Item>
                <Item>
                    <IconBallFootball/>
                    Sports
                </Item>
                <Item>
                    <SportsEsportsOutlinedIcon/>
                    Gaming
                </Item>
                <Item>
                    <MovieOutlinedIcon/>
                    Movies
                </Item>
                <Item>
                    <IconNews/>
                    News
                </Item>
                <Item>
                    <LiveTvOutlinedIcon/>
                    Live
                </Item>
                <Hr/>
                <Item>
                    <IconSettings/>
                    Settings
                </Item>
                <Item>
                    <IconMessageReport/>
                    Reports
                </Item>
                <Item>
                    <IconHelp/>
                    Help
                </Item>
                <Item onClick={() => setThemeMode(!themeMode)}>
                    {themeMode ? 
                    <>
                        <IconSun/> <span>Light mode</span>
                    </>
                    :
                    <>
                        <IconMoon/> <span>Dark mode</span>
                    </>
                    }
                </Item>
            </Wrapper>
        </Container>
    );
};

Menu.propTypes = {
    themeMode : PropTypes.bool,
    setThemeMode : PropTypes.any
}

export default Menu;