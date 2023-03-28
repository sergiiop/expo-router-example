import { useRouter, useSearchParams } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

const profile = () => {
  const router = useRouter()
  const params = useSearchParams()
  console.log(params)
  return (
    <View>
      <Text>profile</Text>
      <Button onPress={() => router.back()} title='Go Back' />
    </View>
  )
}

export default profile
