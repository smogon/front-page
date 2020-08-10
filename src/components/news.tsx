import { h } from "preact";
var style = require("../style/news.module.css");

export default () => {
    return (
        <section className={style.news}>
            <div className={style.newsCont}>
                <i class="fas fa-newspaper fa-5x"></i>
                <h1>Latest News</h1> 
            </div>
            <div className={style.shadow}>
                <a class="twitter-timeline" data-width="500" data-height="800" href="https://twitter.com/SmogonU?ref_src=twsrc%5Etfw">Tweets by SmogonU</a>
            </div>
        </section>

    )
}