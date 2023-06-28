import React from 'react'

const BodyPartLegend = ({ scores }) => {
  const bodyParts = {
    nose: 0.9980533123016357,
    leftEye: 0.9954335689544678,
    rightEye: 0.9995456337928772,
    leftEar: 0.33361077308654785,
    rightEar: 0.9880875945091248,
    leftShoulder: 0.9914394617080688,
    rightShoulder: 0.9823103547096252,
    leftElbow: 0.27302297949790955,
    rightElbow: 0.13327018916606903,
    leftWrist: 0.023343998938798904,
    rightWrist: 0.0351378433406353,
    leftHip: 0.009763401933014393,
    rightHip: 0.0023434110917150974,
    leftKnee: 0.008708992972970009,
    rightKnee: 0.007620042993515253,
  }

  const getBodyPart = (score) => {
    const threshold = props.threshold || 0.0

    if (Array.isArray(score)) {
      return score.map((s) => {
        const matchingParts = Object.entries(bodyParts).reduce((closestParts, [part, partScore]) => {
          const closestScore = bodyParts[closestParts[0]] || 0
          const scoreDifference = Math.abs(partScore - s)
          const closestDifference = Math.abs(closestScore - s)

          if (partScore >= threshold && scoreDifference <= closestDifference) {
            if (scoreDifference < closestDifference) {
              return [part]
            } else {
              return closestParts.concat(part)
            }
          }

          return closestParts
        }, [])

        return matchingParts.length > 0 ? toTitleCase(matchingParts.join(', ')) : 'Unknown'
      })
    } else {
      const matchingPart = Object.entries(bodyParts).reduce((closestPart, [part, partScore]) => {
        const closestScore = bodyParts[closestPart] || 0
        const scoreDifference = Math.abs(partScore - score)
        const closestDifference = Math.abs(closestScore - score)

        if (partScore >= threshold && scoreDifference <= closestDifference) {
          if (scoreDifference < closestDifference) {
            return part
          } else {
            return closestPart + ', ' + part
          }
        }

        return closestPart
      }, '')

      return matchingPart ? toTitleCase(matchingPart) : 'Unknown'
    }
  }

  const toTitleCase = (str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  }

  const bodyPart = scores.map((score, idx) => {
    return <div key={idx}>{getBodyPart(score)}</div>
  })

  return (
    <div className="flex flex-col text-center">
      <p className="opacity-20">{scores}</p>
      <h3 className="text-lg font-semibold opacity-50">Body Parts in WebCam: </h3>
      <div className="font-[700] text-xl drop-shadow-sm">{bodyPart}</div>
    </div>
  )
}

export default BodyPartLegend
