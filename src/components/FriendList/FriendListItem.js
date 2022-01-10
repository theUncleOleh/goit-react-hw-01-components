import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
export default function FriendListItem({ name, avatar, status }) {
  return (
    <Fragment>
      <span class="status">{status}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </Fragment>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
