import React, { Component } from "react";
import { Image } from "react-bootstrap";

import PageLayout from "../../layouts/page/PageLayout";
import ChatMessage from "../../components/chat-message/ChatMessage";
import InPageSubheader from "../../components/in-page-subheader/InPageSubheader";

import lastVisitImage from "../../assets/logo.svg";
import evolutionImage1 from "../../assets/logo.svg";
import evolutionImage2 from "../../assets/logo.svg";
import evolutionImage3 from "../../assets/logo.svg";
import "./MyHistory.css";

class MyHistory extends Component {
  render() {
    const TileSet = props => {
      return <div className="TileSet">{props.children}</div>;
    };

    const Tile = props => {
      return <div className={`Tile ${props.className}`}>{props.children}</div>;
    };

    const TileSquare = props => {
      return (
        <div className="Tile TileSquare">
          <div className="TileSquare-inner">{props.children}</div>
        </div>
      );
    };

    const TileHalfSquare = props => {
      return (
        <div className="Tile TileHalfSquare">
          <div className="TileHalfSquare-inner">{props.children}</div>
        </div>
      );
    };

    const visits = [
      { imgurl: evolutionImage1, date: "1/28/2017" },
      { imgurl: evolutionImage2, date: "8/12/2017" },
      { imgurl: evolutionImage3, date: "12/21/2017" }
    ];

    return (
      <PageLayout title="Your history">
        <ChatMessage>
          Great! Now that you have gone through your first full treatment with
          the dentist and we can start mapping out your dental history.
        </ChatMessage>

        <InPageSubheader title="Last Visit" subtitle="See overview >" to="/" />
        <TileSet>
          <TileSquare>
            <Image src={lastVisitImage} />
          </TileSquare>
          <div className="TileSetA-left">
            <TileHalfSquare>
              <p className="Tile-text-secondary">Emotional state</p>
              <p className="Tile-text-primary">Stressed</p>
            </TileHalfSquare>
            <TileHalfSquare>
              <p className="Tile-text-secondary">Issues found</p>
              <p className="Tile-text-primary">2 mild issues</p>
            </TileHalfSquare>
          </div>
        </TileSet>

        <InPageSubheader
          title="Teeth Evolution"
          subtitle="See overview >"
          to="/"
        />
        <TileSet>
          {visits.map((visit, i) => (
            <Tile key={i} className="Visit">
              <Image className="Visit-image" src={visit.imgurl} />
              <p className="Visit-date">{visit.date}</p>
            </Tile>
          ))}
        </TileSet>

        <InPageSubheader
          title="Tooth Bruching History"
          subtitle="See overview >"
          to="/"
        />
        <TileSet>
          {visits.map((visit, i) => (
            <Tile key={i} className="Visit">
              <Image className="Visit-image" src={visit.imgurl} />
              <p className="Visit-date">{visit.date}</p>
            </Tile>
          ))}
        </TileSet>
      </PageLayout>
    );
  }
}

export default MyHistory;
