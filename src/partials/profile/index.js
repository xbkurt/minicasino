import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import './index.scss';
import { Typography } from 'antd';

import { getUserImage } from 'utils';

const { Title } = Typography;

function Profile() {
  const profileInfo = useSelector((state) => state.login.player);
  let localProfileInfo = JSON.parse(localStorage.getItem('userInfo'));

  let profile =
    Object.keys(profileInfo).length > 0 ? profileInfo : localProfileInfo;

  let userImage = useMemo(() => getUserImage(profile.username));

  return (
    <>
      <div className='profile-container'>
        <div className='img-position'>
          <img className='rounded' src={userImage} alt='Profile picture'></img>
        </div>
        <div className='info-position'>
          <Title level={4}>{profile.name ? profile.name : 'Eric Beard'}</Title>
          <Title level={5}>
            {profile.event ? profile.event : 'I saw you won 500 SEK last time!'}
          </Title>
        </div>
      </div>
    </>
  );
}

export default Profile;
