import React, { useEffect, useState } from 'react';
import './scss/profile-styles.css';
import { UserIcon } from 'Components/UserIcon';
import { Button, Card, Text } from '@nextui-org/react';
import { GetUserInfo } from 'api';
import EditProfile from './EditProfile';
import Avatar from 'react-avatar';

function Profile() {
  const [userInfo, setUserInfo] = useState({});
  const [userLoaded, setUserLoaded] = useState(false);
  const [editProfileVisible, setEditProfileVisible] = useState(false);

  const editProfileHandler = () => setEditProfileVisible(true);
  const closeEditProfileHandler = () => {
    setEditProfileVisible(false);
  };

  useEffect(() => {
    GetUserInfo()
      .then((data) => setUserInfo(data))
      .then(() => setUserLoaded(true));
  }, []);

  return (
    <div className="profile-main">
      <Avatar name={userInfo.email} round size="80" textSizeRatio={2} />
      <Text
        h1
        size={60}
        css={{
          textGradient: '45deg, $blue600 -20%, $pink600 50%',
        }}
        weight="bold"
      >
        {userInfo.email}
      </Text>
      <Card css={{background: '$myColor'}} style={{padding: '1.5rem', width: '80%'}}>
        <div className="profile-header">
          <Button color="secondary" onPress={editProfileHandler} rounded>
            Edit
          </Button>
        </div>
        <div className="profile-content">
          <Text>
            Thank you for becoming a Marcus Bot user. make sure your billing
            information is up to date or change your email/pass word form this
            page.
          </Text>
          <Text
            css={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
              gap: '1rem',
            }}
          >
            {userLoaded && (
              <>
                <span>Company Email: {userInfo.email}</span>
                <span>Company Phone: {userInfo.phone}</span>
                <span>Company Address: {userInfo.address}</span>
                <span>Company Website: {userInfo.website}</span>
                <span>Accounts Managed: {userInfo.accountsManaged}</span>
                <span>Payment Status: {userInfo.billStatus}</span>
                <span>Company Logo: {userInfo.logo}</span>
              </>
            )}
          </Text>
        </div>
      </Card>
      <EditProfile
        editProfileVisible={editProfileVisible}
        closeEditProfileHandler={closeEditProfileHandler}
        userInfo={userInfo}
      />
    </div>
  );
}

export default Profile;
