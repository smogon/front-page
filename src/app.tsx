import { h, Fragment } from "preact";
import Footer from "./components/footer"
import Filler from "./components/filler"
import News from "./components/news"
import Learn from "./components/learn"

var style = require("./style/main.module.css");

export function App() {
  return (
    <Fragment>
      <Learn />
      <News />
      <Filler />
      <Footer />
    </Fragment>
  )
}