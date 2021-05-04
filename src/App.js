import './App.css';
import { UserContext } from './Context/UserContext'
import { useContext, useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Landing from './Pages/Landing'
import Registration from './Pages/Registration'
import Dashboard from './Pages/Dashboard'
import AllSpaces from './Pages/AllSpaces'
import SingleSpace from './Pages/SingleSpace'


function App() {

  const {userState, verifyUser} = useContext(UserContext)
  const [user, setUser] = userState

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    verifyUser()
  }, [])

  return (
    <div className="main-container">
      <NavBar />
      <div className="body-container">
        <Route exact path='/' render={() => {
          if ( user.name !== null ) {
            return <Redirect to='/dashboard' />
          } else {
            return <Landing />
          }
        }} />
        <Route path='/login' render={() => {
          if ( user.name !== null ) {
            return <Redirect to='/dashboard' />
          } else {
            return <Registration type={'Login'} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
          }          
        }} />
        <Route path='/register' render={() => {
          if ( user.name !== null ) {
            return <Redirect to='/dashboard' />
          } else {
            return <Registration type={'Register'} name={name} setName={setName} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />            
          }          
        }} />
        <Route path='/dashboard' render={() => {
          if ( user.name !== null ) {
            return <Dashboard />
          } else {
            return <Redirect to='/' />
          }          
        }} />
        <Route exact path='/spaces' render={() => {
          if ( user.name !== null ) {
            return <AllSpaces />
          } else {
            return <Redirect to='/' />            
          }          
        }} />
        <Route path='/spaces/:id' render={(routingProps) => {
          if ( user.name !== null ) {
            return <SingleSpace id={routingProps.match.params.id} />
          } else {
            return <Redirect to='/' />            
          }     
        }} />        
      </div>
    </div>
  );
}

export default App;
