import CreateBlog from "./Components/Create Blog/CreateBlog";
import Feed from "./Components/Feed/Feed";
import SpecificBlog from "./Components/Specific Blog/Specific_blog";


function App() {
  return (
    <div className="App">
      <Feed/>
      <SpecificBlog/>
      <CreateBlog/>
    </div>
  );
}

export default App;
