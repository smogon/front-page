import { h } from "preact";
const style = require("../style/top.module.css");

export default () => {
	return (
		<section className={style.top}>
			<div className={style.topCont}>
				<div className={style.info}>
					<h1>
						<span>Smogon</span>
						<span>University</span>
					</h1>
					<hr />
					<div className={style.subtitle}>
						Learn from the top website for competitive Pok&eacute;mon battling and face trainers from around the world!
					</div>
					<div className={style.mainLink}>
						<div><i class="fab fa-galactic-republic fa-2x"></i> <span>Play Online</span></div>

						<div><i class="fab fa-galactic-republic fa-2x"></i> <span>Battling 101</span></div>
					</div>
				</div>
			</div>
		</section>
	)
}