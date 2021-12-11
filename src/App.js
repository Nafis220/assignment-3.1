import './App.css';
import Card from './components/card/card';
import List from './components/list/list';
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-around">

          <div  className="col-4 bg-primary pt-2"> {/* Left Column */}
           <h1 className="mb-3" style={{textSize:'5rem', fontWeight:'700',color:'#84c128'}}>Eavly</h1>
           <ul style={{borderTop:'1px solid #84c128',
                 borderBottom:'1px solid #84c128'}}>
             <List name='HOME'/>
             <List name='OUR STORY'/>
             <List name='MENU'/>
             <List name='CONTACT US'/>
           </ul>
           
           </div>

          <div className="col-7 bg-success pt-2">{/* Right Column */}
            <h2 style={{textSize:'5rem', fontWeight:'700',color:'#ebb71b '}}>Our Products </h2>
            <div class="row row-cols-1 row-cols-md-3 g-4 p-4">

               <Card name ='Hot Tea' imgSrc = {'TeaImg'} UpdateTime='Last updated 5 mins ago'/>
               <Card name ='Terminalia Chebula' imgSrc = {'terminaliaChebula'} UpdateTime='Last updated 3 mins ago'/>
               <Card name ='Hygienic Oil' imgSrc = {'hygienicOil'} UpdateTime='Last updated 7 mins ago'/>

           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
