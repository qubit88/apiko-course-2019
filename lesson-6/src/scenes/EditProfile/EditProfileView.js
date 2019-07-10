import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import './EditProfile.scss';
import { routes } from '../router';
import {
  FormContainer,
  Input,
  FileInput,
  FormSubmitButton,
} from '../../components/Form';
import { Avatar } from '../../components';
import { required } from '../../services/formValidation';

function EditProfileView({
  initialValue,
  handleEditProfile,
  isLoading,
  viewer,
}) {
  const validation = {
    fullName: { required },
  };

  return (
    <div className="EditProfile">
      <div className="EditProfile__form">
        <h3 className="EditProfile__header">Edit Profile</h3>
        <FormContainer
          initialValue={initialValue}
          validation={validation}
        >
          <div className="EditProfile__file-container">
            <Avatar
              fullName={viewer.fullName}
              avatar={viewer.avatar}
            />
            <FileInput
              name="avatar"
              classWrapper="EditProfile__file-wrapper"
              classLabel="EditProfile__file-label"
              classPreview="EditProfile__file-preview"
              ContainerClassName="EditProfile__file-content"
            />
          </div>

          <Input
            name="fullName"
            placeholder="Tony Stark"
            label="FULL NAME"
          />

          <Input
            name=""
            placeholder="+3 8066 666 6666"
            label="PHONE"
            type="phone"
          />

          <FormSubmitButton
            FieldClassName="EditProfile__button"
            onSubmit={handleEditProfile}
          >
            {isLoading ? 'Loading' : 'Save'}
          </FormSubmitButton>
        </FormContainer>
      </div>
    </div>
  );
}

EditProfileView.propTypes = {};

export default EditProfileView;
