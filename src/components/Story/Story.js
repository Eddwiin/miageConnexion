import React, { Component } from "react";
import "./Story.scss";
import Wrapper from "../../hoc/Wrapper";
import axios from "axios";
class Story extends Component {
  state = {
    stories: []
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/photos").then(response => {
      this.setState({ stories: response.data.slice(0, 18) });
    });
  }
  render() {
    const stories = this.state.stories.map(story => {
      return(
        <div className="story" key={story.id}>
          <img src={story.url} alt="another" />
        </div>
      );
    });
    return <Wrapper>
        {stories}
    </Wrapper>;
  }
}
export default Story;
