import { h } from "preact";
const style = require("../style/header.module.css");

export default () => {
	return (
		<header>
			<img src="https://www.smogon.com/media/zracknel-beta.svg.m.1" alt="Smogon" />
			<div className={style.linkCont}>
				<div className={style.headLink}>
					<i class="fab fa-galactic-republic fa-2x"></i>
					<span>Dex</span>
				</div>

				<div className={style.headLink}>
				<i class="fas fa-newspaper fa-2x"></i>
					<span>Articles</span>
				</div>

				<div className={style.headLink}>
				<i class="fas fa-comments fa-2x"></i>
					<span>Forums</span>
				</div>

				<div className={style.headLink}>
					<i class="fab fa-galactic-republic fa-2x"></i>
					<span>Pok&eacute;mon Showdown!</span>
				</div>
			</div>
		</header>
	)
}