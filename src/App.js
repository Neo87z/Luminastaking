import logo from "./logo.svg";
import "./App.css";
const bgGreen500 = "bg-green-500 px-4 py-2 rounded";
const bgGreen600 = "bg-green-600 px-4 py-2 rounded w-full";
const bgZinc900 = "bg-zinc-900 p-4 rounded-lg";
const inputStyle = "bg-zinc-700 p-2 w-full rounded mb-2";

function App() {
  return (
    <div className="bg-zinc-800 text-white font-sans h-screen">
      <div className="container mx-auto px-4 py-8 h-full">
        <Header />
        <StakingGrid />
        <ConnectWallet />
      </div>
    </div>
  );
}
function Header() {
  return (
    <div className="flex items-center justify-between mb-12">
      <h1 className="text-3xl font-bold">Lumina AI Staking</h1>
      <img src="https://placehold.co/100x50" alt="Logo" />
    </div>
  );
}
function StakingGrid() {
  return (
  
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"> {/* Added margin-top mt-8 */}
      <StakingCard />
      <StakingCard />
      <StakingCard />
    </div>
  );
}
function StakingCard() {
  return (
    <div className={bgZinc900}>
      <h2 className="text-xl font-semibold mb-2">Lumina AI Staking</h2>
      <p>Stake LuminaAI tokens to earn WEBAI tokens</p>
      <div className="my-2">
        <div>Total Staked: ---</div>
        <div>Total Claimed: ---</div>
      </div>
      <div className="my-2">
        <div>Pending Reward: ---</div>
        <div>APY: 36%</div>
      </div>
      <div className="flex gap-2 my-2">
        <button className={bgGreen500}>Stake</button>
        <button className={bgGreen500}>Withdraw</button>
        <button className={bgGreen500}>Claim</button>
      </div>
      <div className="my-2">
        <input type="number" placeholder="Enter amount you want to stake" className={inputStyle} />
        <button className={bgGreen600}>Max</button>
      </div>
      <button className={bgGreen600} style={{ marginTop: '8px' }}>Approve</button>
    </div>
  );
}
function ConnectWallet() {
  return (
    <div className="mt-8 bg-zinc-900 p-4 rounded-lg text-center">
      <button className="bg-green-500 px-6 py-3 rounded">Connect Wallet</button>
    </div>
  );
}

export default App;
