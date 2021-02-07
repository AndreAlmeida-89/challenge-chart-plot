import getMetaData from "./getMetaData";

const getData = (json) => {
  const metaData = getMetaData(json);
  return json.filter(
    (e) =>
      e.type === "data" 
      &&
      e.timestamp >= metaData.begin &&
      e.timestamp <= metaData.end
  );
};

export default getData