import './App.css';

function App() {
  return (
    <div className="container-wrap">
      <div className="container-basic">
        <h1 className="container-title text-center">Sign up</h1>
        <div className="flex flex-col items-center mt-10 px-10">
          <label className="w-full">
            <input
              className="common-input"
              type="text"
              placeholder="Email Address"
            />
          </label>
          <label className="w-full mt-5">
            <input
              className="common-input"
              type="password"
              placeholder="Password"
            />
          </label>
          <button className="common-button mt-16" type="button">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
