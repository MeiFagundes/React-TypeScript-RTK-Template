import React, { FC } from 'react';
import { Box } from '@mui/system';
import { Card, Typography } from '@mui/material';
import { PostExemploModel } from '../../../models/PostExemploModel';
import { obterPalavraInicialMaiuscula } from '../../../common/utils/StringUtil';

export interface PostExemploCardProps {
  post: PostExemploModel;
}

const PostExemploCard: FC<PostExemploCardProps> = ({ post }: PostExemploCardProps) => {
  return (
    <Card>
      <Box p={2}>
        <Typography variant="h5" paddingBottom={2}>
          {obterPalavraInicialMaiuscula(post.title)}
        </Typography>
        <Typography variant="body1">{obterPalavraInicialMaiuscula(post.body)}</Typography>
      </Box>
    </Card>
  );
};
export default PostExemploCard;
