import React, { Component } from "react";
import Counter from "./Counter";
import img from "./ff.jpg";

class App extends Component {
  constructor(props) {
    console.log("constructor()");
    super(props);

    this.state = {
      fullName: "Eljia Ben Aissa",
      profession: " I'm MERN Stack JS Developer",
      imgSrc: img,
      bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur mollitia rerum aut, maiores laboriosam pariatur nemo natus voluptatum impedit officiis tempore praesentium cupiditate blanditiis animi soluta unde eaque quasi dolores?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur mollitia rerum aut, maiores laboriosam pariatur nemo natus voluptatum impedit officiis tempore praesentium cupiditate blanditiis animi soluta unde eaque quasi dolores?",
      show: false,
    };
  }

  handleshow = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    console.log("render()");
    console.log(this.state.int);

    return (
      <div>
        <nav>
          <span>MY PROFILE</span>
        </nav>
        <button className="button" onClick={this.handleshow}>
          {" "}
          {this.state.show ? "hide" : "show"}
        </button>
        <br />
        {this.state.show ? (
          <div>
            <h1 className="title">{this.state.fullName}</h1>

            <div class="losange">
              <div class="los1">
                <img src={this.state.imgSrc} alt="" />
              </div>
            </div>
            <h4 className="paragraphe">{this.state.profession}</h4>
            <p className="paragraphe">{this.state.bio}</p>
          </div>
        ) : (
          <Counter />
        )}
      </div>
    );
  }
}

export default App;
