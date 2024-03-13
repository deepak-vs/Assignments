const generateRandomTimestamp = (startTimestamp: number, endTimestamp: number): Date => {
  const randomTimestamp = startTimestamp + Math.random() * (endTimestamp - startTimestamp)
  return new Date(randomTimestamp)
}

export const getTime = () => {
  const startTimestamp = new Date('2024-03-01').getTime()
  const endTimestamp = new Date().getTime()
  const randomTimestamp: any = generateRandomTimestamp(startTimestamp, endTimestamp)
  const now: any = new Date()
  const diffInMilliseconds = now - randomTimestamp
  const minutes = Math.floor(diffInMilliseconds / (60 * 1000))
  const hours = Math.floor(diffInMilliseconds / (60 * 60 * 1000))
  const days = Math.floor(diffInMilliseconds / (24 * 60 * 60 * 1000))
  if (minutes < 60) {
    return `${minutes} min ago`
  }
  if (hours < 24) {
    return `${hours} hours ago`
  }
  if (days < 7) {
    return `${days} days ago`
  } else {
    return `${days % 7} weeks ago`
  }
}

