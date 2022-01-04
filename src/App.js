import Profile from './components/Profile';
import user from './user.json';
export default function App() {
  return (
    <div>
      {' '}
      <Profile
        user={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
}
