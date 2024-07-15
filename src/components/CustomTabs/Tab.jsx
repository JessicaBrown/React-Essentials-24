export const Tab = ({ children, isSelectedTab, ...forwardProps }) => {
  return (
    <>
      <li>
        <button className={isSelectedTab ? "active" : ""} {...forwardProps}>
          {children}
        </button>
      </li>
    </>
  );
};
