import * as tf from '@tensorflow/tfjs'

async function loadModel() {
  const model = await tf.loadGraphModel('model/model.json')
  return model
}

const modelPromise = loadModel()
