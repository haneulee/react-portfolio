import React from "react";
import { NavLink } from "react-router-dom";

export default class Card extends React.Component {
  render() {
    return (
      <NavLink
        to={this.props.linkUrl}
        style={{ width: 100, height: 100, margin: 20 }}
      >
        <img src={this.props.imgUrl} alt="" width="100" height="100" />
      </NavLink>
    );
  }
}
