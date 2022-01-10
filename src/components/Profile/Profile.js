import PropTypes from 'prop-types';
import './Profile.css';

export default function Profile(props) {
  const { avatar, user, tag, location, followers, views, likes } = props;
  return (
    <div className="Profile">
      <div className="Profile__description">
        <img src={avatar} alt={user} className="Profile__avatar" />
        <p className="Profile__name">{user}</p>
        <p className="Profile__tag">{tag}</p>
        <p className="Profile__ocation">{location}</p>
      </div>

      <ul className="Profile__stats">
        <li>
          <span className="Profile__label">Followers</span>
          <span className="Profile__quantity">{followers}</span>
        </li>
        <li>
          <span className="Profile__label">Views</span>
          <span className="Profile__quantity">{views}</span>
        </li>
        <li>
          <span className="Profile__label">Likes</span>
          <span className="Profile__quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

// PropTypes

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
