const getMetaData = (json) => {
  const [start, span] = json.filter(
    (e) => e.type === "start" || e.type === "span"
  );
  return {
    select: start.select,
    group: start.group,
    begin: span.begin,
    end: span.end,
  };
};

export default getMetaData;
