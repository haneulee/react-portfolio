import React from "react";
import { NavLink } from "react-router-dom";

export default class Card extends React.Component {
  render() {
    const imageClick = () => {
      console.log("Click");
    };

    return (
      <NavLink
        to={this.props.linkUrl}
        style={{ width: 100, height: 100, margin: 20 }}
      >
        <img
          src={this.props.imgUrl}
          //   onClick={() => imageClick()}
          alt=""
          width="100"
          height="100"
        />
      </NavLink>
      //   <Route path={this.props.linkUrl} children={({ match }) => (
      //     <Link replace={to === location.pathname} to={this.props.linkUrl}><Button>{to}</Button></Link>
      // )}/>
    );
  }
}
