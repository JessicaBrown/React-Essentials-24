export const Tab = ({
  children,
  isSelectedTab,
  ...forwardOnClickWithProps
}) => {
  return (
    <>
      <li>
        <button
          className={isSelectedTab ? "active" : ""}
          {...forwardOnClickWithProps}
        >
          {children}
        </button>
      </li>
    </>
  );
};
