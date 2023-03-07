import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [

      {
        icon: <FaHiking />,
        title: "Delivery",
        info:
          "Your package will be delivered on the day of the order"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Delivery",
        info:
          "If you order more than 10 items the delivery is for free."
      },
     
    ]
  };
  render() {
    return (
      <section className="services coolBackground">
        <Title title="services" />
        <div className="services-center ">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
