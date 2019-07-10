import { compose, withHandlers, withProps } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { routes } from '../router';
import EditProfileView from './EditProfileView';
import Api from '../../api';
import {
  viewerOperations,
  viewerSelectors,
} from '../../modules/viewer';

function mapStateToProps(state) {
  return {
    isLoading: state.viewer.editViewer.isLoading,
    viewer: viewerSelectors.getUser(state),
  };
}

const mapDispatchToProps = {
  editProfile: viewerOperations.editViewer,
};

const enhancer = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withProps((props) => ({
    initialValue: {
      fullName: props.viewer.fullName,
      phone: props.viewer.phone,
      avatar: props.viewer.avatar || [],
      location: props.viewer.location,
    },
  })),
  withHandlers({
    handleEditProfile: ({ history, editProfile, viewer }) => async (
      body,
    ) => {
      try {
        let formData = new FormData();
        let imagefile = document.querySelector('#avatar');

        if (imagefile.files.length > 0) {
          formData.append('image', imagefile.files[0]);
          const image = await Api.Image.uploadImages(formData);
          body.avatar = image.data;
        } else {
          body.avatar = viewer.avatar;
        }

        let res = await editProfile(body);
        console.log(res);
        // history.push(routes.home);
      } catch (err) {
        console.log(err);
      }
    },
  }),
);

export default enhancer(EditProfileView);
