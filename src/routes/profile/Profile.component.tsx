import React from "react";
import Head from "next/head";
import Image from "components/image";
import Icon from "components/icon";
import Placeholder from "components/placeholder";
import { useUser } from "hooks/user";
import styles from "./Profile.module.scss";

const {
  profile,
  profileMain,
  profilePicture,
  profileContent,
  followersIcon,
  followersPlaceholder,
  about,
} = styles;

export default function Profile(): JSX.Element {
  const { name, bio, avatar_url, followers } = useUser();

  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main className={profile}>
        <div className={profileMain}>
          <Image
            isPlaceholder={!avatar_url}
            src={avatar_url}
            className={profilePicture}
          />
          <div className={profileContent}>
            <h1>
              <Placeholder content={name} length="short" />
            </h1>
            <p>
              <Placeholder content={bio} length="long" />
            </p>
            <h3>
              <Icon asset="People" className={followersIcon} />
              {followers ?? <span className={followersPlaceholder} />} Followers
            </h3>
          </div>
        </div>
        <div className={about}>
          <h2>About</h2>
          <p>ㅎㅇㅎㅇㅎ</p>
        </div>
      </main>
    </>
  );
}
