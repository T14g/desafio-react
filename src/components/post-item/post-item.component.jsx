import React, { useState, useRef, useEffect } from 'react';
import {
    PostBox,
    PostTitle,
    ContentWrapper,
    PostContent,
    Button
} from './post-item.styles';

const PostItem = ({
    title,
    content,
    buttonTitle,
    callToAction,
    customClass,
    expandable = false
}) => {

    const postContentRef = useRef(null);
    const [expanded, setExpanded] = useState(false);
    const [contentHeight, setContentHeight] = useState(false);
    const excerpt = content.slice(0, 140);

    useEffect(() => {
        let postContentHeight = postContentRef.current.clientHeight
        setContentHeight(postContentHeight);
    });

    return (
        <PostBox className={customClass} >
            <PostTitle>{title}</PostTitle>

            <ContentWrapper
                expanded={expanded}
                height={contentHeight}
            >
                <PostContent ref={postContentRef}>
                    {expanded ? content : excerpt + '...'}
                </PostContent>
            </ContentWrapper>

            {
                expandable ?
                    <Button onClick={() => setExpanded(!expanded)}>{buttonTitle}</Button>
                    : <Button onClick={callToAction}>{buttonTitle}</Button>
            }

        </PostBox>
    );
}

export default PostItem;