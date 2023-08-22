import { useState } from 'react';
import PropTypes from 'prop-types'
import { styled } from 'styled-components';

const Button = styled.button `
    background-color: transparent;
    border: none;
    color: ${({theme}) => theme.textSoft};
    cursor: pointer;
    font-size: 14px;
    margin-top: 10px;

    &:hover {
        color: ${({theme}) => theme.textHover};
    }
`

const ExpandableText = ({ text }) => {
    
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <p>{expanded ? text : text.slice(0, 200) + '...'}</p>
            <Button onClick={toggleExpand}>
                {expanded ? 'Show less' : 'Show more'}
            </Button>
        </div>
    );
};

ExpandableText.propTypes = {
    text : PropTypes.string
}

export default ExpandableText;
