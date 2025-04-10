const Container = ({ children }) => {
  return (
    <div
      className={`min-h-[100vh] flex flex-col items-center py-0 px-0 justify-center`}
    >
      {children}
    </div>
  );
};

export default Container;
