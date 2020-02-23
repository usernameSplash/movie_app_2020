import React from "react";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const {
            location: { state },
        } = this.props;

        if (state) {
            return (
                <div>
                    <h1>{state.title}</h1>
                    <span>{state.summary}</span>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;
