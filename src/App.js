import "./App.css";

export default function App() {
  let froma = document.querySelector(".login-box");

  return (
    <div className="App">
      <header>
        <nav>
          <h1>Logo</h1>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
          <button
            onClick={function () {
              froma.classList.toggle("login-box-toggle");
            }}
            className="Login_btn"
          >
            Login
          </button>
        </nav>
        <div className="login-box">
          <from>
            <h1>login from</h1>
            <label id="uname">user name:</label>
            <input type="text" placeholder="User name" />
            <label id="pass">Password:</label>
            <input type="password" placeholder="Enter Your Password" />
            <div className="btn_align">
              <button className="login">Login</button>
            </div>
          </from>
        </div>
      </header>
    </div>
  );
}
