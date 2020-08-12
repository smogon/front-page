import { h, Component } from "preact";

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
        this.setState(
            {
                mounted: true
            }
        )
    }

    async NewsFetcher() {
        const response = await fetch('/resources/articles.json')
        const json = await response.json()

        this.setState(
            {
                fill: json,
                isLoaded: true
            }
        )
        console.log('loaded', json)
    }

    render() {
        if (!this.state.isLoaded) {
            return(
                <p>Loading...</p>
            )
        }
        return(
        <div>
            <h3>Mounted!</h3>
            {this.state.fill.map(function(post) {
                return (
                    <div>Title: {post.title} | Author: {post.id}</div>
                );
            })}
        </div>

        )
    }
}