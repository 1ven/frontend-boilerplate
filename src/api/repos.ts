type Repo = {
  id: number;
  full_name: string;
  name: string;
};

export default {
  url: "/users/:name/repos",
  method: "GET"
};

export const getEntry = api => api.repos;
