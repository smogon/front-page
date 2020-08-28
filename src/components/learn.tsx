import { h } from "preact";
const style = require("../style/learn.module.css");

const info = [
	{
		vector: "fab fa-galactic-republic fa-5x",
		title: "Dex",
		description: "A comprehensive list of Pok&eacute;mon, items, abilities, and other data across every generation",
		buttonText: "View Dex",
	},

	{
		vector: "fas fa-newspaper fa-5x",
		title: "Flying Press",
		description: "Articles about competitive battling, tier lists, tournaments, and everything related to Pok&eacute;mon",
		buttonText: "Read Articles",
	},

	{
		vector: "far fa-newspaper fa-5x",
		title: "In-Game Guides",
		description: "Tutorials and tips for Pok&eacute;mon games to conquer the battle tower, battle your friends, or find general information",
		buttonText: "Read Guides",
	},

	{
		vector: "fab fa-jedi-order fa-5x",
		title: "Battling 101",
		description: "Learn from the best players in the field and make a name for yourself",
		buttonText: "View Forum",
	}
]

export default () => {
	return (
		<section className={style.learn}>
			<div className={style.learnCont}> 
				<h1><i class="fas fa-book-reader"></i> Learn</h1>
				<div className={style.cardGrid}>
					{
						info.map(card => {
							return (
								<div className={[style.card, style.shadow].join(" ")}>
									<div className={style.vector}><i class={card.vector}></i></div>
									<div className={style.title}>{card.title}</div>
									<div className={style.desc}><span>{card.description}</span></div>
									<div className={style.viewSelection}>{card.buttonText}</div>
								</div>
							)
						})
					}
				</div>
			</div>
		</section>
	)
}