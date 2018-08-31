import { AsyncStorage } from 'react-native'
import { logger } from '../logger'

AsyncStorage.logAll = async () => {
    const keys = await AsyncStorage.getAllKeys()

    let result = []

    await Promise.all(
        keys.map(async key => {
            const item = await AsyncStorage.getItem(key)
            result.push({ key, item })
        })
    )

    logger('AsyncStorage.logAll', result)
}

module.exports = host => {
    host.asyncStorage = AsyncStorage
}
