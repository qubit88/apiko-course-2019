import React from 'react';
import { connect } from 'react-redux';
import {
  messagesOperations,
  messagesSelectors,
} from '../../modules/messages';
import { compose, withHandlers, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import { InfiniteLoader, List, AutoSizer } from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once
import { Message } from '../../components/';

function InfiniteChat({
  /** Are there more items to load? (This information comes from the most recent API request.) */
  hasNextPage,
  /** Are we currently loading a page of items? (This may be an in-flight flag in your Redux store for example.) */
  isNextPageLoading,
  /** List of items loaded so far */
  list,
  /** Callback function (eg. Redux action-creator) responsible for loading the next page of items */
  loadNextPage,
}) {
  if (!list || list.length === 0) {
    return <div>Loading...</div>;
  }
  // If there are more items to be loaded then add an extra row to hold a loading indicator.
  const rowCount = hasNextPage ? list.length + 1 : list.length;
  //   const rowCount = 777;
  let firstTime = true;

  // Only load 1 page of items at a time.
  // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
  const loadMoreRows = isNextPageLoading
    ? () => {}
    : async () => {
        if (firstTime) {
          firstTime = false;
          return;
        }
        console.log('load');
        return loadNextPage();
      };

  // Every row is loaded except for our loading indicator row.
  const isRowLoaded = ({ index }) =>
    !hasNextPage || index < list.length;

  // Render a list item or a loading indicator.
  const rowRenderer = ({ index, key, style }) => {
    let content;
    let message;

    if (!isRowLoaded({ index })) {
      content = '';
    } else {
      message = list[index];
      content = message ? (
        <Message key={message.id} item={message} />
      ) : (
        ''
      );
    }

    return (
      <div key={key} style={style}>
        {content}
      </div>
    );
  };

  return (
    <InfiniteLoader
      isRowLoaded={isRowLoaded}
      loadMoreRows={loadMoreRows}
      rowCount={rowCount}
      threshold={2}
    >
      {({ onRowsRendered, registerChild }) => (
        <AutoSizer>
          {({ height, width }) => (
            <List
              ref={registerChild}
              onRowsRendered={onRowsRendered}
              rowRenderer={rowRenderer}
              width={width}
              height={height}
              rowHeight={80}
              rowCount={rowCount}
              //   {...otherProps}
            />
          )}
        </AutoSizer>
      )}
    </InfiniteLoader>
  );
}

const mapStateToProps = (state, props) => ({
  isNextPageLoading: state.messages.fetchNextMessages.isLoading,
  hasNextPage: state.messages.fetchNextMessages.hasNextPage,
  list: messagesSelectors.getMessages(state, props.match.params.id),
});

const mapDispatchToProps = {
  fetchNextMessages: messagesOperations.fetchNextMessages,
  fetchMessages: messagesOperations.fetchMessages,
};

const enhancer = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withHandlers({
    loadNextPage: (props) => () => {
      props.fetchNextMessages(props.match.params.id);
    },
  }),
  lifecycle({
    componentDidMount() {
      // try {
      // if (this.props.items.length === 0) {
      this.props.fetchMessages(this.props.match.params.id);
      // }
      // } catch (err) {}
    },
  }),
);

export default enhancer(InfiniteChat);
