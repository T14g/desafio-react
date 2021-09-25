import React, { useState } from 'react';
import { PostBox, PostTitle, PostContent, Button } from './post-item.styles';

const PostItem = ({
    title,
    content,
    buttonTitle,
    callToAction,
    customClass,
    expandable = false
}) => {

    const [expanded, setExpanded] = useState(false);
    const excerpt = content.slice(0, 140);

    return (
        <PostBox className={customClass}>
            <PostTitle>{title}</PostTitle>
            <PostContent>
                {expanded ? content : excerpt + '...'}
            </PostContent>
            {
                expandable ?
                    <Button onClick={() => setExpanded(!expanded)}>{buttonTitle}</Button>
                    : <Button onClick={callToAction}>{buttonTitle}</Button>
            }

        </PostBox>
    );
}

export default PostItem;