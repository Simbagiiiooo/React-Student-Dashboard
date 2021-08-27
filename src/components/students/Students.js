import React from 'react'
import { useHistory} from 'react-router-dom'
import './Students.css'
import {
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryTooltip,
    VictoryGroup
} from "victory"
import Evelyn from '../images/evelyn.jpg'
import Aranka from '../images/aranka.jpg'
import Floris from '../images/floris.jpg'
import Hector from '../images/hector.jpg'
import Martina from '../images/martina.jpg'
import Maurits from '../images/maurits.jpg'
import Rahima from '../images/rahima.jpg'
import Sandra from '../images/sandra.jpg'
import Storm from '../images/storm.jpg'
import Wietske from '../images/wietske.jpg'

const Students = (props) => {

        let displaystudent = useHistory();

 

    const displayOneStudent = () => {
        displaystudent.push(`/student/${props.allStudentData.name}`);
    let onestudent = props.studentData.student.find(student => {
            return student.name === props.allStudentData.name
        })
        return onestudent
}
    
    const assignmentStudents = displayOneStudent().assignments
    const wincTheme = props.wincTheme.default

    const assignmentRatingStudents = assignmentStudents.map(person => ({
        assignment: person.name,
        difficultyRating: person.difficultyRating,
        funRating: person.funRating,
        label: `Opdracht ${person.name}, 
            difficultyRating: ${person.difficultyRating},  
            funRating: ${person.funRating}`
    }))
    
    return (
        <div>
            <div className="radiobuttons-students">
                <label className="custom-radio">
                <input
                    type="radio"
                    className="custom-radio"
                    name='allStudentData'
                    value="Evelyn"
                    checked={props.allStudentData.name === "Evelyn"}
                    onChange={props.handleStudentChange}
                    />
                    <span className="radio-btn">
                        <i className="icon-check"></i>
                    <div className="hobbies-icon">
                    <img 
                        src={Evelyn}
                        alt="new"
                        height="50px"
                        />
                    <h3>Evelyn</h3>
                    </div>
                </span>
                </label>
                <label className="custom-radio">
                <input
                    type="radio"
                    className="custom-radio"
                    name='allStudentData'
                    value="Aranka"
                    checked={props.allStudentData.name === "Aranka"}
                    onChange={props.handleStudentChange}
                    />
                <span className="radio-btn">
                    <i className="icon-check"></i>
                    <div className="hobbies-icon">
                    <img 
                        src={Aranka}
                        alt="new"
                        height="50px"
                        />
                    <h3>Aranka</h3>
                    </div>
                </span>
                </label>
                <label className="custom-radio">
                <input
                    type="radio"
                    className="custom-radio"
                    name='allStudentData'
                    value="Floris"
                    checked={props.allStudentData.name === "Floris"}
                    onChange={props.handleStudentChange}
                    />
                    <span className="radio-btn">
                    <i className="icon-check"></i>
                    <div className="hobbies-icon">
                    <img 
                        src={Floris}
                        alt="new"
                        height="50px"
                        />
                    <h3>Floris</h3>
                    </div>
                </span>
                </label>
                <label className="custom-radio">
                <input
                    type="radio"
                    className="custom-radio"
                    name='allStudentData'
                    value="Hector"
                    checked={props.allStudentData.name === "Hector"}
                    onChange={props.handleStudentChange}
                    />
                    <span className="radio-btn">
                    <i className="icon-check"></i>
                    <div className="hobbies-icon">
                    <img 
                        src={Hector}
                        alt="new"
                        height="50px"
                        />
                    <h3>Hector</h3>
                    </div>
                </span>
                </label>
                <label className="custom-radio">
                <input
                    type="radio"
                    className="custom-radio"
                    name='allStudentData'
                    value="Martina"
                    checked={props.allStudentData.name === "Martina"}
                    onChange={props.handleStudentChange}
                    />
                    <span className="radio-btn">
                    <i className="icon-check"></i>
                    <div className="hobbies-icon">
                    <img 
                        src={Martina}
                        alt="new"
                        height="50px"
                        />
                    <h3>Martina</h3>
                    </div>
                </span>
                </label>
                <label className="custom-radio">
                <input
                    type="radio"
                    className="custom-radio"
                    name='allStudentData'
                    value="Maurits"
                    checked={props.allStudentData.name === "Maurits"}
                    onChange={props.handleStudentChange}
                    />
                    <span className="radio-btn">
                    <i className="icon-check"></i>
                    <div className="hobbies-icon">
                    <img 
                        src={Maurits}
                        alt="new"
                        height="50px"
                        />
                    <h3>Maurits</h3>
                    </div>
                </span>
                </label>
                <label className="custom-radio">
                <input
                    type="radio"
                    className="custom-radio"
                    name='allStudentData'
                    value="Rahima"
                    checked={props.allStudentData.name === "Rahima"}
                    onChange={props.handleStudentChange}
                    />
                    <span className="radio-btn">
                    <i className="icon-check"></i>
                    <div className="hobbies-icon">
                    <img 
                        src={Rahima}
                        alt="new"
                        height="50px"
                        />
                    <h3>Rahima</h3>
                    </div>
                </span>
                </label>
                <label className="custom-radio">
                <input
                    type="radio"
                    className="custom-radio"
                    name='allStudentData'
                    value="Sandra"
                    checked={props.allStudentData.name === "Sandra"}
                    onChange={props.handleStudentChange}
                    />
                    <span className="radio-btn">
                    <i className="icon-check"></i>
                    <div className="hobbies-icon">
                    <img 
                        src={Sandra}
                        alt="new"
                        height="50px"
                        />
                    <h3>Sandra</h3>
                    </div>
                </span>
                </label>
                <label className="custom-radio">
                <input
                    type="radio"
                    className="custom-radio"
                    name='allStudentData'
                    value="Wietske"
                    checked={props.allStudentData.name === "Wietske"}
                    onChange={props.handleStudentChange}
                    />
                    <span className="radio-btn">
                    <i className="icon-check"></i>
                    <div className="hobbies-icon">
                    <img 
                        src={Wietske}
                        alt="new"
                        height="50px"
                        />
                    <h3>Wietske</h3>
                    </div>
                </span>
                </label>
                <label className="custom-radio">
                <input
                    type="radio"
                    className="custom-radio"
                    name='allStudentData'
                    value="Storm"
                    checked={props.allStudentData.name === "Storm"}
                    onChange={props.handleStudentChange}
                    />
                    <span className="radio-btn">
                    <i className="icon-check"></i>
                    <div className="hobbies-icon">
                    <img 
                        src={Storm}
                        alt="new"
                        height="50px"
                        />
                    <h3>Storm</h3>
                    </div>
                </span>
                </label>
                </div>
                <h1 className="student">{props.allStudentData.name}</h1>
            <VictoryChart domainPadding={15} theme={wincTheme}>
                <VictoryGroup offset={5}>
                    <VictoryBar
                        labelComponent={<VictoryTooltip />}
                        data={assignmentRatingStudents}
                        x="assignment"
                        y="difficultyRating"
                        tickValues={[1, 2, 3, 4, 5]}
                        tickFormat={assignmentRatingStudents.map(avg => avg.assignment)} />
                    <VictoryBar
                        labelComponent={<VictoryTooltip />}
                        data={assignmentRatingStudents}
                        x="assignment"
                        y="funRating"
                        tickValues={[1, 2, 3, 4, 5]}
                        tickFormat={assignmentRatingStudents.map(avg => avg.assignment)} />
                </VictoryGroup>
                <VictoryAxis
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={assignmentRatingStudents.map(avg => avg.assignment)} />
                <VictoryAxis dependentAxis />
            </VictoryChart >
        </div>
    )
}
export default Students