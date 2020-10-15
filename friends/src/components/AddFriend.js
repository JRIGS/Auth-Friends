import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

class AddFriend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            friend: {
                name: '',
                email: '',
                age: undefined
            }
        }
    }

    addFriend = e => {
        e.preventDefault();
        this.props.addFriend(this.state.friend)
        this.setState({
            friend: {
                name: '',
                email: '',
                age: undefined
            }
        });
        this.props.history.push('/friends-list');
    };

    handleChanges = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        });
    };



render(){
    return(
        <div className='formContainer'>
            <form className='addForm' onSubmit={this.addFriend}>
            <h1>Add a friend</h1>
            <input
                    onChange={this.handleChanges}
                    placeholder="Name"
                    value={this.state.name}
                    name="name"/>
                    <input
                    onChange={this.handleChanges}
                    placeholder="Email"
                    value={this.state.email}
                    name="email"/>
                    <input
                    onChange={this.handleChanges}
                    placeholder="Age"
                    value={this.state.age}
                    name="age"/>
                    <button className="formBtn" type="submit">Add Friend</button>
                </form>
        </div>
    );
}
}

export default connect(null, { addFriend })(AddFriend);