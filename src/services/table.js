export const getColumnsFromData = (data) => {
    if (!data || data.length === 0) return [];
  
    return Object.keys(data[0]).map((key) => ({
      Header: key,
      accessor: key,
    }));
  };
  