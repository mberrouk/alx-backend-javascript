import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => {
      const arr = [];
      for (const prom of res) {
        arr.push({
          status: prom.status,
          value: prom.status === 'fulfilled' ? prom.value : String(prom.reason),
        });
      }
      return arr;
    });
}
