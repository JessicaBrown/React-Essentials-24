import "./tabs.css";

export const TabsMenu = ({ buttons }) => {
  console.log("in tabs wrapper", buttons);
  return (
    <>
      <menu>{buttons}</menu>
      {/* {children} */}
    </>
  );
};
