import'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Route,Switch } from 'react-router-dom';
import AdminPage from './components/AdminPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import AddItem from './components/AddItem';
import HeaderPage from './components/HeaderPage';
import ShowItem from './components/ShowItem'
import CustomerDash from './components/CustomerDash'
import AdminShowItems from './components/AdminShowItems'
import AdminAuctionPage from './components/AdminAuctionPage'
import ShowAuction from './components/ShowAuction'
import FinalAuction from './components/FinalAuction'





function App() {
  return (
    <BrowserRouter>

      <div className="container">
      <Switch>
       <Route path="/" exact component={LoginPage} />
       <Route path="/register"  exact component={RegisterPage} />
       <Route path="/admin"  exact component={AdminPage} />
       <Route path="/AddItem"  exact component={AddItem} />
       <Route path="/dashboard"  exact component={HeaderPage} />
       <Route path="/showitems"  exact component={ShowItem} />
       <Route path="/customerdashboard"  exact component={CustomerDash} />
       <Route path="/adminshowitems"  exact component={AdminShowItems} />
       <Route path="/adminauctionpage/:id"  exact component={AdminAuctionPage} />
       <Route path="/showauction"  exact component={ShowAuction} />
       <Route path="/finalauction/:id"  exact component={FinalAuction} />






    </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
