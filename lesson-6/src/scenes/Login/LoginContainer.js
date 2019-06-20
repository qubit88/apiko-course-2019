import { compose, withHandlers, withStateHandlers } from 'recompose';
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
  withStateHandlers(
    {
      fields: {
        email: '',
        password: '',
      },
    },
    {
      handleFieldChange: (state) => (fieldname, value) => ({
        ...state,
        fields: {
          ...state.fields,
          [fieldname]: value,
        },
      }),
    },
  ),
  withHandlers({
    handleLogin: (props) => async () => {
      await props.login(props.fields);
      props.histoty.push(routes.home);
    },
  }),
);

export default enhancer(LoginView);
