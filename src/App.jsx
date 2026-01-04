import Button from "./components/Button";

function App() {
  const handleClick = () => {
    alert("Кнопка нажата✨ ");
  };

  return (
    <div className="app">
      <h1>Мой первый React проект</h1>

      <Button
        text="Нажми меня🌸"
        type="button"
        onClick={handleClick}
      />
    </div>
  );
}

export default App;
