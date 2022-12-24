import "./App.css";
import { Menu } from "./Navigation";
import { Item, Section } from "react-stately";

function App() {
  return (
    <div className="App">
      <aside id="sidebar">Something</aside>
      <header className="App-header">
        <Menu onAction={console.log}>
          <Item key="copy">Copy</Item>
          <Section title="Cut">
            <Item key="cut">Cut</Item>
          </Section>
          <Item key="paste">Paste</Item>
        </Menu>
      </header>
    </div>
  );
}

export default App;
