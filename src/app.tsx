import { h, Fragment } from "preact";
import Footer from "./components/footer"

var style = require("./style/main.module.css");

export function App() {
  return (
    <Fragment>
      <h1>Hooray, it works</h1>
      <Footer />
    </Fragment>
  )
}