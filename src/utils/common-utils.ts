import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUserFromStorage = async () => {
    try {
      const userJSON = await AsyncStorage.getItem('User');
      if (userJSON !== null) {
        const user = JSON.parse(userJSON);
        console.log('User object from AsyncStorage:', user);
        return user;
      } else {
        console.log('No user object found in AsyncStorage');
        return null;
      }
    } catch (error) {
      console.error('Error retrieving user object from AsyncStorage:', error);
      return null;
    }
  };
  export const getUserOnboardingStatus = async () => {
    try {
      const statusJSON = await AsyncStorage.getItem('isUserOnBoarded');
      if (statusJSON !== null) {
        const status = JSON.parse(statusJSON);
        console.log('Onbaording status from AsyncStorage:', status);
        return status;
      } else {
        console.log('User is not onBoard');
        return null;
      }
    } catch (error) {
      console.error('Error retrieving onboarding status from AsyncStorage:', error);
      return null;
    }
  };


export const removeUserFromStorage = async () => {
  try {
    await AsyncStorage.removeItem('User');
    console.log('User removed from AsyncStorage');
  } catch (error) {
    console.error('Error removing user object from AsyncStorage:', error);
  }
};

export const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('AsyncStorage cleared successfully.');
  } catch (error) {
    console.error('Error clearing AsyncStorage:', error);
  }
};

