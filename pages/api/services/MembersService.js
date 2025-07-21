export async function getMembers() {
  const response = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      Authorization: "Bearer 036ba804924a6d0df920429d74d449",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: `
        {
          allMembers(first: 200) {
            id
            image {
              url
            }
          }
        }
      `,
    }),
  });

  const json = await response.json();
  return json.data.allMembers;
}
