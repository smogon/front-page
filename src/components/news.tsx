import { h } from "preact";
import NewsFetcher from "../components/news-fetcher"
const style = require("../style/news.module.css");

export default () => {
	return (
		<section className={style.news}>
			<h1><i class="fas fa-newspaper"></i> Latest News</h1>
			<div className={style.newsCont}> 
				<NewsFetcher />
			
				<div className={[style.shadow, style.twitter].join(" ")}>
					<a class="twitter-timeline" data-width="600" data-height="875" data-chrome="nofooter noborders" href="https://twitter.com/SmogonU?ref_src=twsrc%5Etfw">Tweets by SmogonU</a>
				</div>
			</div>
		</section>

	)
}