import './App.css';
import Client from './Components/Client/Client';
import Custom from './Components/Custom/Custom';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import VideoTitel from './Components/VideoTitle/VideoTitel';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <Client />
            <VideoTitel />
            <Custom/>
        </div>
    );
}

export default App;
