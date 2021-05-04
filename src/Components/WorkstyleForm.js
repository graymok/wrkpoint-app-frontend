import axios from 'axios'
import { useState, useContext } from 'react'
import { UserContext } from '../Context/UserContext'


const WorkstyleForm = (props) => {

    const {userState} = useContext(UserContext)
    const [user, setUser] = userState

    const [workType, setWorkType] = useState('')
    const [workVibe, setWorkVibe] = useState('')

    const handleRegister = (e) => {
        e.preventDefault(e)
        registerUser()
        props.setQuizState(null)
    }

    const registerUser = async () => {
        let response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users`, {
            name: props.name,
            email: props.email,
            password: props.password,
            workstyle: workType + workVibe
        })
        console.log(response)
        localStorage.setItem('userId', response.data.user.id)
        setUser({
            ...user,
            id: response.data.user.id,
            name: response.data.user.name,
            email: response.data.user.email,
            workstyle: response.data.user.workstyle,
            workstyleDetail: response.data.user.workstyleDetail
        })
    }


    return (
        <div className="workstyle-container">
            <form className="form-radios" onSubmit={handleRegister}>
                <span className="workstyle-headline">Tell us how you work!</span>
                <div className="workstyle-set" >
                    <span className="workstyle-question">What type of work do you mostly do?</span>
                    <div className="workstyle-answers">
                        <input type="radio" value={'A'} id="workTypeChoice1" checked={workType === 'A'} onChange={(e) => setWorkType(e.target.value)}/>
                        <label htmlFor="workTypeChoice1">Heads down, focus work</label>
                        <input type="radio" value={'B'} id="workTypeChoice2" checked={workType === 'B'} onChange={(e) => setWorkType(e.target.value)}/>
                        <label htmlFor="workTypeChoice2">Mix of focus and interactive work</label>
                        <input type="radio" value={'C'} id="workTypeChoice3" checked={workType === 'C'} onChange={(e) => setWorkType(e.target.value)}/>
                        <label htmlFor="workTypeChoice3">Interactive work with others</label>
                    </div>
                </div>
                <div className="workstyle-set" >
                    <span className="workstyle-question">What type of atmosphere helps you work?</span>
                    <div className="workstyle-answers">
                        <input type="radio" value={'1'} id="workVibeChoice1" checked={workVibe === '1'} onChange={(e) => setWorkVibe(e.target.value)}/>
                        <label htmlFor="workVibeChoice1">Peaceful, like a slow day at the library</label>
                        <input type="radio" value={'2'} id="workVibeChoice2" checked={workVibe === '2'} onChange={(e) => setWorkVibe(e.target.value)}/>
                        <label htmlFor="workVibeChoice2">Energetic, like a busy coffee shop</label>
                    </div>
                </div>
                <input className="input-button-complete" type="submit" value="COMPLETE REGISTRATION" />
            </form>
        </div>
    )
}

export default WorkstyleForm