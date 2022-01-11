import { PostExampleModel } from '../models/PostExampleModel';
import axios from '../common/utils/AxiosInstance';

class PostsExampleRepository {
  getExamplePosts = async () => {
    return axios.get<PostExampleModel[]>(`https://jsonplaceholder.typicode.com/posts/`);
  };
}

export default new PostsExampleRepository();
