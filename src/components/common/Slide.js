import React from "react";
import styled from "styled-components";

const SlideWrapper = styled.div`
  height: ${props => props.height - 70}px;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const UlWrapper = styled.ul`
  width: 4215%;
  position: relative;
  transition-duration: 0.5s;
  transform: translate3d(
    ${props => -1 * (props.width * props.translateValue)}px,
    0px,
    0px
  );
`;

const ListWrapper = styled.li`
  float: left;
  list-style: none;
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const ButtonWrapper = styled.div`
  padding: 0;
  position: absolute;
  width: 30px;
  top: 43.5%;
  left: 87.5%;
  height: 135px;
`;

const ButtonWrap = styled.div`
  display: block;
  margin: 15px auto;
  width: 10px;
`;

const ButtonLink = styled.a`
  display: block;
  width: 10px;
  height: 10px;
  outline: 0;
  border-radius: 5px;
  cursor: pointer;
  &:hover,
  &:active {
    background: #f00;
  }
`;

const List = props => {
  return (
    <ListWrapper>
      <img src={props.url} alt="" style={{ width: props.width }} />
    </ListWrapper>
  );
};

const Button = props => {
  return (
    <ButtonWrap>
      <ButtonLink
        style={{ background: props.isColor ? "#f00" : "#0468BF" }}
        onClick={e => {
          let target = e.target.parentNode,
            parent = target ? target.parentNode : null,
            list = parent
              ? Array.prototype.slice.call(parent.childNodes, 0)
              : [],
            num = list.indexOf(target);

          props.context.setState({ translateValue: num, buttonList: list });
        }}
      />
    </ButtonWrap>
  );
};

export default class Slide extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
      translateValue: 0,
      buttonList: []
    };
  }

  handleResize = () => {
    let num = this.state.translateValue;

    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
      translateValue: num
    });
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    return (
      <div>
        <SlideWrapper height={this.state.height}>
          <UlWrapper
            translateValue={this.state.translateValue}
            width={this.state.width}
          >
            {this.props.list.map((data, index, arr) => (
              <List key={index} url={data} width={this.state.width} />
            ))}
          </UlWrapper>
        </SlideWrapper>
        <ButtonWrapper>
          {this.props.list.map((data, index, arr) => (
            <Button
              key={index}
              context={this}
              isColor={index === this.state.translateValue}
            />
          ))}
        </ButtonWrapper>
      </div>
    );
  }
}
