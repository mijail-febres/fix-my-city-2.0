import Axios from "./index";

/* export const fetchIssues = async () => {
  const url = "issues/";
  const response = await Axios.get(url);
  return response.data;
}; */

export const fetchProfileInfo = async (user = "") => {
  let url;

  if (user) {
    url = `users/${user}/`;
  } else {
    url = "me/";
  }

  const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
  };

  try {
    const response = await Axios.get(url, config);
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    if (err) {
      console.log(err.response);
    }
  }
};

export const patchProfileInfo = async (formdata) => {
  const url = "me/";

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
  };

  try {
    const resp = await Axios.patch(url, formdata, config);
    if (resp.status === 200) {
      console.log("Success. Profile information has been updated.");
    }
  } catch (err) {
    if (err) {
      console.log(err.response);
    }
  }
};

export const patchIssue = async (id, status) => {
  const url = `issues/${id}/`;

  const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const body = {
    status: `${status}`,
  };

  try {
    const response = await Axios.patch(url, body, config);
    if (response.status === 200) {
      console.log("Success. Issue status has been updated.");
    }
  } catch (err) {
    if (err) {
      console.log(err.response);
    }
  }
};

export const patchToggleUpvote = async (id) => {
  const url = `issues/upvote/${id}/`;

  const body = {};

  const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
  };

  try {
    const response = await Axios.patch(url, body, config);
    if (response.status === 200) {
      console.log("Success. Issue upvote has been updated.");
    }
  } catch (err) {
    if (err) {
      console.log(err.response);
    }
  }
};

export const createIssue = async (formdata) => {
  const url = "/issues/new/";

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const resp = await Axios.post(url, formdata, config);
  return resp;
};

export const fetchIssues = async (user = "") => {
  let url;

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
  };

  if (user) {
    url = `/issues/user/${user}/`;
  } else {
    url = "/issues/";
  }

  try {
    const response = await Axios.get(url, config);
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    if (err) {
      console.log(err.response);
    }
  }
};
