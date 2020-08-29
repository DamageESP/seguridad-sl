import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'
import { firebaseConfig } from '../config/firebase'
import store from '../src/store'

firebase.initializeApp(firebaseConfig)

const db = firebase.database()
const storage = firebase.storage()

const usersRef = db.ref('/users')

usersRef.on('child_added', snap => {
  store.commit('addEmpleado', {
    id: snap.key,
    ...snap.val()
  })
})

usersRef.on('child_changed', snap => {
  store.commit('editEmpleado', {
    id: snap.key,
    ...snap.val()
  })
})

usersRef.on('child_removed', snap => {
  store.commit('removeEmpleado', snap.key)
})

export const addUser = async userData => {
  const newUser = usersRef.push()
  const imageUrl = storage.ref().child(newUser.key)
  await imageUrl.putString(userData.profilePic, 'data_url')
  userData.profilePic = await imageUrl.getDownloadURL()
  newUser.set(userData)
  return {
    id: newUser.key,
    ...userData,
  }
}

export const editUser = async newUserData => {
  const imageUrl = storage.ref().child(newUserData.id)
  if (newUserData.profilePic.startsWith('data:')) {
    await imageUrl.putString(newUserData.profilePic, 'data_url')
    newUserData.profilePic = await imageUrl.getDownloadURL()
  }
  usersRef.child(newUserData.id).update(newUserData)
}
