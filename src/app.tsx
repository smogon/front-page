import { h, Fragment } from "preact";
import Footer from "./components/footer";
import Filler from "./components/filler";
import News from "./components/news";
import Learn from "./components/learn";
import Top from "./components/top";
import Header from "./components/header";

export function App() {
	return (
		<Fragment>
			<Header />
			<Top />
			<Learn />
			<News />
			<Filler />
			<Footer />
		</Fragment>
	);
}