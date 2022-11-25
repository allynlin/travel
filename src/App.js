import routes from "./Router/routes";
import RouterWaiter from "react-router-waiter"
import {BrowserRouter} from 'react-router-dom'
import RenderLoading from "./component/RenderLoading";
import './App.scss';
import 'tdesign-react/es/style/index.css';

function App() {
    const onRouteBefore = ({meta}) => {
        if (meta.title) {
            document.title = meta.title;
        }
    }

    return (
        <BrowserRouter basename={'/biyesheji'}>
            <RouterWaiter routes={routes} onRouteBefore={onRouteBefore} loading={<RenderLoading/>}/>
        </BrowserRouter>
    );
}

export default App;
