import React from "react";
import { SocialIcon } from "react-social-icons";

export default class SocialButton extends React.Component {
  render() {
    return (
      <span style={{ padding: 10 }}>
        <SocialIcon url={this.props.url} style={{ width: 25, height: 25 }} />
      </span>
    );
  }
}
