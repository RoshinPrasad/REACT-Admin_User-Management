import './App.css';
import SignupPage from './pages/SignupPage'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import  { Provider } from 'react-redux';
import store from './store/store'
import AdminLogin from './pages/AdminLogin'
import AdminHome from './pages/AdminHome'
import AdminEdit from './pages/AdminEdit';
import PublicRoutes from './Routes/PublicRoutes';
import ProtectedRoutes from './Routes/ProtectedRoutes';
import AdminProtectedRoutes from './Routes/AdminProtectedRoutes';
import AdminPublicRoutes from './Routes/AdminPublicRoutes';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <Routes>
          <Route element={<PublicRoutes/>} >
             <Route path='/login' element={<LoginPage/>} />
          <Route path='/signup' element={<SignupPage/>} />
          </Route>

         <Route element={<ProtectedRoutes/>}>
           <Route path='/' element={<HomePage/>} />
          <Route path='/userProfile' element={<ProfilePage/>} />
         </Route>

         <Route element={<AdminPublicRoutes/>} >
           <Route path='/admin' element={<AdminLogin/>}/>
         </Route>

         <Route element={<AdminProtectedRoutes/>} >
           <Route path='/admin/home' element={<AdminHome/>}/>
          <Route path='/admin/editUser/:id' element={<AdminEdit/>}/>
         </Route>
         
        </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;

////////hi///