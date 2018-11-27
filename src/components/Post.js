import React from 'react';
import PropTypes from 'prop-types';

// Simple stateless component. It wraps a link to the post props from parent.
const Post = (props) => {
    return (
        <ul>
            <a href={props.url}>{props.title}</a>
        </ul>
    );
};

Post.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default Post;