import React, { useState } from 'react';
import { ExpandableStyles, ExpandableItemHeader, ActionButton, ExpandableItemContent, ExpandableItemHeaderTitle } from './expandable-item.styles';

const ExpandableItem = () => {

    const [expanded, setExpanded] = useState(false);

    return (
        <ExpandableStyles>
            <ExpandableItemHeader>
                <ExpandableItemHeaderTitle>
                    Click to Expand
                </ExpandableItemHeaderTitle>
                <ActionButton onClick={() => setExpanded(!expanded)}>
                    {expanded ? 'Close' : 'Open'}
                </ActionButton>
            </ExpandableItemHeader>

            <ExpandableItemContent className={expanded && 'expanded'}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolore dolorum temporibus tenetur adipisci blanditiis rerum obcaecati hic corrupti nihil, quis deleniti nostrum ea esse, quibusdam mollitia? Voluptate, fugiat consectetur.
                </p>
            </ExpandableItemContent>
        </ExpandableStyles>

    );
}

export default ExpandableItem;