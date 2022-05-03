import { toast } from 'react-toastify';

const abzTestApi = {
  URL: 'https://frontend-test-assignment-api.abz.agency',
  nextUsersLink: '',

  async getToken() {
    try {
      const response = await fetch(`${this.URL}/api/v1/token`);
      const parsedResponse = await response.json();

      // get error
      if (!parsedResponse.success) {
        toast.warn(`${parsedResponse.message}`);
        return null;
      }

      return parsedResponse.token;
    } catch (err) {
      toast.error(err);
    }
    return null;
  },
  async getPositions() {
    try {
      const response = await fetch(`${this.URL}/api/v1/positions`);
      const parsedResponse = await response.json();

      // get error
      if (!parsedResponse.success) {
        toast.warn(`${parsedResponse.message}`);
        return null;
      }
      return parsedResponse;
    } catch (err) {
      toast.error(err);
    }
    return null;
  },
  async resetUsersLink() {
    this.nextUsersLink = '';
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

      // get error
      if (!parsedResponse.success) {
        toast.warn(`${parsedResponse.message}`);
        return null;
      }

      this.nextUsersLink = parsedResponse.links.next_url;
      const result = {
        users: parsedResponse.users,
        lastPage: false,
      };
      if (this.nextUsersLink === null) {
        result.lastPage = true;
      }

      return result;
    } catch (err) {
      toast.error(err);
    }
    return null;
  },
  async postUser(data) {
    let numberForForm = data.phone.replace(/[^0-9+]/g, '');
    const numberDigitsPhone = 12;
    if (numberForForm.length < numberDigitsPhone) {
      numberForForm = `+38${numberForForm}`;
    }

    const formData = new FormData();
    formData.append('position_id', data.position);
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', numberForForm);
    formData.append('photo', data.photo);

    const token = await this.getToken();
    const response = await fetch(`${this.URL}/api/v1/users`, {
      method: 'POST',
      body: formData,
      headers: { Token: token },
    });
    const parsedResponse = await response.json();

    if (!parsedResponse.success) {
      toast.warn(`${parsedResponse.message}`);
    }

    return parsedResponse.success
  },
};

export default abzTestApi;
