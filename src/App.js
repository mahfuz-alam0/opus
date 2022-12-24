import './App.css';
import Client from './Components/Client/Client';
import CreatePage from './Components/CreatePage/CreatePage';
import Custom from './Components/Custom/Custom';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Option from './Components/Option/Option';
import Resource from './Components/Resource/Resource';
import VideoTitel from './Components/VideoTitle/VideoTitel';
import WorkWithUs from './Components/workWithUs/WorkWithUs';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <Client />
            <VideoTitel />
            <Custom />
            <WorkWithUs />
            <CreatePage />
            <Option />
            <Resource/>
        </div>
    );
}

export default App;
