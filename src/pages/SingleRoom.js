import React, { Component } from "react";
import defaultBcg from "../images/room-1.webp";
//import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";

import StyledHero from "../components/StyledHero";
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = RoomContext;

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3> no such product could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to search
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      Second_hand,
      images
    } = room;
    const [ ...defaultImages] = images;
    console.log(defaultImages);

    return (
      <>
      <div className="coolBackground">
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name} `}>
            <Link to="/rooms" className="btn-primary">
              back to search
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images ">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h4 className="gradient__text1 ">Price : {price} ብር</h4>
             {/* <h6>size : {size} Kg</h6>*/}
              <h4 className="gradient__text1 ">Call :  0937205345</h4>
            { /* <h6>
                max capacity :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{Second_hand ? "Second_hand allowed" : "no Second_hand allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>*/}
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
        </div></>
    );
  }
}
