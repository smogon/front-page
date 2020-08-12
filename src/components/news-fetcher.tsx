import { h, Component } from "preact";
import json from "../articles/data.json";

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
        console.log(json[2])
    }

    NewsFetcher() {
        var rawData = json.data;
        var data = json.slice(Math.max(json.length - 4, 0))
        this.setState(
            {
                fill: data,
                isLoaded: true
            }
        )
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