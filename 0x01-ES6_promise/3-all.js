import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((resArr) => {
      console.log(`${resArr[0].body} ${resArr[1].firstName} ${resArr[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
