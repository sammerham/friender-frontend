import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class frienderApi {

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a user by id. */

  static async getUser(id) {
    const res = await this.request(`users/${id}`);
    return res.user;
  }

  // obviously, you'll add a lot here ...

  // /** Get all companies or companies that match query */ // TODO: update name to searchTerm
  // static async getCompanies(name) {
  //   const res = await this.request(`companies`, { name });
  //   return res.companies;
  // }

  // /** Get all Jobs or jobs that match query */
  // static async getJobs(title) {
  //   const res = await this.request(`jobs`, { title });
  //   return res.jobs;
  // }

  /** Authenticate with username and password and return user */
  static async login(loginData) {
    const res = await this.request('login', loginData, 'post');
    return res.user;
  }

  /** Register user and return user */
  static async signupUser(signupData) {
    const res = await this.request('signup', signupData, 'post');
    return res.user;
  }



  /** update a user's information */
  static async updateUser({id, username, firstname, lastname, zipcode, radius, hobbies, interests, image_url }) {
    const res = await this.request(`users/${id}`,
      {
        username,
        firstname,
        lastname,
        zipcode,
        radius,
        hobbies,
        interests,
        image_url
      }, 'patch'
    );
    return res.user;
  }


    /** send image to aws */

  static async sendImageToAWS(file){
    const res = await axios.post (`${BASE_URL}/aws`,
      {
        type: 'image',
        file: file
    })
    return res.data
  }
}

export default frienderApi