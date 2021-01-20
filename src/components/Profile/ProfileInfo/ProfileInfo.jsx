import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/user.png';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      {/* <div>
        <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" />
      </div> */}
      <div className={s.profileInfo}>
        <img
          className={s.userPhoto}
          src={
            props.profile.photos.large ? props.profile.photos.large : userPhoto
          }
        />
        <ProfileStatus status={'Hello my friends'} />
        <div>
          <strong>
            <span className={s.profileInfoProperties}>Full name:</span>
            {' ' + props.profile.fullName}
          </strong>
        </div>
        <div className={s.descriptionBlock}>
          <div>
            <strong>
              <span className={s.profileInfoProperties}>Description:</span>
              {props.profile.aboutMe ? ' ' + props.profile.aboutMe : ''}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
