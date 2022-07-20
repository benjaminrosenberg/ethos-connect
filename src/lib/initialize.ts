import store from 'store2'
import { EthosConfiguration } from '../types/EthosConfiguration'
import log from './log'

const initialize = (ethosConfiguration: EthosConfiguration): void => {
  const ethosStore = store.namespace('ethos')
  log('initialize', 'Ethos Configuration', ethosConfiguration)
  ethosStore('configuration', ethosConfiguration)
}

export default initialize
