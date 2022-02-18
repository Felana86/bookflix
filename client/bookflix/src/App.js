
import './App.css';
import axios from 'axios';

function App() {

  const fetchData = () => {
    var options = {
      method: 'GET',
      url: 'https://retoolapi.dev/t6FZHH/datatest',
    };
    
    const data = axios.request(options).then(function (response) {
      console.log(response.data[0].text);
    }).catch(function (error) {
      console.error("Retour de l'erreur de l'API : " + error);
    });
  }

  return (
    
    <div className="App">
      <a onClick={fetchData} href="#">{data}</a>
    </div>
  );


}

export default App;
