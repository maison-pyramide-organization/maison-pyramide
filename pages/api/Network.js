export class Network {
  static async fetch(url, init, addAuth) {
    const response = await fetch(url, {
      mode: "cors",
      ...init,
      // headers: Network.getHeaders(init.headers, addAuth),
      headers: {
        "X-Api-Version": 3,
        Authorization: `Bearer 036ba804924a6d0df920429d74d449`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    let promise;
    if (
      response.status !== 200 &&
      response.status !== 201 &&
      response.status !== 404
    ) {
      promise = Promise.reject(response);

      console.log("errrorr =>", response);
    } else {
      promise = response.json();
    }
    return promise;
  }
}
