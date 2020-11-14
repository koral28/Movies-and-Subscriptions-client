import './stylesheets/style.css';
import Login from './views/landing/Login';
import {SubscriptionsContextProvider}  from "./views/members/context"

function App() {
  return (
    <SubscriptionsContextProvider>
      <div className="App">
        <Login/>
      </div>
    </SubscriptionsContextProvider>
  );
}

export default App;
