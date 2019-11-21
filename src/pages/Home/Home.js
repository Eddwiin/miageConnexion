import React, { Component } from "react";
import "./Home.scss";
import Wrapper from "../../hoc/Wrapper";
import Feature from "../../components/Feature/Feature";
import Person from "../../components/Person/Person";
import Article from "../../components/Article/Article";
import Footer from "../../components/Footer/Footer";
class Home extends Component {
  render() {
    return (
      <Wrapper>
        <section className="home">
          <div className="cards">&nbsp;</div>
          <div className="features">
            <Feature title="The dood"></Feature>
            <Feature title="The Texan"></Feature>
            <Feature title="Teaser"></Feature>
            {/* <Feature title="Video"></Feature>
            <Feature title="Clip"></Feature> */}
          </div>
          <div className="crew">
            <Person name='Magu Racist'></Person>
            <Person name='Magu Texan Ranger'></Person>
            <Person name='Magu LePen'></Person>
          </div>
          <div className="articles">
            <Article title="Le cauchemar de Sevran"></Article>
            <Article title="Sevran nouveau fief du Fn ?"></Article>
            <Article title="Quel avenir pour la miage?"></Article>
            <Article title="Atilla tricheur ou génie ?"></Article>
            <Article title="Saïd un génie pas comme les autres..."></Article>
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
