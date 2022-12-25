import "./App.css";
import { Menu } from "./Navigation";
import { Item, Section } from "react-stately";
import { adminMenu } from "./constants/menu";

function App() {
  return (
    <div className="App">
      <aside id="sidebar">Something</aside>
      <header className="App-header">
        <Menu onAction={console.log} aria-label="menu">
          {adminMenu.map((item) => {
            if (item.type === "submenu" && item.items) {
              return (
                <Section title={item.label}>
                  {item.items.map((submenuItem) => (
                    <Item key={submenuItem.key}>{submenuItem.label}</Item>
                  ))}
                </Section>
              );
            }
            return <Item key={item.key}>{item.label}</Item>;
          })}
        </Menu>
      </header>
    </div>
  );
}

export default App;
