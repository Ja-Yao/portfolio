import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../client';

// This is where all the images get pulled from the firebase store to be
// loaded into the html. Add or remove these based on what you want to
// display in the final page.

const css = getDownloadURL(ref(storage, 'assets/css.png')).then(url => {
  const cssElement = document.getElementById('CSS-img');
  cssElement.setAttribute('src', url);
});
const figma = getDownloadURL(ref(storage, 'assets/figma.png')).then(url => {
  const figmaElement = document.getElementById('Figma-img');
  figmaElement.setAttribute('src', url);
});
const git = getDownloadURL(ref(storage, 'assets/git.png')).then(url => {
  const gitElement = document.getElementById('Git-img');
  gitElement.setAttribute('src', url);
});
const html = getDownloadURL(ref(storage, 'assets/html.png')).then(url => {
  const htmlElement = document.getElementById('HTML-img');
  htmlElement.setAttribute('src', url);
});
const javascript = getDownloadURL(ref(storage, 'assets/javascript.png')).then(url => {
  const javascriptElement = document.getElementById('JavaScript-img');
  javascriptElement.setAttribute('src', url);
});
const mu5 = getDownloadURL(ref(storage, 'assets/mu5.png')).then(url => {
  const mu5Element = document.getElementById('Material UI-img');
  mu5Element.setAttribute('src', url);
});
const react = getDownloadURL(ref(storage, 'assets/react.png')).then(url => {
  const reactElement = document.getElementById('React-img');
  reactElement.setAttribute('src', url);
});
const portrait = getDownloadURL(ref(storage, 'assets/portrait.png')).then(url => {
  const portraitElement = document.getElementById('portrait-img');
  portraitElement.setAttribute('src', url);
});
const portrait2 = getDownloadURL(ref(storage, 'assets/portrait-2.jpg')).then(url => {
  const portraitElement = document.getElementById('about-img');
  portraitElement.setAttribute('src', url);
});
const python = getDownloadURL(ref(storage, 'assets/python.png')).then(url => {
  const pythonElement = document.getElementById('Python-img');
  pythonElement.setAttribute('src', url);
});
const firebase = getDownloadURL(ref(storage, 'assets/firebase.png')).then(url => {
  const firebaseElement = document.getElementById('Firebase-img');
  firebaseElement.setAttribute('src', url);
});
const flask = getDownloadURL(ref(storage, 'assets/flask.png')).then(url => {
  const flaskElement = document.getElementById('Flask-img');
  flaskElement.setAttribute('src', url);
});
const inDesign = getDownloadURL(ref(storage, 'assets/inDesign.png')).then(url => {
  const inDesignElement = document.getElementById('Adobe InDesign-img');
  inDesignElement.setAttribute('src', url);
});
const XD = getDownloadURL(ref(storage, 'assets/xd.png')).then(url => {
  const XDElement = document.getElementById('Adobe XD-img');
  XDElement.setAttribute('src', url);
});


export default {
  css,
  figma,
  git,
  html,
  javascript,
  mu5,
  react,
  portrait,
  portrait2,
  python,
  firebase,
  flask,
  inDesign,
  XD,
};