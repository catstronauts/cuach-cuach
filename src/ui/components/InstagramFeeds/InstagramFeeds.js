import React, { useEffect } from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';
import { Link } from '@components/Link';
import styles from './InstagramFeeds.module.scss';

const InstagramFeeds = ({ limit = 6 }) => {
  useEffect(()=> {
    const waitForElement = () => {
      if (!!window.Instafeed) {
        const userFeed = new Instafeed({
          get: 'user',
          target: "instafeed-container",
          resolution: 'low_resolution',
          limit,
          accessToken: process.env.INSTAGRAM_TOKEN
        });
        userFeed.run();
      }
      else {
        setTimeout(waitForElement, 250);
      }
    }
    waitForElement();
  }, [])

  return (
    <>
      <ReactHelmet>
        <script src="https://cdn.jsdelivr.net/gh/stevenschobert/instafeed.js@2.0.0rc1/src/instafeed.min.js" />
      </ReactHelmet>
      <div className={styles.instagramContainer}>
        <h3 className={styles.title}>Síguenos en <Link to='https://www.instagram.com/cuachcuach/' highlight>@cuachcuach</Link></h3>
        <div className={styles.instagramFeeds} id="instafeed-container" />
      </div>
    </>
  );
};

export default InstagramFeeds;
