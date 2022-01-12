import React, { FC } from 'react';
import { Box } from '@mui/system';
import { Card, Typography } from '@mui/material';
import { PostExampleModel } from '../../../repositories/models/PostExampleModel';
import { capitalizeWord } from '../../../common/utils/StringUtil';

export interface PostExampleCardProps {
  post: PostExampleModel;
}

const PostExampleCard: FC<PostExampleCardProps> = ({ post }: PostExampleCardProps) => {
  return (
    <Card>
      <Box p={2}>
        <Typography variant="h5" paddingBottom={2}>
          {capitalizeWord(post.title)}
        </Typography>
        <Typography variant="body1">{capitalizeWord(post.body)}</Typography>
      </Box>
    </Card>
  );
};
export default PostExampleCard;
