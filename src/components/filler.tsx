import { h } from "preact";
var style = require("../style/filler.module.css");

export default () => {
    return ( 
        <section>
            <div className={style.sectionCont}>
                <i class="fas fa-comments fa-10x"></i>
                <p>Want to participate in the community? Follow our discussions at any of the socia media apps listed below!</p>
            </div>
        </section>
    )
}