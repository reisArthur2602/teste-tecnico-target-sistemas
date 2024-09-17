import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const App = () => {
    return (
        <BrowserRouter>
            <div className="max-w-7xl w-full mx-auto">
                <Routes />
            </div>
        </BrowserRouter>
    );
};

export default App;
