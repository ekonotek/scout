import React, { Component } from "react";
import FooComponent from "../Objects/izquierda";
import BarComponent from "../Objects/derecha";
import ArtWorksList from "../Objects/artWorksList";

class MyComponent extends Component {
  components = {
    Izq: FooComponent,
    Der: BarComponent,
    Art: ArtWorksList,
  };
  render() {
    const TagName = this.components[this.props.tag || "Izq"];
    return <TagName />;
  }
}
export default MyComponent;

//Code copied from https://medium.com/@Carmichaelize/dynamic-tag-names-in-react-and-jsx-17e366a684e9
