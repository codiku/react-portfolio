import axios from "axios";

export class ProjectsAPI {
  static async fetchAll() {
    return (
      await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/api/dev-projects?populate=*`
      )
    ).data.data;
  }
}
