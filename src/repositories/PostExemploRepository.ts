import { PostExemploModel } from '../models/PostExemploModel';
import axios from '../common/utils/AxiosInstance';

class PostsExemploRepository {
  getPostsExemplo = async () => {
    return axios.get<PostExemploModel[]>(`https://jsonplaceholder.typicode.com/posts/`);
  };
}

export default new PostsExemploRepository();
