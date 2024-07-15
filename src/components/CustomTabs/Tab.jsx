// props Using Spread Operator This Is How To Pass Using onClick and other on's
// instead of passing it manually and making the onClick on the child
// Basically FORWARDING LEFT OVER PROPS
// Makes it dynamic instead of defining them yourself

// instead of setting dirty manually to get the conditional for all unclicked buttons
// go to the actual button and set the default
export const Tab = ({
  children,
  isSelectedTab,
  // isDirty,
  ...forwardProps
}) => {
  console.log("in tab.jsx", children, isSelectedTab, forwardProps);
  return (
    <>
      <li>
        {/* remove the manual pass of onClick={onclick}  
        -Add spread to pass the onClick */}

        {/* children data passed is the title */}
        <button className={isSelectedTab ? "active" : ""} {...forwardProps}>
          {children}
        </button>
      </li>
    </>
  );
};
