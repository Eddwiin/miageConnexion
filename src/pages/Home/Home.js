import React, { Component } from "react";
import "./Home.scss";
import Wrapper from "../../hoc/Wrapper";
import Feature from "../../components/Feature/Feature";
import Person from "../../components/Person/Person";
import Article from "../../components/Article/Article";
import Footer from "../../components/Footer/Footer";
import Story from "../../components/Story/Story";
class Home extends Component {
  render() {
    return (
      <Wrapper>
        <section className="home">
          <div className="cards">
            <Story></Story>
          </div>
          <div className="features">
            <section className="features-section">
              <Feature title="The&nbsp;dood"></Feature>
              <Feature title="The Texan"></Feature>
              <Feature title="Teaser"></Feature>
              <Feature title="The&nbsp;dood"></Feature>
              <Feature title="The Texan"></Feature>
              <Feature title="Teaser"></Feature>
              {/* <Feature title="Video"></Feature>
            <Feature title="Clip"></Feature> */}
            </section>
          </div>
          <div className="crew">
            <section className="crew-section">
              <Person name="Magu Racist"></Person>
              <Person name="Magu Texan Ranger"></Person>
              <Person name="Magu LePen"></Person>
              <Person name="Don Dood"></Person>
              {/* <Person name="El doodo"></Person>
              <Person name="El Bartho"></Person> */}
            </section>
          </div>
          <div className="articles">
            <section className="articles-section">
              <Article title="Le cauchemar de Sevran"></Article>
              <Article title="Sevran nouveau fief du Fn ?"></Article>
              <Article title="Quel avenir pour la miage?"></Article>
              <Article title="Atilla tricheur ou génie ?"></Article>
              <Article title="Saïd un génie pas comme les autres..."></Article>
            </section>
          </div>
          <div className="footer-section">
            <Footer></Footer>
          </div>
        </section>
      </Wrapper>
    );
  }
}
export default Home;
