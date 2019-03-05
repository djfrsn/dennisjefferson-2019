const FlexCenter = ({ direction = 'column', children }) => {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default FlexCenter;
