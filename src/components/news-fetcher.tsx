import { h, Component } from "preact";
const style = require("../style/news.module.css");
import moment from "moment"

export default class NewsFetcher extends Component<{}, any> {
    constructor(props) {
        super(props);
        this.state = {
                fill: [],
                isLoaded: false
            };
        this.NewsFetcher = this.NewsFetcher.bind(this);
    }

    componentDidMount() {
        this.NewsFetcher();
    }

    async NewsFetcher() {
        const response = await fetch('/resources/articles.json')
        const json = await response.json()
        const data = json.slice(Math.max(json.length - 4, 0))

        this.setState({
                fill: data,
                isLoaded: true
            })
    }

    render() {
        if (!this.state.isLoaded) {
            return(
                <p>Loading...</p>
            )
        }
        return(
            <div className={style.articleCont}>
                {
                this.state.fill.map(function(post) {
                    const auth = []
                    const firstThree = auth.slice(0, 3);
                    const tagList = []

                    for (var i = 0; i < post.contributors.authors.length; i++) {
                        const authors = post.contributors.authors[i].name;
                        auth.push(authors)
                    }
                    for (var i = 0; i < post.tags.length; i++) {
                        const tags = post.tags[i];
                        tagList.push(tags)
                    }

                    function getAuths() {
                        return (auth.length > 2 ? firstThree.join(", ") + ", and " + (auth.length - firstThree.length) + " more" : auth);
                    }

                    function getTags() {
                        const hashTag = tagList.map(i => "#" + i).join(" ");
                        return (hashTag);
                    }

                    return(
                        <div className={[style.articleCard, style.shadow].join(" ")}>
                            <div className={style.pic}></div>
                            <div>
                                <span className={style.title}>{post.title}</span>
                                <span className={style.auth}>By: {getAuths()}</span>
                                <span className={style.date}>{moment(post.pubdate).format('MMM Do YYYY')}</span>
                                <span className={style.tags}>{getTags()}</span>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        )
    }
}