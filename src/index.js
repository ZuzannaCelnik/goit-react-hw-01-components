import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import user from './components/1_Profiles/user.json';
import data from './components/2_Statistic/data.json';
import friends from './components/3_Friends/friends.json';
import transactions from './components/4_History/transactions.json';

import { Profile } from './components/1_Profiles/Profile';
import { Statistics } from './components/2_Statistic/Statistic';
import { FriendList } from './components/3_Friends/FriendsList';
import { TransactionHistory } from './components/4_History/History';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </App>
  </React.StrictMode>
);