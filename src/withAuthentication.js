import React from 'react';
import AuthUserContext from './context/AuthUserContext';
import axios from 'axios';

const withAuthentication = (Component) => (
  class WithAuthentication extends React.Component {
    state = {
      authUser: null
    };

    componentWillMount() {
      axios({
        method: 'get',
        url: '/api/v1/users/me'
      }).then( response => {
        this.setState({ authUser: response.data })
      }
      ).catch((err) => {
        this.setState({ authUser: null });
      })
    }

    render() {
      const { authUser } = this.state;

      return (
        <AuthUserContext.Provider value={authUser}>
          <Component />
        </AuthUserContext.Provider>
      );
    }
  }
)

export default withAuthentication;