import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let res = {};

  try {
    const photo = await uploadPhoto('profile-1.jpg');
    const user = await createUser('Guillaume', 'Salva');
    res = { photo, user };
  } catch (error) {
    console.error('Error in asyncUploadUser:', error);
    res = { photo: null, user: null };
  }

  return res;
}
