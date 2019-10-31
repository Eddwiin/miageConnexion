import React from "react";
import Aux from "../../hoc/Helper";
import "./Person.scss";
const person = props => (
  <Aux>
    <div className="accordion">
      <ul>
        <li>
          <div>
            {" "}
            <img src="http://via.placeholder.com/640x360" />
            <a href="#">
              <h2>Title 1</h2>

              <p>Content 1</p>
            </a>{" "}
          </div>
        </li>
        <li>
          <div>
            {" "}
            <img src="http://via.placeholder.com/640x360" />
            <a href="#">
              <h2>Title 2</h2>

              <p>Content 2</p>
            </a>{" "}
          </div>
        </li>
        <li>
          <div>
            <img src="http://via.placeholder.com/640x360" />{" "}
            <a href="#">
              <h2>Title 3</h2>

              <p>Content 3</p>
            </a>{" "}
          </div>
        </li>
        <li>
          <div>
            <img src="http://via.placeholder.com/640x360" />{" "}
            <a href="#">
              <h2>Title 4</h2>

              <p>Content 4</p>
            </a>{" "}
          </div>
        </li>
        <li>
          <div>
            <img src="http://via.placeholder.com/640x360" />{" "}
            <a href="#">
              <h2>Title 5</h2>

              <p>Content 5</p>
            </a>{" "}
          </div>
        </li>
        <li>
          <div>
            <img src="http://via.placeholder.com/640x360" />{" "}
            <a href="#">
              <h2>Title 6</h2>

              <p>Content 6</p>
            </a>{" "}
          </div>
        </li>
      </ul>
    </div>
  </Aux>
);

export default person;
