export const Section = ({ title, children, ...props }) => {
  // ... says look for all other props and put them into here
  // ...props is an example but you can name it what you want
  // in this case we need the styles to come through
  // if you manually add them it doesnt scale and will be messy
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
