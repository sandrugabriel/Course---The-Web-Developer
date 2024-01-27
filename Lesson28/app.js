
const data = `{"ticker":{"base":"BTC","target":"USD","price":"11288.49813464","volume":"91769.69699773","change":"-46.29462447"},"timestamp":1596510482,"success":true,"error":""}`

const parsedData = JSON.parse(data);

//XMLHTTp
const req = new XMLHttpRequest();

req.onload = function () {
  console.log("IT LOADED!!");
  const data = JSON.parse(this.responseText);
  console.log(data.name, data.height);
};

req.onerror = function () {
  console.log("ERROR!!!!");
  console.log(this);
};

req.open("GET", "https://swapi.dev/api/people/1/");
req.send();

//Fetch

const loadStarWarsPeople = async () => {
    try {
      const res = await fetch("https://swapi.dev/api/people/1/");
      const data = await res.json();
      console.log(data);
      const res2 = await fetch("https://swapi.dev/api/people/2/");
      const data2 = await res2.json();
      console.log(data2);
    } catch (e) {
      console.log("ERROR!!!", e);
    }
  };
  
  loadStarWarsPeople();

  //Axios

  const getStarWarsPerson = async (id) => {
    try {
      const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
      console.log(res.data);
    } catch (e) {
      console.log("ERROR", e);
    }
  };
  
  getStarWarsPerson(5);
  getStarWarsPerson(10);
  
  