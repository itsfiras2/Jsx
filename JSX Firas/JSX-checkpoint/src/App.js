import "./App.css";
import imageInSrc from "./imageInSrc.jpg";
function App() {
  return (
    <div className="App"
      Style={{ border: "solid 1px black", maxWidth: "100vw" }}>
      <h1 className="title red"> Welcome to react  </h1>
      <br />
      <img src={imageInSrc} alt="logo" />
      <br />
      <img src="/imageInPublic.jpg" alt="public" />
      <br />
      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
export default App;
