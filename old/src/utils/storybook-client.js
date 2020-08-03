
import StoryblokClient from "storyblok-js-client";

export default new StoryblokClient({
    accessToken: process.env.REACT_APP_STORYBOOK_TOKEN,
    cache: {
      clear: "auto",
      type: "memory"
    }
});