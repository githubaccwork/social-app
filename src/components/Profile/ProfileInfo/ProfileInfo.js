import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.wallpaper} src="https://www.fotor.com/loopBannerImg/indexBannerImg/banner-01.jpg" alt='wallpaper'/>
            </div>
            <div className={s.discriptionBlock}>
                <img src="./profile_photo.jpg" alt=''/>
                <p>Description</p>
            </div>
        </div>
    );
}

export default ProfileInfo;