import React from "react";
import PropTypes from "prop-types";

const players = [
  {
    id: 1,
    name: "Messi",
    image:
      "https://en.as.com/en/imagenes/2019/12/13/football/1576242188_724909_noticia_normal.jpg",
    rating: 10
  },
  {
    id: 2,
    name: "Salah",
    image:
      "https://ww.namu.la/s/60018cb09adb7ef720c12c545ad91ad9d771100393bac1c986162d0d106ead89df24f7d51f88e550717d12a7d395ddc52bd0da04409016ac1c3e749821209ab95565fc045e8d827c28728fd101fe9d2f37d7fa6e948f8064c166dd77c4c29762",
    rating: 7.8
  },
  {
    id: 3,
    name: "Neymar",
    image:
      "https://ww.namu.la/s/fb9c7934fa696596bd0ff7b609c01febe3744479d0e78fb3f69d9c2c018d5d3ff57d4443180589393bf251adfb6486e85ed02d502300b7187e2e38adbfe137b0aef1bf610314a78fc8bfb6bd19e58d065a7c5d72043aa415c7bf2942492bcd06c9c8dda33373f921ee05d9eaea41913c",
    rating: 9.5
  },
  {
    id: 4,
    name: "Mbappe",
    image:
      "https://ww.namu.la/s/f8adc29619483cfe7bd7bb8daa7338764101c852dc6c60404f04cdb0f66256ff4c9c3d1a20afa9fc163c9460595c7f28f154dec69d4b91a986539134b8eb86368458204e1d3e17983a0b2d82bc15c139470800fbf25562517301710e08c90a660edd98d23c6da2943227271460ecb170",
    rating: 8.9
  },
  {
    id: 5,
    name: "Griezmann",
    image:
      "https://ww.namu.la/s/ddc5a5ecb182d8f8cca620337dbc0cee056aa52f93041aeae29514c9c84ad9762a536f5f9baef19363ed3710adf924ab07164e7761150b2a8fdb7775d27daeb9cb46bcc10b061654e6778caea34c88fc5bc37624605e12b8fa6631524b902fd9",
    rating: 8.1
  },
  {
    id: 6,
    name: "Hazard",
    image:
      "https://w.namu.la/s/bc967887c7787d48332636368dc6f27af5f740418a6d10999dc9195d1da6ec990048483a47644b133f441538dc3804a516eb2f5da2b56af84c77a17d7f38264b13fa748669456ad946e2fe10cd6186884f55971341f153bf896e743cb12be077",
    rating: 7.9
  },
  {
    id: 7,
    name: "Dybala",
    image:
      "https://w.namu.la/s/fdaf817b4b75545196c02bf5c6b58ce929014497164ae7a86a69e773c426b51574304b11001aa0663d1647d2ac2703cdb71246ea3f5992b4b1cbc885f6cc0a528035e7352eec1a80de14dc4ab113dfc78de38cc04c836947affd3a43de5317b0f1e5cbc611670e44ba359be6cbed4f91",
    rating: 8
  }
];

function Player({ name, image, rating }) {
  return (
    <div>
      <h1>His name is {name}</h1>
      <h4>Rating : {rating} / 10</h4>
      <img src={image} alt={name} />
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {players.map(player => (
        <Player
          key={player.id}
          name={player.name}
          image={player.image}
          rating={player.rating}
        />
      ))}
    </div>
  );
}

export default App;
