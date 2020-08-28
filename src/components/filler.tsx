import { h } from "preact";
const style = require("../style/filler.module.css");

export default () => {
	return ( 
		<section className={style.participate}>
			<div className={style.participateCont}>
				<h1><i class="fab fa-jedi-order"></i> Compete</h1>
				<div className={style.participateGrid}>
					tour
				</div>
			</div>
		</section>
	)
}