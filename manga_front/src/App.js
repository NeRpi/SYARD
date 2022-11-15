import LoginOrRegister from './Authentication/LoginOrRegister';
import MainWindow from './MainWindow';

import useToken from './Authentication/useToken';

function App() {
    const { token, setToken } = useToken();
    return (token ? <MainWindow setToken={setToken} /> : <LoginOrRegister setToken={setToken} />);
}

export default App;
