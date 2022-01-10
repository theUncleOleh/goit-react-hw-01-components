import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';
import Statistics from './components/Statistics/Statistics';
import data from './components/Statistics/data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';
export default function App() {
  return (
    <div>
      <Profile
        user={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      {/* Statistics */}
      <Statistics title="Upload stats" stats={data} />

      {/* FriendLiist */}
      <FriendList friends={friends} />
    </div>
  );
}
