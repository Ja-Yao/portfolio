import './App.scss';

import { About, Experience, Skills, Header, Footer, Contact } from './container';
import { Navbar } from './components';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header/>
      <About/>
      <Skills/>
      <Experience />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
