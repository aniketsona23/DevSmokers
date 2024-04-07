import "./styles/menuPanel.css";

function MenuPanel({cols}) {
  return (
    <div className="menu-options">
      {cols.map((option) => {
        return <button className="menu-option">{option.header}</button>;
      })}
    </div>
  );
}

export default MenuPanel;
