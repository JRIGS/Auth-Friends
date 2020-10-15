import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import Loader from 'react-loader-spinner';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials).then(() => {
            this.props.history.push('/friends-list');
        });
    };


    render() {
        return (
            <div>
                <form className='addForm' onSubmit={this.login}>
                <h1>Login</h1>
                    <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={this.state.credentials.username}
                    onChange={this.handleChanges}
                    />
                    <input
                    type='password'
                    placeholder='Password'
                    name='password'
                    value={this.state.credentials.password}
                    onChange={this.handleChanges}
                    />
                    <button className='formBtn'>
                        {this.props.loggingIn ? (
                            <Loader type='ThreeDots' color='blue' height='8' width='22' />
                        ):(
                            'Login'
                        )}
                        </button>
                </form>
                {this.props.error && <p className="error">{this.props.error}</p>}
            </div>
        );
    }
}

const mapStateToProps = ( { loggingIn, error }) => ({
    error,
    loggingIn
});


export default connect(
    mapStateToProps,
    { login }
)(Login);