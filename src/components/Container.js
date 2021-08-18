import React, { useState } from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import Home from "./Home/Home"
import OverviewWithVictory from './VictoryGraph/OverviewWithVictory'
import AllStudents from './students/Students'

const studentData = require('./Studentdata.json')
const wincTheme = require('./Theme/WincTheme')

const Container = () => {
    const [barRating, setBarRating] = useState({ name: "difficult-and-fun" })
    const [lineRating, setLineRating] = useState({ name: "difficult-and-fun" })
    const [allStudentData, setAllStudentData] = useState({ name: "Evelyn" })

    const handleStudentChange = e => {
        const { value } = e.target
        setAllStudentData({ name: value })
    }

    const handleChangeBarRating = e => {
        const { value } = e.target
        setBarRating({ name: value })
    }
    const handleChangeLineRating = e => {
        const { value } = e.target
        setLineRating({ name: value })
    }

    return (
        <main className="main">
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/OverviewWithVictory">
                    <OverviewWithVictory
                        studentData={studentData}
                        wincTheme={wincTheme}
                        barRating={barRating}
                        lineRating={lineRating}
                        handleChangeBarRating={handleChangeBarRating}
                        handleChangeLineRating={handleChangeLineRating} />
                </Route>
                <Route path="/students/allstudents">
                    <AllStudents
                        studentData={studentData}
                        wincTheme={wincTheme}
                        handleStudentChange={handleStudentChange}
                        allStudentData={allStudentData} />
                </Route>
            </Switch>
        </main >
    )
}

export default Container