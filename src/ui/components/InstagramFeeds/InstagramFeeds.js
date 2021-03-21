import React, { useEffect } from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';
import { INSTAGRAM_TOKEN, TEST } from '@src/constants';
import { Link } from '@components/Link';
import styles from './InstagramFeeds.module.scss';

const INTAGRAM_COMPONENT_ID = 'instafeed-container';

const InstagramFeeds = ({ limit = 6 }) => {
  useEffect(() => {
    console.log('TEST', TEST);
    console.log('INSTAGRAM_TOKEN', INSTAGRAM_TOKEN);
    console.log(process.env);

    const waitForElement = () => {
      if (!!window.Instafeed) {
        const accessToken = INSTAGRAM_TOKEN;
        const userFeed = new Instafeed({
          get: 'user',
          target: INTAGRAM_COMPONENT_ID,
          resolution: 'low_resolution',
          limit,
          accessToken,
        });

        if (accessToken) {
          userFeed.run();
        }
      } else {
        setTimeout(waitForElement, 250);
      }
    };
    waitForElement();
  }, [limit]);

  return (
    <>
      <ReactHelmet>
        <script src="https://cdn.jsdelivr.net/gh/stevenschobert/instafeed.js@2.0.0rc1/src/instafeed.min.js" />
      </ReactHelmet>
      <div className={styles.instagramContainer}>
        <h3 className={styles.title}>Síguenos en <Link to='https://www.instagram.com/cuachcuach/' highlight>@cuachcuach</Link></h3>
        <div className={styles.instagramFeeds} id={INTAGRAM_COMPONENT_ID} />
      </div>
    </>
  );
};

export default InstagramFeeds;
