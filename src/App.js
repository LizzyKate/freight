import Layout from './main';
import Navbar from './nav';




function App() {
  return (
    <div className="App">
     <Navbar/>
     <section className="booking">
            <button className="back">
                <i className="ri-arrow-left-line"></i>
            </button>
            <Layout/>
        </section>
   
    </div>
  );
}

export default App;
