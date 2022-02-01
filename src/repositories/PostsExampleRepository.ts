import { api } from '../common/utils/RestApiService';
import { PostExampleModel } from './models/PostExampleModel';

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<PostExampleModel[], void>({
      query: () => `posts/`,
    }),
  }),
});

export { injectedRtkApi as api };
