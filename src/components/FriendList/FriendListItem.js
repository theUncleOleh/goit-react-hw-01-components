import PropTypes from 'prop-types';
import { BiCircle } from 'react-icons/bi';
import './FriendList.css';
export default function FriendListItem({ name, avatar, isOnline = 'true' }) {
  return (
    <li className="List__item">
      <span className={`List__status List__status--${isOnline}`}>
        <BiCircle />
      </span>
      <img class="List__avatar" src={avatar} alt="User avatar" width="48" />
      <p class="List__name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
