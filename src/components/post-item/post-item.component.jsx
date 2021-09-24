import React from 'react';
import { PostBox, PostTitle, PostContent, Button } from './post-item.styles';

const PostItem = ({ title, content, buttonTitle, callToAction }) => {

    return (
        <PostBox>
            <PostTitle>{title}</PostTitle>
            <PostContent>{content}</PostContent>
            <Button onClick={callToAction}>{buttonTitle}</Button>
        </PostBox>
    );
}

export default PostItem;