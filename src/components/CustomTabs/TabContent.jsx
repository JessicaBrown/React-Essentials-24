export const TabContent = ({ data, isDirty, activeTab }) => {
  console.log("props in content", data, isDirty, activeTab);
  return (
    <div id="tab-content">
      {isDirty && activeTab !== null ? (
        <>
          <h3>{data[activeTab].title}</h3>
          <p>{data[activeTab].description}</p>
          <pre>
            <code>{data[activeTab].code}</code>
          </pre>
        </>
      ) : (
        "Please Select A Tab For More Information!"
      )}
      {/* {tab !== null ? (
        <>
          <h3>{data[tab].title}</h3>
          <p>{data[tab].description}</p>
          <pre>
            <code>{data[tab].code}</code>
          </pre>
        </>
      ) : (
        "Please Select A Topic"
      )} */}
    </div>
  );
};
