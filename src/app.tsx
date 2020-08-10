import { h, Fragment } from "preact";
import Footer from "./components/footer"
import Filler from "./components/filler"

var style = require("./style/main.module.css");

export function App() {
  return (
    <Fragment>
      <Filler />
      <Footer />
    </Fragment>
  )
}