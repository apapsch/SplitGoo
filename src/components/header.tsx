import React from 'react';
import { SearchSpec } from '../model';

import '../styles/header.css';

const LANGUAGES = [
  {
    'code': 'ar',
    'name': 'Arabic',
  },
  {
    'code': 'hy',
    'name': 'Armenian',
  },
  {
    'code': 'be',
    'name': 'Belarusian',
  },
  {
    'code': 'bg',
    'name': 'Bulgarian',
  },
  {
    'code': 'ca',
    'name': 'Catalan',
  },
  {
    'code': 'hr',
    'name': 'Croatian',
  },
  {
    'code': 'cs',
    'name': 'Czech',
  },
  {
    'code': 'da',
    'name': 'Danish',
  },
  {
    'code': 'nl',
    'name': 'Dutch',
  },
  {
    'code': 'en',
    'name': 'English',
  },
  {
    'code': 'eo',
    'name': 'Esperanto',
  },
  {
    'code': 'et',
    'name': 'Estonian',
  },
  {
    'code': 'tl',
    'name': 'Filipino',
  },
  {
    'code': 'fi',
    'name': 'Finnish',
  },
  {
    'code': 'fr',
    'name': 'French',
  },
  {
    'code': 'de',
    'name': 'German',
  },
  {
    'code': 'el',
    'name': 'Greek',
  },
  {
    'code': 'iw',
    'name': 'Hebrew',
  },
  {
    'code': 'hu',
    'name': 'Hungarian',
  },
  {
    'code': 'is',
    'name': 'Icelandic',
  },
  {
    'code': 'id',
    'name': 'Indonesian',
  },
  {
    'code': 'it',
    'name': 'Italian',
  },
  {
    'code': 'ja',
    'name': 'Japanese',
  },
  {
    'code': 'ko',
    'name': 'Korean',
  },
  {
    'code': 'lv',
    'name': 'Latvian',
  },
  {
    'code': 'lt',
    'name': 'Lithuanian',
  },
  {
    'code': 'no',
    'name': 'Norwegian',
  },
  {
    'code': 'fa',
    'name': 'Persian',
  },
  {
    'code': 'pl',
    'name': 'Polish',
  },
  {
    'code': 'pt',
    'name': 'Portuguese',
  },
  {
    'code': 'ro',
    'name': 'Romanian',
  },
  {
    'code': 'ru',
    'name': 'Russian',
  },
  {
    'code': 'sr',
    'name': 'Serbian',
  },
  {
    'code': 'sk',
    'name': 'Slovak',
  },
  {
    'code': 'sl',
    'name': 'Slovenian',
  },
  {
    'code': 'es',
    'name': 'Spanish',
  },
  {
    'code': 'sv',
    'name': 'Swedish',
  },
  {
    'code': 'th',
    'name': 'Thai',
  },
  {
    'code': 'tr',
    'name': 'Turkish',
  },
  {
    'code': 'uk',
    'name': 'Ukrainian',
  },
  {
    'code': 'vi',
    'name': 'Vietnamese',
  },
  {
    'code': 'zh-CN',
    'name': 'Chinese Simplified',
  },
  {
    'code': 'zh-TW',
    'name': 'Chinese Traditional',
  },
];


interface HeaderProps {
  onTermSubmit?: (spec: SearchSpec) => void
}

export default class Header extends React.Component<HeaderProps, SearchSpec, any> {

  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      term: '',
      firstLanguage: 'en',
      secondLanguage: 'en',
    };
  }

  setTerm = (event: any) => {
    if (event.target !== null) {
      this.setState({
        term: event.target.value,
      });
    }
  }

  setFirstLanguage = (event: any) => {
    if (event.target !== null) {
      this.setState({
        firstLanguage: event.target.value,
      });
    }
  }

  setSecondLanguage = (event: any) => {
    if (event.target !== null) {
      this.setState({
        secondLanguage: event.target.value,
      });
    }
  }

  submit = (event: any) => {
    if (this.props.onTermSubmit && event.key === 'Enter') {
      this.props.onTermSubmit(this.state);
    }
  }

  render() {
    return <div className="header">
      <input className="search-term" type="text" onChange={this.setTerm} onKeyUp={this.submit} placeholder="Search term" />
      <select className="languages" onChange={this.setFirstLanguage}>
        {LANGUAGES.map(lang => <option key={lang.code} value={lang.code}>{lang.name}</option>)}
      </select>
      <select className="languages" onChange={this.setSecondLanguage}>
        {LANGUAGES.map(lang => <option key={lang.code} value={lang.code}>{lang.name}</option>)}
      </select>
    </div>;
  }
}
