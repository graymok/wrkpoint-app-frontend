import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../Context/UserContext'
import axios from 'axios'

const Dashboard = () => {

    const {userState} = useContext(UserContext)
    const [user, setUser] = userState

    const [reservations, setReservations] = useState()

    const getAllReservations = async () => {
        let response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/spaces/dashboard`, {
            headers: {
                Authorization: user.id
            }
        })
        setReservations(response.data.reservations)
    }

    useEffect(() => {
        getAllReservations()
    }, [])

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <div className="dashboard-header-text-box">
                    <span className="dashboard-header-headline">Hello {user.name}</span>
                    <span className="dashboard-header-workstyle">Your workstyle is <span className="dashboard-header-workstyle-type">{user.workstyle}.</span></span>
                    <span className="dashboard-header-workstyle-detail">{user.workstyleDetail}</span>
                    <div className="dashboard-reservations-header">
                        <span className="dashboard-reservations-headline">UPCOMING SPACE RESERVATIONS:</span>
                    </div>
                </div>
                <div className="dashboard-header-overlay"></div>
                <img className="dashboard-header-background" alt="work-tools" src={`https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80`} />
                
            </div>
            <div className="dashboard-body">

                <div className="dashboard-reservations-list">

                </div>
            </div>
        </div>
    )
}

export default Dashboard