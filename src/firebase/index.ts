import { initializeApp }  from 'firebase/app'
import { collection, getFirestore, getDocs, QuerySnapshot, DocumentData } from 'firebase/firestore'
import { firebaseConfig } from '../config/firebase'
import { getAuth} from 'firebase/auth' 

const app = initializeApp(firebaseConfig)

const firestore = getFirestore(app)

const auth = getAuth(app)

const notes = collection(firestore, "notes")

const folders = collection(firestore, "folders")

interface T {
	id: string
}

interface Note extends T {
	name: string
}

interface Folder extends T {
	name: string
}


function transform(query: Promise<QuerySnapshot<DocumentData>>): Promise<T[]> { return new Promise(async (resolve, reject) => {
		try {
		 const res =  await	query
		 const data : T[] = []
		res.docs.forEach((doc) => {
			const id = doc.id
			data.push({id, ...doc.data()})
		})
			resolve(data)
		} catch (error) {
			reject(error)
		}
})
}


export default {
	getNotes: (): Promise<Note[]> => transform(getDocs(notes)) as Promise<Note[]>,
	getFolders: (): Promise<Folder[]> => transform(getDocs(folders)) as Promise<Folder[]>,
	auth,
}