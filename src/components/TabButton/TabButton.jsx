import "./tabButton.css";

export const TabButton = ({ children, isSelectedTab, onclick }) => {
  return (
    <li>
      <button className={isSelectedTab ? "active" : ""} onClick={onclick}>
        {children}
      </button>
    </li>
  );
};
