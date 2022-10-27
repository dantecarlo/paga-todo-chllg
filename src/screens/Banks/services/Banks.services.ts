import { challengeApi } from 'services/challenge.api'
import { abortController } from 'services/loadAbortController.services'
import { BANKS_API } from 'utils/constants/api.constants'

import { IBankData } from '../Banks.types'

export const loadBanks = () => {
  const controller = abortController()

  return {
    call: challengeApi.get<IBankData>(BANKS_API, { signal: controller.signal }),
    controller
  }
}
