import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {

    state = { lat: null, errorMessage: "" };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            // Called setState to update this.state!
            (position) => this.setState({ lat: position.coords.latitude }),

            // Updating state is an additive process, no need to update every value in the state.
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    componentDidUpdate() {
        console.log("My component was just updated - it re-rendered.");
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }
        return <Spinner message="Please accept location request." />;
    }

    // React requires the render() to be defined.
    render() {
        return <div className="border red">{this.renderContent()}</div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
