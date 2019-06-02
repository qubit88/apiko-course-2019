import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App({ state }) {
  return (
    <div className="App">
      <h2>{state}</h2>
      <button onClick={() => store.dispatch({ type: "PING" })}>ping</button>
    </div>
  );
}

function createStore(reducer, initialState) {
  return {
    _state: initialState,
    _reducer: reducer,
    _listeners: [],
    dispatch(action) {
      const nextState = this._reducer(this._state, action);
      this._state = nextState;

      this._triggerListeners();
    },
    getState() {
      return this._state;
    },
    subscribe(callback) {
      const listener = {
        id: new Date().getTime(),
        callback
      };

      this._listeners.push(listener);

      //   unsubscribe
      return () => {
        this._listeners = this._listeners.filter(i => i.id !== listener.id);
      };
    },
    _triggerListeners() {
      this._listeners.forEach(listener => listener.callback());
    }
  };
}

function reducer(prevState, action) {
  if (action.type === "PING") {
    return "PONG";
  }

  return prevState;
}

const store = createStore(reducer, "PING");

const ReduxContext = React.createContext(null);

const { Provider: ContextProvider, Consumer } = ReduxContext;

function Provider(props) {
  return (
    <ContextProvider value={props.store}>{props.children}</ContextProvider>
  );
}

function connect(mapStateToProps, mapDispatchToProps) {
  return Component => {
    class Connect extends React.Component {
      constructor(props) {
        super(props);
        this.state = {};
      }

      componentDidMount() {
        this._disposer = store.subscribe(() => {
          const nextState = mapStateToProps(
            this.context.getState(),
            this.props
          );
          this.setState(nextState);
        });
      }

      componentWillUnmount() {
        this._disposer();
      }
      render() {
        return <Component {...this.props} {...this.state} />;
      }
    }

    Connect.contextType = ReduxContext;

    return Connect;
  };
}

function mapStateToProps(state, props) {
  return { state };
}

const ConnectedApp = connect(mapStateToProps)(App);

function Root() {
  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  );
}

// console.log(store.getState());

// const disposer = store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch({ type: "PING" });

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
