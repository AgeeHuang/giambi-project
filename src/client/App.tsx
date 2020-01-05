import React from 'react';
import { library, config, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faRetweet,
  faProjectDiagram,
  faLaptopCode,
  faMinus,
  faArrowAltCircleDown,
} from '@fortawesome/free-solid-svg-icons';
import {
  faCircle,
} from '@fortawesome/free-regular-svg-icons';
import {
  faJsSquare,
  faHtml5,
  faCss3Alt,
  faReact,
  faNodeJs,
  faSass,
  faFacebookSquare,
  faLinkedin,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';

import Routes from './routes';
import Layout from './components/Layout';
import { GlobalProvider } from './store';
import './styles/index.scss';

library.add(
  faLinkedin,
  faArrowAltCircleDown,
  faGithubSquare,
  faFacebookSquare,
  faProjectDiagram,
  faRetweet,
  faLaptopCode,
  faCircle,
  faMinus,
  faJsSquare,
  faHtml5,
  faCss3Alt,
  faReact,
  faNodeJs,
  faSass,
);
if (process.env.NODE_ENV === 'production') {
  config.autoAddCss = false;
}
dom.watch();

const App: React.FC<{}> = () => {
  return (
    <GlobalProvider>
      <Layout>
        <Routes />
      </Layout>
    </GlobalProvider>
  );
}

export default App;
