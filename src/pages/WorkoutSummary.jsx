import React from 'react'
import { ShareWorkout } from '../components'

const WorkoutSummary = ({ exerciseLogs }) => {
  return (
    <div>
     <ShareWorkout exerciseLogs={exerciseLogs} /> 
    </div>
  )
}

export default WorkoutSummary
