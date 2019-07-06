import { compose, withHandlers, withProps } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { routes } from '../router';
import LoginView from './LoginView';
import { authOperations } from '../../modules/auth';

function mapStateToProps(state) {
  return {
    isLoading: state.auth.login.isLoading,
  };
}

const mapDispatchToProps = {
  login: authOperations.login,
};

const enhancer = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withProps((props) => ({
    initialValue: {
      email: '',
      password: '',
    },
  })),
  withHandlers({
    handleLogin: (props) => async (fields) => {
      console.log('login');
      await props.login(fields);
      props.history.push(routes.home);
    },
  }),
);

export default enhancer(LoginView);
