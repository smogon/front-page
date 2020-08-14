import { h } from "preact";
import NewsFetcher from "../components/news-fetcher"
const style = require("../style/news.module.css");

export default () => {
	return (
		<section className={style.news}>
			<div className={style.newsCont}>
				<h1><i class="fas fa-newspaper"></i> Latest News</h1> 
				<NewsFetcher />
			</div>
			<div className={style.shadow}>
				<a class="twitter-timeline" data-width="600" data-height="875" data-chrome="nofooter noborders" href="https://twitter.com/SmogonU?ref_src=twsrc%5Etfw">Tweets by SmogonU</a>
			</div>
		</section>

	)
}