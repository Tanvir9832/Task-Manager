export const authorization = {
    headers: {
      authorization: `Bearer ${localStorage.getItem("taskmanagement")}`,
    },
  };