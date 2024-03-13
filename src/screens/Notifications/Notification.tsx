import React, { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import ASEmptyNotification from '../../components/empty-notification/ASEmptyNotification'
import ASNotificationCard from '../../components/notification-card/ASNotificationCard'
import { getTime } from '../../utils/common-utils'
import { URL } from '../../constants/api-constants'
import { styles } from './notification-styles'

type ImageIconKey = 1 | 2 | 3

interface NotificationItem {
  id: string
  icon: ImageIconKey
  reminder: string
  task: string
  time: string
}

type NotificationCount = number

const Notification = (): React.JSX.Element => {
  const [notificationCount, setNotificationCount] = useState<NotificationCount>(1)

  const [data, setData] = useState<NotificationItem[]>([])

  const getData = async () => {
    try {
      console.log(URL)
      const response = await fetch(`${URL}/getallreminders`)
      console.log(response.ok)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const data = await response.json()
      setData(data)
    } catch (error: any) {
      console.error('An error occurred while fetching data:', error.message)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={notificationCount ? data : []}
        renderItem={({ item }) => (
          <ASNotificationCard
            iconNum={item.icon}
            reminder={item.reminder}
            task={item.task}
            time={getTime()}
          />
        )}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={<ASEmptyNotification />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Notification
