import { initializeApp, firestore as Firestore } from 'firebase-admin'

initializeApp()

export const firestore = Firestore()
firestore.settings({
  timestampsInSnapshots: true
})
