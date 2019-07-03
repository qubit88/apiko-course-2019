import { connect } from 'react-redux';
import {
  compose,
  withHandlers,
  withState,
  withProps,
} from 'recompose';
import { withRouter } from 'react-router-dom';
import LikeView from './LikeView';
import { productsOperations } from '../../modules/products';

const mapDispatchToProps = {
  addLike: productsOperations.addLike,
  removeLike: productsOperations.removeLike,
};

const enhancer = compose(
  withRouter,
  connect(
    undefined,
    mapDispatchToProps,
  ),
  withState('likedState', 'setLikedState', {
    set: false,
    value: false,
  }),
  withHandlers({
    onClick: ({
      addLike,
      removeLike,
      id,
      like,
      setLikedState,
    }) => async (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      evt.nativeEvent.stopImmediatePropagation();

      if (like) {
        setLikedState({ set: true, value: false });

        try {
          await removeLike(id);
          // setLikedState({ set: false, value: false });
        } catch (err) {
          // setLikedState({ set: false, value: true });
          console.log(err);
        }
      } else {
        setLikedState({ set: true, value: true });
        try {
          await addLike(id);
          // setLikedState({ set: false, value: true });
        } catch (err) {
          // setLikedState({ set: false, value: false });
          console.log(err);
        }
      }
    },
  }),
);

export default enhancer(LikeView);
