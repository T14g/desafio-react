import PostItem from '../post-item/post-item.component';

import { Row, Container } from './post-grid.styled';

const PostGrid = ({ actions }) => {

    const showModal = actions['show-modal'];
    const turnLights = actions['turn-lights'];
    const posts = [
        {
            title: "Post com scroll down",
            content: `Lorem ipsum dolor, sit amet 
            consectetur adipisicing elit. Ad molestiae, 
            hic, quaerat dolor voluptatum aliquam
            unde mollitia reiciendis explicabo bla
            nditiis est ipsum nobis praesentium. 
            Id iure et quo soluta. Minima?
            Lorem ipsum dolor, sit amet 
            consectetur adipisicing elit. Ad molestiae, 
            hic, quaerat dolor voluptatum aliquam
            unde mollitia reiciendis explicabo bla
            nditiis est ipsum nobis praesentium. 
            Id iure et quo soluta. Minima?
            Lorem ipsum dolor, sit amet 
            consectetur adipisicing elit. Ad molestiae, 
            hic, quaerat dolor voluptatum aliquam
            unde mollitia reiciendis explicabo bla
            nditiis est ipsum nobis praesentium. 
            Id iure et quo soluta. Minima?`,
            button: 'Scroll down...',
            class: 'blue',
            fb: null,
            expandable: true
        },
        {
            title: "Post com Modal",
            content: `Lorem ipsum dolor, sit amet 
            consectetur adipisicing elit. Ad molestiae, 
            hic, quaerat dolor voluptatum aliquam
            unde mollitia reiciendis explicabo bla
            nditiis est ipsum nobis praesentium. 
            Id iure et quo soluta. Minima?
            Lorem ipsum dolor, sit amet 
            consectetur adipisicing elit. Ad molestiae, 
            hic, quaerat dolor voluptatum aliquam
            unde mollitia reiciendis explicabo bla
            nditiis est ipsum nobis praesentium. 
            Id iure et quo soluta. Minima?
            Lorem ipsum dolor, sit amet 
            consectetur adipisicing elit. Ad molestiae, 
            hic, quaerat dolor voluptatum aliquam
            unde mollitia reiciendis explicabo bla
            nditiis est ipsum nobis praesentium. 
            Id iure et quo soluta. Minima?`,
            button: 'Open Modal...',
            class: 'yellow',
            fn: showModal,
            expandable: false
        },
        {
            title: "Post com turn lights",
            content: `Lorem ipsum dolor, sit amet 
            consectetur adipisicing elit. Ad molestiae, 
            hic, quaerat dolor voluptatum aliquam
            unde mollitia reiciendis explicabo bla
            nditiis est ipsum nobis praesentium. 
            Id iure et quo soluta. Minima?
            Lorem ipsum dolor, sit amet 
            consectetur adipisicing elit. Ad molestiae, 
            hic, quaerat dolor voluptatum aliquam
            unde mollitia reiciendis explicabo bla
            nditiis est ipsum nobis praesentium. 
            Id iure et quo soluta. Minima?
            Lorem ipsum dolor, sit amet 
            consectetur adipisicing elit. Ad molestiae, 
            hic, quaerat dolor voluptatum aliquam
            unde mollitia reiciendis explicabo bla
            nditiis est ipsum nobis praesentium. 
            Id iure et quo soluta. Minima?`,
            button: 'Turn Lights...',
            class: 'purple',
            fn: turnLights,
            expandable: false
        },
        {
            title: "Post com turn lights",
            content: `Lorem ipsum dolor, sit amet 
            consectetur adipisicing elit. Ad molestiae, 
            hic, quaerat dolor voluptatum aliquam
            unde mollitia reiciendis explicabo bla
            nditiis est ipsum nobis praesentium. 
            Id iure et quo soluta. Minima?
            Lorem ipsum dolor, sit amet 
            consectetur adipisicing elit. Ad molestiae, 
            hic, quaerat dolor voluptatum aliquam
            unde mollitia reiciendis explicabo bla
            nditiis est ipsum nobis praesentium. 
            Id iure et quo soluta. Minima?
            Lorem ipsum dolor, sit amet 
            consectetur adipisicing elit. Ad molestiae, 
            hic, quaerat dolor voluptatum aliquam
            unde mollitia reiciendis explicabo bla
            nditiis est ipsum nobis praesentium. 
            Id iure et quo soluta. Minima?`,
            button: 'Turn Lights...',
            class: 'purple',
            fn: turnLights,
            expandable: false
        },
        {
            title: "Post com scroll down2",
            content: `2Lorem ipsum dolor, sit amet 
            consectetur adipisicing elit. Ad molestiae, 
            hic, quaerat dolor voluptatum aliquam
            unde mollitia reiciendis explicabo bla
            nditiis est ipsum nobis praesentium. 
            Id iure et quo soluta. Minima?
            Lorem ipsum dolor, sit amet 
            consectetur adipisicing elit. Ad molestiae, 
            hic, quaerat dolor voluptatum aliquam
            unde mollitia reiciendis explicabo bla
            nditiis est ipsum nobis praesentium. 
            Id iure et quo soluta. Minima?
            Lorem ipsum dolor, sit amet 
            consectetur adipisicing elit. Ad molestiae, 
            hic, quaerat dolor voluptatum aliquam
            unde mollitia reiciendis explicabo bla
            nditiis est ipsum nobis praesentium. 
            Id iure et quo soluta. Minima?`,
            button: 'Scroll down...',
            class: 'blue',
            fb: null,
            expandable: true
        },
        {
            title: "Post com Modal2",
            content: `2Lorem ipsum dolor, sit amet 
            consectetur adipisicing elit. Ad molestiae, 
            hic, quaerat dolor voluptatum aliquam
            unde mollitia reiciendis explicabo bla
            nditiis est ipsum nobis praesentium. 
            Id iure et quo soluta. Minima?
            Lorem ipsum dolor, sit amet 
            consectetur adipisicing elit. Ad molestiae, 
            hic, quaerat dolor voluptatum aliquam
            unde mollitia reiciendis explicabo bla
            nditiis est ipsum nobis praesentium. 
            Id iure et quo soluta. Minima?
            Lorem ipsum dolor, sit amet 
            consectetur adipisicing elit. Ad molestiae, 
            hic, quaerat dolor voluptatum aliquam
            unde mollitia reiciendis explicabo bla
            nditiis est ipsum nobis praesentium. 
            Id iure et quo soluta. Minima?`,
            button: 'Open Modal...',
            class: 'yellow',
            fn: showModal,
            expandable: false
        }
    ];

    return (
        <Container>
            <Row>
                {
                    posts.map((post) =>
                        <PostItem
                            title={post.title}
                            content={post.content}
                            buttonTitle={post.button}
                            customClass={post.class}
                            callToAction={() => post.fn(post)}
                            expandable={post.expandable}
                        />
                    )
                }
            </Row>
        </Container>
    );
}

export default PostGrid;