import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import keys from './keys';

try {
    firebase.initializeApp( keys );
}
catch( error ) {}

export default firebase;