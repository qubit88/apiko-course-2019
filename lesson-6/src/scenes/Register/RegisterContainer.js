import { compose, withHandlers, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { routes } from '../router';
import RegisterView from './RegisterView';
import { authOperations } from '../../modules/auth';

function mapStateToProps(state) {
  return {
    isLoading: state.auth.register.isLoading,
  };
}

const mapDispatchToProps = {
  register: authOperations.register,
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
        fullName: '',
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
    handleRegister: (props) => async () => {
      await props.register(props.fields);
      props.history.push(routes.home);
    },
  }),
);

export default enhancer(RegisterView);
