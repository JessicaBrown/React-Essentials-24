import "./tabButton.css";
// props Using Spread Operator This Is How To Pass Using onClick and other on's
// instead of passing it manually and making the onClick on the child
// Basically FORWARDING LEFT OVER PROPS
// Makes it dynamic instead of defining them yourself

export const TabButton = ({ children, isSelectedTab, ...findProps }) => {
  return (
    <li>
      {/* remove onClick={onclick}  from child and add spread */}
      <button className={isSelectedTab ? "active" : ""} {...findProps}>
        {children}
      </button>
    </li>
  );
};
