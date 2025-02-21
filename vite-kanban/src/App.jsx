// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Header from "./components/Header/Header";
import Column from "./components/Column/Column";
import AccountExit from "./components/Account/AccountExit";
import CreateTask from "./components/Task/CreateTask";
function App() {
  // const [count, setCount] = useState(0)
  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  return (
    <>
      <div className="wrapper">
        {/* !-- pop-up start--> */}
        <AccountExit />
        <CreateTask />
        {/* <!-- pop-up end--> */}

        <Header />

        <main className="main">
          <div className="container">
            <div className="main__block">
              <div className="main__content">
                {/* start column */}
                {statusList.map((status) => (
                  <Column key={status} title={status} />
                ))}

                {/* end column */}
              </div>
            </div>
          </div>
        </main>
      </div>

      <script src="js/script.js"></script>
    </>
  );
}

export default App;
