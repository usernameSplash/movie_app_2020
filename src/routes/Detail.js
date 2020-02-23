import React from "react";

function Detail({ location }) {
    const {
        state: { year, title, summary, poster, genres },
    } = location;
    return (
        <div>
            <h1>{title}</h1>
            <span>{summary}</span>
        </div>
    );
}
export default Detail;
