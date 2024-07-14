import "./tabButton.css";
//children prop pulls anything that is in between the TabButton on Parent component
//    <TabButton><div>whatever is here including div </div></TabButton>

export const TabButton = ({ children, isSelectedTab, onclick }) => {
  return (
    <li>
      <button className={isSelectedTab ? "active" : ""} onClick={onclick}>
        {children}
      </button>
    </li>
  );
};
