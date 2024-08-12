import Cookies from "js-cookie";

type APIResponse =
  | {
      success: true;
      data: any;
    }
  | {
      success: false;
      data: string;
    };

export const API = {
  async sendPostRequest2(
    url: string,
    data: any,
    auth?: true
  ): Promise<APIResponse> {
    if (auth) {
      const token = Cookies.get("token");
      if (!token) {
        throw new Error("Not Authorised");
      }
    }
    const token = Cookies.get("token");
    const res1 = await fetch(url, {
      method: "POST",
      headers: {
        // 'Content-type': 'multipart/form-data; boundary=ebf9f03029db4c2799ae16b5428b06bd',
  Authorization: `Bearer ${token}`,
      },
      body:data,
    });
    if (res1.ok) {
      // const res= await res1.json();
      const data = await res1.json();
      return { success: true, data: data };
    } else {
      return { success: false, data: "Could not post" };
    }
  },
  async sendPostRequest(
    url: string,
    data: any,
    auth?: true
  ): Promise<APIResponse> {
    if (auth) {
      const token = Cookies.get("token");
      if (!token) {
        throw new Error("Not Authorised");
      }
    }
    const token = Cookies.get("token");
    let res;
    if(token&&auth)
    { res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
  }
  else{
    res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
    if (res.ok) {
      const data = await res.json();
      return { success: true, data: data };
    } else {
      return { success: false, data: "Could not put" };
    }
  },
  async sendGetRequest(url: string, auth?: true) {
    if (auth) {
      const token = Cookies.get("token");
      if (!token) {
        throw new Error("Not Authorised");
      }
    }
    const token = Cookies.get("token");
    let res;
    // console.log(token)
    if(token&&auth)
    { res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }
  else{
    res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
  }
    if (res.ok) {
      const data = await res.json();
      return { success: true, data: data };
    } else {
      return { success: false, data: "Could not Get" };
    }
  },
  async sendPutRequest(
    url: string,
    data: any,
    auth?: true
  ): Promise<APIResponse> {
    if (auth) {
      const token = Cookies.get("token");
      if (!token) {
        throw new Error("Not Authorised");
      }
    }
    const token = Cookies.get("token");
    let res;
    if(token)
    { res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
  }
  else{
    res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
    if (res.ok) {
      const data = await res.json();
      return { success: true, data: data };
    } else {
      return { success: false, data: "Could not put" };
    }
  },
};