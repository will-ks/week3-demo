const ConditionalRender = ({ isEndOfDay, favouriteNumber }) => {
  return (
    <div>
      {isEndOfDay ? <div>Goodbye, world</div> : <div>Hello, world</div>}
    </div>
  );
};

export default ConditionalRender;
