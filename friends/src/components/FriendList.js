import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { getData, deleteFriend } from '../actions';


class FriendList extends React.Component {
    componentDidMount() {
        this.props.getData();
    }

    deleteFriend = id => {
        this.props.deleteFriend(id);
    }

    render() {

        return (
            <div>
                <h1>Your Friends:</h1>
                {this.props.fetchingFriends && <Loader type='Ball-Triangle' color='green' height='100' width='120' />}
                {this.props.friends.map(friend => {
                return <div key={friend.id} className='friendHold'>
                <h3 onClick={() => this.deleteFriend(friend.id)} className='dBtn'>x</h3>
                <p>{friend.name}, {friend.age}</p>
                    <p>{friend.email}</p>
                </div>
                })}
            </div>
        );
    }
}

const mapStateToProps = ({ friends, fetchingFriends }) => ({
    friends,
    fetchingFriends
});

export default withRouter(
    connect(
        mapStateToProps,
        { getData, deleteFriend }
    )(FriendList)
);