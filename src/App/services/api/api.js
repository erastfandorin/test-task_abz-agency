const abzTestApi = {
  URL: 'https://frontend-test-assignment-api.abz.agency',
  token: '',
  nextUsersLink: '',

  async getToken() {
    try {
      const response = await fetch(`${this.URL}/api/v1/token`);
      const parsedResponse = await response.json();
      this.token = parsedResponse.token;
      console.log(this.token);
    } catch (err) {
      console.log(err);
    }
  },
  async getPositions() {
    try {
      const response = await fetch(`${this.URL}/api/v1/positions`);
      const parsedResponse = await response.json();
      return parsedResponse;
    } catch (err) {
      console.log(err);
    }
    return null;
  },
  async getUsers() {
    try {
      let response;
      if (!this.nextUsersLink) {
        response = await fetch(`${this.URL}/api/v1/users?page=1&count=6`);
      } else {
        response = await fetch(`${this.nextUsersLink}`);
      }
      const parsedResponse = await response.json();

      this.nextUsersLink = parsedResponse.links.next_url;
      return parsedResponse.users;
    } catch (err) {
      console.log(err);
    }
    return null;
  },
};

export default abzTestApi;
