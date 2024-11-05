import './App.css';
import CollisionStar from "./components/CollisionStar/collisionStar";
import Child from "./components/ChildComponent/Child";

function App() {

  return (
    <div className="App">
      <CollisionStar>
        <Child />
      </CollisionStar>
    </div>
  );
}

export default App;
