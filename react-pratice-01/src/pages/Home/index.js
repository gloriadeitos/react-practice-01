import {Header} from '../../components/Header';
import background from '../../assets/cloud.png';
import './styles.css';

function App (){
    return (
        <div className="App">
            <Header/>
            <div className="content">
                <img src={background} className='img' alt='background app'></img>
            </div>
        </div>
    );
}

export default App;