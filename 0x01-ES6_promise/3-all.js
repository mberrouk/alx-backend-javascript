import { uploadPhoto, createUser } from "./utils.js";

export default function handleProfileSignup() {
  const upPhoto = uploadPhoto();
  const creUser = createUser();

  return Promise.all([upPhoto, creUser]).then((resArr) => {
    console.log(resArr[0].body, resArr[1].firstName, resArr[1].lastName);
  }).catch(() => console.log('Signup system offline'));
}
