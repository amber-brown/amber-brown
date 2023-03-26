import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Layout from '../components/Layout';

function Showcase() {
  return (
    <Layout title="Amber Brown">
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '900px',
          padding: '0 16px',
        }}
      >
        <p>Here are some of the projects that I have been working on:</p>

        <h2>Recipe Book App</h2>
        <p>
          As part of learning React, Redux and Redux Sagas, I built a project
          that incorporated all of these, to see how they work together.
        </p>
        <p>
          You can find this project on my
          {' '}
          <OutboundLink href="https://github.com/amber-brown/recipe-book-frontend">
            github
          </OutboundLink>
        </p>
        <video muted style={{ width: '100%' }} controls>
          <source src="/recipe-app-desktop-recording.mov" type="video/mp4" />
        </video>
      </div>
    </Layout>
  );
}

export default Showcase;
