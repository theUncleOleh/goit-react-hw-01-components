import Profile from './components/Profile/Profile';
import user from './data/user.json';
import Statistics from './components/Statistics/Statistics';
import data from './data/data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './data/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';
export default function App() {
  return (
    <div>
      <Profile
        user={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
        // followers={user.stats.followers}
        // views={user.stats.views}
        // likes={user.stats.likes}
      />
      {/* Statistics */}
      <Statistics title="Upload stats" stats={data} />
      {/* FriendLiist */}
      <FriendList friends={friends} />
      {/* TransactionHistory */}
      <TransactionHistory items={transactions} />;
    </div>
  );
}
