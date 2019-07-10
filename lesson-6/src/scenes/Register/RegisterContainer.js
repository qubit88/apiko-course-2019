import { compose, withHandlers, withProps } from 'recompose';
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
  withProps(() => ({
    initialValue: {
      email: '',
      fullName: '',
      password: '',
      confirm: '',
    },
  })),
  withHandlers({
    handleRegister: (props) => async ({ email, password }) => {
      await props.register({ email, password });
      props.history.push(routes.home);
    },
  }),
);

export default enhancer(RegisterView);
