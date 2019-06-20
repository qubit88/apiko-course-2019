import { compose, withHandlers, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
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
    handleLogin: (props) => () => {
      props.login(props.fields);
    },
  }),
);

export default enhancer(LoginView);
