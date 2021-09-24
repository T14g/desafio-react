import React from 'react';
import PostItem from '../post-item/post-item.component';

import { Row, Container } from './post-grid.styled';

const PostGrid = ({actions}) => {

    const showModal = actions['show-modal'];
    const turnLights = actions['turn-lights'];

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
                    buttonTitle="Scroll estranho..."
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
                    buttonTitle="Abrir Modal"
                    callToAction={showModal}
                />

                <PostItem
                    title="Site Responsivo Desktop"
                    content="Lorem ipsum dolor, sit amet 
                    consectetur adipisicing elit. Ad molestiae, 
                    hic, quaerat dolor voluptatum aliquam
                    unde mollitia reiciendis explicabo bla
                    nditiis est ipsum nobis praesentium. 
                    Id iure et quo soluta. Minima?"
                    buttonTitle="Turn Lights..."
                    callToAction={turnLights}
                />
            </Row>
        </Container>
    );
}

export default PostGrid;