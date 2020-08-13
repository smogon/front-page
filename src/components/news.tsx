import { h } from "preact";
import NewsFetcher from "../components/news-fetcher"
const style = require("../style/news.module.css");

export default () => {
    return (
        <section className={style.news}>
            <div className={style.newsCont}>
                <i class="fas fa-newspaper fa-5x"></i>
                <h1>Latest News</h1> 
                <NewsFetcher />
            </div>
            <div className={[style.shadow, style.twitter].join(" ")}>
                <a class="twitter-timeline" data-width="600" data-height="875" data-chrome="nofooter noborders" href="https://twitter.com/SmogonU?ref_src=twsrc%5Etfw">Tweets by SmogonU</a>
            </div>
        </section>

    )
}