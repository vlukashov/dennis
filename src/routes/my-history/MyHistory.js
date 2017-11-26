import React, { Component } from "react";
import { Image } from "react-bootstrap";

import PageLayout from "../../layouts/page/PageLayout";
import ChatMessage from "../../components/chat-message/ChatMessage";
import InPageSubheader from "../../components/in-page-subheader/InPageSubheader";

import lastVisitImage from "../../assets/last-visit-img.png";
import evolutionImage1 from "../../assets/evolution-1.png";
import evolutionImage2 from "../../assets/evolution-2.png";
import evolutionImage3 from "../../assets/evolution-3.png";
import brushingImage1 from "../../assets/pressure-high-icon.svg";
import brushingImage2 from "../../assets/session-time-icon.svg";
import brushingImage3 from "../../assets/sessions-week-icon.svg";
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

    const brushings = [
      {
        imgurl: brushingImage1,
        category: "Pressure",
        value: "High",
        className: "danger"
      },
      { imgurl: brushingImage2, category: "Avg Session", value: "Good" },
      { imgurl: brushingImage3, category: "Per week", value: "Good" }
    ];

    return (
      <PageLayout title="Your history">
        <ChatMessage>
          Great! Now that you have gone through your first full treatment with
          the dentist and we can start mapping out your dental history.
        </ChatMessage>

        <InPageSubheader title="Last Visit" subtitle="See overview" to="/" />
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
          subtitle="See overview"
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
          title="Tooth Brushing History"
          subtitle="See overview"
          to="/"
        />
        <TileSet>
          {brushings.map((brushing, i) => (
            <Tile key={i} className="Visit">
              <div className={`Visit-image-wrap idx${i}`}>
                <Image className="Visit-image" src={brushing.imgurl} />
              </div>
              <p className="Visit-text-secondary">{brushing.category}</p>
              <p className={`Visit-text-primary ${brushing.className}`}>
                {brushing.value}
              </p>
            </Tile>
          ))}
        </TileSet>
      </PageLayout>
    );
  }
}

export default MyHistory;
