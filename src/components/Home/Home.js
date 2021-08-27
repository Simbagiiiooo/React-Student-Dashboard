import React from 'react'
import './Home.css'
import { useTranslation } from 'react-i18next';
import {
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryTooltip,
    VictoryLine,
    VictoryGroup
} from "victory"
import Img from '../images/foto.jpg'


function Home(props) {
    const wincTheme = props.wincTheme.default
    const StudentDataNew = props.studentData.student;
    const taskData = StudentDataNew.map(x => x.assignments)
    const flatArray = taskData.flat()
    const uniqueTaskNames = taskData[0].map(x => x.name)
    let sortedTasks = [];

    uniqueTaskNames.forEach(assignment => {
        let groupedTasks = flatArray.filter(x => x.name === assignment)
        sortedTasks.push(groupedTasks)
    });
    let totalTasks = [];
    sortedTasks.forEach(setTask => {
        const reducer = setTask.reduce((total, current) => {
            return { name: current.name, difficultyRating: total.difficultyRating + current.difficultyRating, funRating: total.funRating + current.funRating }
        });
        totalTasks.push(reducer)
    })
    const taskAverage = totalTasks.map((current) => {
        return { name: current.name, difficultyRating: (current.difficultyRating / StudentDataNew.length), funRating: (current.funRating / StudentDataNew.length) }
    });

    const taskDiffecultAverage = taskAverage.map(avg => ({
        assignment: avg.name,
        difficultyRating: avg.difficultyRating,
        funByRating: 0,
    }))
    const taskDiffecultAverageLabels = taskAverage.map(avg => ({
        assignment: avg.name,
        difficultyRating: avg.difficultyRating,
        funByRating: 0,
        label: `Opdracht ${avg.name}, 
            Difficulty-rating: ${avg.difficultyRating}`
    }))


    const tasksFunAverage = taskAverage.map(avg => ({
        assignment: avg.name,
        difficultyRating: 0,
        funByRating: avg.funRating,
    }))
    const tasksFunAverageLabels = taskAverage.map(avg => ({
        assignment: avg.name,
        difficultyRating: 0,
        funByRating: avg.funRating,
        label: `Opdracht ${avg.name},  
            Fun-rating: ${avg.funRating}`
    }))

    const taskRatingAverage = taskAverage.map(avg => ({
        assignment: avg.name,
        difficultyRating: avg.difficultyRating,
        funByRating: avg.funRating
    }));
    const taskRatingAverageLabels = taskRatingAverage.map(avg => ({
        assignment: avg.assignment,
        difficultyRating: avg.difficultyRating,
        funByRating: avg.funByRating,
        label: `Opdracht ${avg.assignment}, 
            difficultyRating: ${avg.difficultyRating},  
            funByRating: ${avg.funByRating}`
    }))


    const displayAverageInBar = () => {
        if (props.barRating.name === 'difficult-and-fun') {
            return taskRatingAverageLabels
        } else if (props.barRating.name === 'difficult') {
            return taskDiffecultAverageLabels
        } else if (props.barRating.name === 'fun') {
            return tasksFunAverageLabels
        }
    }

    const displayAverageInLine = () => {
        if (props.lineRating.name === 'difficult-and-fun') {
            return taskRatingAverage
        } else if (props.lineRating.name === 'difficult') {
            return taskDiffecultAverage
        } else if (props.lineRating.name === 'fun') {
            return tasksFunAverage
        }
    }

    const { t } = useTranslation();

    return (
        <div>
            <h1 className="home-header">Home</h1>
            <div className="home-container">
            <div className="home">
                <div>
                    <p className="home-1">{t('home-1')}</p>
                    <p className="home-2">{t('home-2')}</p>
                    <p className="home-2">{t('home-3')}</p>
                    <p className="home-4">{t('home-4')}</p>
                </div>
            </div>
                <div>
                    <img className="img" src={Img} alt="selfie" height="155px" />
                </div>
            </div>
            <h1 className="average">{t('average')}</h1>
            <h3 className="average-h3">{t('average-h3')}</h3>
                <VictoryChart domainPadding={15} theme={wincTheme}>
                    <VictoryGroup offset={5}>
                        <VictoryBar
                            labelComponent={<VictoryTooltip />}
                            data={displayAverageInBar()}
                            x="assignment"
                            y="difficultyRating"
                            tickValues={[1, 2, 3, 4, 5]}
                            tickFormat={taskAverage.map(avg => avg.name)} />
                        <VictoryBar
                            labelComponent={<VictoryTooltip />}
                            data={displayAverageInBar()}
                            x="assignment"
                            y="funByRating"
                            tickValues={[1, 2, 3, 4, 5]}
                            tickFormat={taskAverage.map(avg => avg.name)} />
                    </VictoryGroup>
                    <VictoryAxis
                        tickValues={[1, 2, 3, 4, 5]}
                        tickFormat={taskAverage.map(avg => avg.name)} />
                    <VictoryAxis dependentAxis />
                </VictoryChart >
                            <div className="radiobuttons1">
                <label className="custom-radio-average">
                <input
                    type="radio"
                    name='barRating'
                    value="difficult-and-fun"
                    checked={props.barRating.name === "difficult-and-fun"}
                    onChange={props.handleChangeBarRating}
                    />
                    <span className="radio-btn-average">
                        <i className="icon-check"></i>
                    <div className="icon-average">
                    <h3>{t('difficult-and-fun')}</h3>
                    </div>
                </span>
                </label>
                <label className="custom-radio-average">
                <input
                    type="radio"
                    name='barRating'
                    value="difficult"
                    checked={props.barRating.name === "difficult"}
                    onChange={props.handleChangeBarRating}
                    />
                    <span className="radio-btn-average">
                        <i className="icon-check"></i>
                    <div className="icon-average">
                    <h3>{t('difficult')}</h3>
                    </div>
                </span>
                </label>
                <label className="custom-radio-average">
                <input
                    type="radio"
                    name='barRating'
                    value="fun"
                    checked={props.barRating.name === "fun"}
                    onChange={props.handleChangeBarRating}
                    />
                    <span className="radio-btn-average">
                        <i className="icon-check"></i>
                    <div className="icon-average">
                    <h3>{t('fun')}</h3>
                    </div>
                </span>
                </label>
                </div>
                <br />
                <h1 className="average average-line">{t('average-line')}</h1>
                <h3 className="average-h3 average-h3-line">{t('average-h3-line')}</h3>
                <VictoryChart domainPadding={15} theme={wincTheme}>
                    <VictoryLine
                        style={{
                            data: { stroke: "#FDCA40" },
                            parent: { border: "1px solid #ccc" }
                        }}
                        data={displayAverageInLine()}
                        x="assignment"
                        y="difficultyRating" />
                    <VictoryLine
                        style={{
                            data: { stroke: "#A799B7" },
                            parent: { border: "1px solid #ccc" }
                        }}
                        data={displayAverageInLine()}
                        x="assignment"
                        y="funByRating" />
                    <VictoryAxis
                        tickValues={[1, 2, 3, 4, 5]}
                        tickFormat={taskAverage.map(avg => avg.name)} />
                    <VictoryAxis dependentAxis />
                </VictoryChart>
                <div className="radiobuttons1">
                <label className="custom-radio-average">
                <input
                    type="radio"
                    name='lineRating'
                    value="difficult-and-fun"
                    checked={props.lineRating.name === "difficult-and-fun"}
                    onChange={props.handleChangeLineRating}
                    />
                    <span className="radio-btn-average">
                        <i className="icon-check"></i>
                    <div className="icon-average">
                    <h3>{t('difficult-and-fun')}</h3>
                    </div>
                </span>
                </label>
                <label className="custom-radio-average">
                <input
                    type="radio"
                    name='lineRating'
                    value="difficult"
                    checked={props.lineRating.name === "difficult"}
                    onChange={props.handleChangeLineRating}
                    />
                    <span className="radio-btn-average">
                        <i className="icon-check"></i>
                    <div className="icon-average">
                    <h3>{t('difficult')}</h3>
                    </div>
                </span>
                </label>
                <label className="custom-radio-average">
                <input
                    type="radio"
                    name='lineRating'
                    value="fun"
                    checked={props.lineRating.name === "fun"}
                    onChange={props.handleChangeLineRating}
                    />
                    <span className="radio-btn-average">
                        <i className="icon-check"></i>
                    <div className="icon-average">
                    <h3>{t('fun')}</h3>
                    </div>
                </span>
                </label>
                </div>
        </div>
    )
}
export default Home