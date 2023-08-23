import { IconDownload, IconShare, IconThumbDown, IconThumbUp } from "@tabler/icons-react";
import { styled } from "styled-components";

// Expand componnet
import ExpandableText from "../ExpandableText";

import Comments from "../Comments";
import Card from '../Card'

const Container = styled.div `
    display: flex;
    gap: 24px;
`

const Content = styled.div `
    flex: 5;
    margin: 15px;

    & h1 {
        font-size: 18px;
        font-weight: 400;
        margin-top: 20px;
        margin-bottom: 10px;
        color: ${({theme}) => theme.text};
    }
`

const VideoWrapper = styled.div `

    & iframe {
        border-radius: 15px;
    }
`

const Details = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;

    & span {
        color: ${({theme}) => theme.textSoft}
    }
`

const Buttons = styled.div `
    display: flex;
    align-items: center;
    gap: 15px;
`

const Button = styled.button `
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    color: ${({theme}) => theme.text};
    cursor: pointer;
    gap: 3px;
    padding: 5px;
    border-radius: 10px;

    &:hover {
        background-color: ${({theme}) => theme.hover};
    }
`

const Hr = styled.hr `
    margin: 10px 0;
    border: .5px solid ${({theme}) => theme.soft};
`

const Channel = styled.div `
    display: flex;
    justify-content: space-between;
`

const ChannelInfo = styled.div `
    display: flex;
    gap: 20px;

    & img {
            width: 45px;
            height: 45px;
            border-radius: 50%;        
        }
`

const ChannelDetail = styled.div `
    display: flex;
    flex-direction: column;
    color: ${({theme}) => theme.text};

    & .channelName {
        font-weight: 500;
    }

    & .channelSubs {
        color: ${({theme}) => theme.textSoft};
        margin-top: 5px;
        margin-bottom: 20px;
        font-size: 12px;
    }

    & p {
        font-size: 14px;
        line-height: 20px;
    }

`

const SubBtn = styled.button `
    height: max-content;
    border: none;
    background-color: red;
    color: #fff;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
`

const Recommendation = styled.div `
    flex: 2;
`

const Video = () => {

    const text = `Watch live as our mega Moon rocket launches an uncrewed Orion spacecraft on a 26-day mission around the Moon and back to Earth. NASA is targeting Wednesday, Nov. 16, for the launch of the Artemis I Moon mission during a two-hour launch window that opens at 1:04 a.m. EST (0604 UTC). During #Artemis I, Orion will lift off aboard the Space Launch System (SLS) rocket, and travel 280,000 miles (450,000 km) from Earth and 40,000 miles (64,000 km) beyond the far side of the Moon, carrying science and technology payloads to expand our understanding of lunar science, technology developments, and deep space radiation.  
    Through Artemis missions, NASA will land the first woman and the first person of color on the Moon, paving the way for a long-term lunar presence and serving as a steppingstone to send astronauts to Mars. We are going.
    Correction: At 1:57:26, Walt Cunningham is listed as an Apollo 17 astronaut. He was part of the Apollo 7 crew.
    More: https://www.nasa.gov/artemis`

    return (
        <Container>
            <Content>
                <VideoWrapper>
                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/CMLD0Lp0JBg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </VideoWrapper>
                <h1>Artemis I Launch to the Moon (Official NASA Broadcast) - Nov. 16, 2022</h1>
                <Details>
                    <span>10M views • Streamed 9 months ago</span>
                    <Buttons>
                        <Button><IconThumbUp/> 2M</Button>
                        <Button><IconThumbDown/> Dislike</Button>
                        <Button><IconShare/> Share</Button>
                        <Button><IconDownload/> Donwload</Button>
                    </Buttons>
                </Details>
                <Hr/>
                <Channel>
                    <ChannelInfo>
                        <img src="https://yt3.googleusercontent.com/2kw8s66dhLUegJ3XrqZSkZMfp77CRhCfYm1NurDwDB2L9sT_-CaoUix_iWjoE_t66b07JzoR=s176-c-k-c0x00ffffff-no-rj"/>
                        <ChannelDetail>
                            <span className="channelName">NASA</span>
                            <span className="channelSubs">11.2M subscribers</span>
                            <ExpandableText text={text} />
                        </ChannelDetail>
                    </ChannelInfo>
                    <SubBtn>Subscribe</SubBtn>
                </Channel>
                <Hr/>
                <Comments/>
            </Content>
            <Recommendation>
                <Card type='sm' />
                <Card type='sm' />
                <Card type='sm' />
                <Card type='sm' />
                <Card type='sm' />
                <Card type='sm' />
                <Card type='sm' />
                <Card type='sm' />
                <Card type='sm' />
                <Card type='sm' />
            </Recommendation>
        </Container>
    );
};

export default Video;