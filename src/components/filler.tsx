import { h } from "preact";
const style = require("../style/filler.module.css");

export default () => {
	return ( 
		<section className={style.filler}>
			<div className={style.sectionCont}>
			<div>
				<p class="fas fa-comments"></p>
				<span>Want to participate in the community? Follow our discussions at any of the social media apps listed below!</span>
			</div>
			</div>
		</section>
	)
}