import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../client';


getDownloadURL(ref(storage, 'assets/css.png'));
getDownloadURL(ref(storage, 'assets/figma.png'));
getDownloadURL(ref(storage, 'assets/git.png'));
getDownloadURL(ref(storage, 'assets/html.png'));
getDownloadURL(ref(storage, 'assets/javascript.png'));
getDownloadURL(ref(storage, 'assets/mu5.png'));
getDownloadURL(ref(storage, 'assets/node.png'));
getDownloadURL(ref(storage, 'assets/react.png'));
getDownloadURL(ref(storage, 'assets/redux.png'));
getDownloadURL(ref(storage, 'assets/sass.png'));
const portrait = getDownloadURL(ref(storage, 'assets/portrait.png')).then(url => {
  const portraitElement = document.getElementById('portrait-img');
  portraitElement.setAttribute('src', url);
});
getDownloadURL(ref(storage, 'assets/circle.svg'));

export default {
  // css,
  // figma,
  // git,
  // html,
  // javascript,
  // mu5,
  // node,
  // react,
  // redux,
  // sass,
  portrait,
  // circle,
};