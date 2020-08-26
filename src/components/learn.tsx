import { h } from "preact";
const style = require("../style/learn.module.css");

export default () => {
	return (
		<section className={style.learn}>
			
			<div className={style.learnCont}> 
			<h1><i class="fas fa-book-reader"></i> Learn</h1>
				<div className={style.cardGrid}>
					
					<div className={style.card}>
						<div className={style.vector}>
							<i class="fab fa-galactic-republic fa-5x"></i>							
						</div>
						<div className={style.title}>
							Dex
						</div>
						<div className={style.desc}>
							<span>A comprehensive list of Pok&eacute;mon, items, abilities, and other data across every generation</span>
						</div>
						<div className={style.viewSelection}>
							View Dex
						</div>
					</div>

					<div className={style.card}>
						<div className={style.vector}>
							<i class="fas fa-newspaper fa-5x"></i>
						</div>
						<div className={style.title}>
							Flying Press
						</div>
						<div className={style.desc}>
							<span>Articles about competitive battling, tier lists, tournaments, and everything related to Pok&eacute;mon</span>
						</div>
						<div className={style.viewSelection}>
							Read Articles
						</div>
					</div>

					<div className={style.card}>
						<div className={style.vector}>
							<i class="far fa-newspaper fa-5x"></i>
						</div>
						<div className={style.title}>
							In-Game Guides
						</div>
						<div className={style.desc}>
							<span>Tutorials and tips for Pok&eacute;mon games to conquer the battle tower, battle your friends, or find general information</span>
						</div>
						<div className={style.viewSelection}>
							Read Guides
						</div>
					</div>

					<div className={style.card}>
						<div className={style.vector}>
							<i class="fab fa-jedi-order fa-5x"></i>
						</div>
						<div className={style.title}>
							Battling 101
						</div>
						<div className={style.desc}>
							<span>Learn from the best players in the field and make a name for yourself</span>
						</div>
						<div className={style.viewSelection}>
							View Forum
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}