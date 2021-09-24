import React from 'react';
import { PostBox, PostTitle, PostContent, Button } from './post-item.styles';

const PostItem = ({ title, content, buttonTitle, callToAction, customClass }) => {

    return (
        <PostBox className={customClass}>
            <PostTitle>{title}</PostTitle>
            <PostContent>{content}</PostContent>
            <Button onClick={callToAction}>{buttonTitle}</Button>
        </PostBox>
    );
}

export default PostItem;