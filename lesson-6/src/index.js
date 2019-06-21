import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import Router from './scenes/router';
import './styles.css';
import { appOperations } from './modules/app';
import Api from './api';
import store from './store/createStore';

class App extends React.Component {
  constructor(props) {
    super(props);

    props.dispatch(appOperations.init());
  }

  render() {
    if (this.props.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="root">
        <Router />
      </div>
    );
  }
}

store.subscribe(() => {
  console.log('State:', store.getState());
});

function mapStateToProps(state) {
  return {
    isLoading: state.app.isLoading,
  };
}

const AppConnected = connect(mapStateToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <AppConnected />
  </Provider>,
  document.getElementById('root'),
);
