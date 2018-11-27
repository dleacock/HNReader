import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts} from "../actions/actions";
import Post from "../components/Post";

// React component that iterates over the posts in the state
// and passes prop data to child component. To keep api calls to a minimum
// the only fetches the list when brower is refreshed. A feature to implement
// in production is to only update the state once an hour (for example).
class HNReaderApp extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchPosts());
    }

    render() {
        return (
            <div className="postList">
                HackerNews Top 10
                <ul className="list-inline">
                    {
                        Object.keys(this.props.posts).map(key => {
                            return (
                                <li className="postList__post" key={key}>
                                    <Post
                                        title={this.props.posts[key]['title']}
                                        url={this.props.posts[key]['url']}
                                    />
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

HNReaderApp.propTypes = {
    dispatch: PropTypes.func.isRequired,
    posts: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    const {posts} = state;
    return {
        posts
    }
}

export default connect(mapStateToProps)(HNReaderApp);

