import React from "react";
import { Link } from "react-router-dom";

export default class Card extends React.Component {
  render() {
    const imageClick = () => {
      console.log("Click");
    };

    return (
      <Link
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
        {/* <div style={{ width: 100, height: 100, margin: 20 }}>
          {this.props.linkUrl}
        </div> */}
      </Link>
    );
  }
}
