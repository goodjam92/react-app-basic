import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coin, setCoin] = useState({});
  const [money, setMoney] = useState(0);
  const [exchange, setExchange] = useState(0);

  const onChange = (event) => {
    const coinName = event.target.value.split(" (", 1);
    const currentCoin = coins.filter((data) => data.name === coinName[0]);
    setCoin(currentCoin[0]);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChangeDollars = (event) => {
    setMoney(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (money === 0) {
      return console.log("error");
    }
    setExchange(money / coin.quotes.USD.price);
  };

  // input으로 내가 갖고 있는 돈을 설정하고, option으로 선택한 코인의 금액을
  // 얼마나 구입할 수 있는지 나타내는 문구 표현해보기!
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      <h2>Do you have dollars ??</h2>
      <form onSubmit={onSubmit}>
        <input
          value={money}
          type="number"
          placeholder="Your dollars $"
          onChange={onChangeDollars}
        />
        <button>send</button>
      </form>

      {loading ? <strong>Loading...</strong> : null}
      <div>
        <select onChange={onChange}>
          <option>Choose coin</option>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price}
            </option>
          ))}
        </select>
        <div>
          <span>{exchange}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
