import { styled } from "styled-components";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

//Icons
import { IconMusic , IconBallFootball, IconNews, IconSettings, IconMessageReport, IconHelp, IconSun, IconUserCircle, IconMoon } from "@tabler/icons-react";

//MUI
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';


const Container = styled.div `
    flex : 1;
    background-color : ${({theme}) => theme.bgLighter};
    color : ${({theme}) => theme.text};
    height : calc(100% - 60px);
    font-size: 14px;
    position: fixed;
    top: 60px;
    width: 200px;
    overflow: scroll;

    @media screen and (max-width : 768px) {
        width: 15%;
    }

    &::-webkit-scrollbar {
        display: none;
    }
`

const Wrapper = styled.div `
    padding : 18px 26px;

    @media screen and (max-width : 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media screen and (min-width: 451px) and (max-width : 767px) {
        padding: 15px;
    }

    @media screen and (max-width : 450px) {
        padding: 12px;
    }

    @media screen and (max-width : 400px) {
        padding: 10px;
    }
`

const Title = styled.h2 `
    font-size: 14px;
    font-weight: 500;
    color: #aaaaaa;
    margin-bottom: 10px;

    @media screen and (max-width : 768px) {
        display: none;
    }
`

const Item = styled.div `
    display: flex;
    align-items: center;
    gap: 15px;
    cursor: pointer;
    margin-bottom: 10px;
    padding: 5px 10px;
    border-radius: 10px;
    
    @media screen and (max-width : 768px) {
        margin-bottom: 20px;
    }

    &:hover {
        background-color: ${({theme}) => theme.hover};
    }

    span {
        @media screen and (max-width : 768px) {
            display: none;
        }
    }
`

const Hr = styled.hr `
    margin: 10px 0;
    border : 0.5px solid ${({theme}) => theme.soft};

    @media screen and (max-width : 768px) {
        display: none;
    }
`

const Login = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width : 768px) {
        display: none;
    }
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
                <Item>
                    <HomeIcon/>
                    <span>Home</span>
                </Item>
                <Item>
                    <ExploreOutlinedIcon/>
                    <span>Explore</span>
                </Item>
                <Item>
                    <SubscriptionsOutlinedIcon/>
                    <span>Subscriptions</span>
                </Item>
                <Hr/>
                <Item>
                    <VideoLibraryOutlinedIcon/>
                    <span>Library</span>
                </Item>
                <Item>
                    <HistoryOutlinedIcon/>
                    <span>History</span>
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
                    <span>Music</span>
                </Item>
                <Item>
                    <IconBallFootball/>
                    <span>Sports</span>
                </Item>
                <Item>
                    <SportsEsportsOutlinedIcon/>
                    <span>Gaming</span>
                </Item>
                <Item>
                    <MovieOutlinedIcon/>
                    <span>Movies</span>
                </Item>
                <Item>
                    <IconNews/>
                    <span>News</span>
                </Item>
                <Item>
                    <LiveTvOutlinedIcon/>
                    <span>Live</span>
                </Item>
                <Hr/>
                <Item>
                    <IconSettings/>
                    <span>Settings</span>
                </Item>
                <Item>
                    <IconMessageReport/>
                    <span>Reports</span>
                </Item>
                <Item>
                    <IconHelp/>
                    <span>Help</span>
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