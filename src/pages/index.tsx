import React from 'react';

import 'normalize.css';
import 'typeface-hk-grotesk';
import Header from '../components/header';
import '../styles/index.css';
import Results from '../components/results';
import { SearchSpec } from '../model';

export default class IndexPage extends React.Component<{}, SearchSpec, any> {
  constructor(props: object) {
    super(props);
    this.state = {
      term: 'hello world',
      firstLanguage: 'en',
      secondLanguage: 'en',
    }
  }

  render() {
    return <div className="page">
      <Header />
      <Results spec={this.state} />
    </div>;
  }
}

