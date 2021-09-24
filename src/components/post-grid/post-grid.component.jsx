import React from 'react';
import PostItem from '../post-item/post-item.component';

import { Container } from '../../App.styles';
import { Row } from './post-grid.styled';

const PostGrid = ({ actions }) => {

    return (
        <Container>
            <Row>
                <PostItem
                    title="Site Responsivo Desktop"
                    content="Lorem ipsum dolor, sit amet 
                    consectetur adipisicing elit. Ad molestiae, 
                    hic, quaerat dolor voluptatum aliquam
                    unde mollitia reiciendis explicabo bla
                    nditiis est ipsum nobis praesentium. 
                    Id iure et quo soluta. Minima?"
                    buttonTitle="Leia mais..."
                    callToAction={() => console.log("hello")}
                />

                <PostItem
                    title="Site Responsivo Desktop"
                    content="Lorem ipsum dolor, sit amet 
                    consectetur adipisicing elit. Ad molestiae, 
                    hic, quaerat dolor voluptatum aliquam
                    unde mollitia reiciendis explicabo bla
                    nditiis est ipsum nobis praesentium. 
                    Id iure et quo soluta. Minima?"
                    buttonTitle="Leia mais..."
                    callToAction={() => console.log("hello2")}
                />

                <PostItem
                    title="Site Responsivo Desktop"
                    content="Lorem ipsum dolor, sit amet 
                    consectetur adipisicing elit. Ad molestiae, 
                    hic, quaerat dolor voluptatum aliquam
                    unde mollitia reiciendis explicabo bla
                    nditiis est ipsum nobis praesentium. 
                    Id iure et quo soluta. Minima?"
                    buttonTitle="Leia mais..."
                    callToAction={() => console.log("hello3")}
                />
            </Row>
        </Container>
    );
}

export default PostGrid;