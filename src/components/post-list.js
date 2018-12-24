import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsUsers } from '../actions';

import UserHeader from './user-header';

class PostList extends React.Component {
    componentDidMount() {
        //console.log(this.props.fetchPosts());
        this.props.fetchPostsUsers();
    }

    renderList() {
        return this.props.posts.map((post) => {
            return (
                <div className="item" key={ post.id }>
                    <i className="large middle aligned icon user"></i>
                    <div className="content">
                        <h2>{ post.title }</h2>
                        <p>{ post.body }</p>
                    </div>
                    <UserHeader userId={post.userId} />
                </div>
            );
        });
    }

    render() {
        //console.log(this.props.posts);
        return (
            <div className="ui relaxed divided list">{ this.renderList() }</div>
        );
    }
}

const mapStateToProps = state => {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPostsUsers })(PostList);