import { h, Component } from "preact";
const style = require("../style/news.module.css");
import moment from "moment";

export default class NewsFetcher extends Component<{}, any> {
	constructor(props) {
		super(props);
		this.state = {
			fill: [],
			isLoaded: false,
		};
		this.NewsFetcher = this.NewsFetcher.bind(this);
	}

	componentDidMount() {
		this.NewsFetcher();
	}

	async NewsFetcher() {
		const response = await fetch('/resources/articles.json');
		const json = await response.json();
		const data = json.slice(Math.max(json.length - 4, 0));

		this.setState({
			fill: data,
			isLoaded: true
		});
	}

	render() {
		if (!this.state.isLoaded) {
			return (
				<p>Loading...</p>
			)
		}
		return (
			<div className={style.articleCont}>
				{
				this.state.fill.map(post => {
					const authors = [];
					const tagList = [];

					for (const authorObj of post.contributors.authors) {
						authors.push(authorObj.name);
					}
					for (const tag of post.tags) {
						tagList.push(tag);
					}

					function getAuthors() {
						let auth;
						switch (authors.length) {
							case 1:
								auth = authors[0];
								break;
							case 2:
								auth = `${authors[0]} and ${authors[1]}`;
								break;
							case 3:
								auth = (<span style="display:inline;">{authors.slice(0, 2).join(", ")}, and {authors.slice(2)[0]}</span>);
								break;
							default:
								auth = (<span style="display:inline;">{authors.slice(0, 3).join(", ")}, and <abbr title={authors.slice(3).join(", ")}>{authors.slice(3).length} more</abbr></span>);
								break;
						}
						return auth;
					}

					function getTags() {
						const hashTag = tagList.map(i => "#" + i).join(" ");
						return hashTag;
					}

					return (
						<div className={[style.articleCard, style.shadow].join(" ")}>
							<div className={style.pic}></div>
							<div>
								<span className={style.title}>{post.title}</span>
								<span className={style.authors}>By {getAuthors()}</span>
								<span className={style.date}>{moment(post.pubdate).format('MMM Do, YYYY')}</span>
								<span className={style.tags}>{getTags()}</span>
							</div>
						</div>
					);
				})
				}
			</div>
		)
	}
}