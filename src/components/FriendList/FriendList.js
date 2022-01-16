import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import './FriendList.css';

export default function FriendList({ friends }) {
  return (
    <ul className="List">
      {friends.map(friend => (
        // <li key={friend.id} className='List__item'>
        <FriendListItem
          key={friend.id}
          id={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
        // </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ),
};
