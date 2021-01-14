import React from "react";
import Iframe from "react-iframe";
import { SearchSpec } from "../model";

const SEARCH_URL_TEMPLATE = 'https://google.com/search?q=%s&lr=%s'

interface ResultsProps {
  spec: SearchSpec
}

export default class Results extends React.Component<ResultsProps, {}, any> {

  constructor(props: ResultsProps) {
    super(props);
  }

  render() {
    const baseUrl = 'https://google.com/search?q=' + encodeURIComponent(this.props.spec.term) + '&lr=lang_';
    const firstUrl = baseUrl + encodeURIComponent(this.props.spec.firstLanguage);
    const secondUrl = baseUrl + encodeURIComponent(this.props.spec.secondLanguage);
    return <div className="results">
      <Iframe url={firstUrl} className="result-pane" />
      <Iframe url={secondUrl} className="result-pane" />
    </div>;
  }
}