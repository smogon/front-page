import { h } from "preact";
var style = require("../style/top.module.css");

export default () => {
    return (
        <section className={style.top}>
            <div className={style.topCont}>
                <h1>
                    <span>Smogon</span>
                    <span>University</span>
                </h1>
                <hr />
                <div className={style.subtitle}>
                    Learn from the top website for competitive Pok&eacute;mon battling and face trainers from around the world
                </div>
                <div className={style.mainLink}>
                    <i class="fab fa-galactic-republic fa-2x"></i>
                    <span>Play Online</span>
                </div>
                <div className={style.mainLink}>
                    <i class="fab fa-galactic-republic fa-2x"></i>
                    <span>Battling 101</span>
                </div>
            </div>
        </section>
    )
}