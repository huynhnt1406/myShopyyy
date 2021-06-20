import React from 'react'
import Header from './core/Header'
import Sidebar from './core/Sidebar'
import './App.css'
import {Provider} from 'react-redux'
import store from './store/store'
import AddProduct from './component/AddProduct'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Homepage from './component/Homepage'
import ShoppingBasket from './component/ShoppingBasket'
function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="app">
          <Header/>
          <div className="main-app">
              <Sidebar/>
              <Switch>
                <Route path="/additem">
                  <AddProduct/>
                </Route> 
                <Route path="/mybasket">
                  <ShoppingBasket/>
                </Route>
                <Route path="/">
                  <Homepage/>
                </Route>
              </Switch>
          </div>
        </div>
      </Provider>
    </Router>
  )
}

export default App
