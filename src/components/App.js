import {PostProvider} from "../conttext/PostProvider";
import Header from "./Header";
import Main from "./Main";
import Button from "./Button";
import Footer from "./Footer";
import Archive from "./Archive";

function App() {
  return (
    <section>
    <PostProvider>
        <Button/>
        <Header/>
        <Main/>
        <Archive/>
        <Footer />
    </PostProvider>
    </section>
  );
}
export default App;
