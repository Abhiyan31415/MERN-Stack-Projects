
import { styled, Box, Typography } from '@mui/material';

const Container = styled(Box)`
    background-color:#7BD3EA;
    border: 1px solid #d3cede;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 350px;
    & > img, & > p {
        padding: 0 5px 5px 5px;
    }
`;

const Image = styled('img')({
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
    height: 150
});

const Text = styled(Typography)`
    color: #4E9F3D;
    font-size: 16px;
    font-family:cursive;
`;

const Heading = styled(Typography)`
    font-size: 22px;
    font-weight: 600;
    color:#D8E9A8;
    font-family:cursive;

`;

const Details = styled(Typography)`
    font-size: 14px;
    word-break: break-word;
    color:#1E5128;
    font-family:cursive;
    margin:5px;

    
`;

const Post = ({ post }) => {
    const url = post.picture ? post.picture : 'https://img.freepik.com/premium-vector/set-programmer-related-object-doodle-web-programming-cartoon_6997-4036.jpg';
    
    const addEllipsis = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + '...' : str;
    } 

    return (
        <Container>
            <Image src={url} alt="post" />
            <Text>{post.categories}</Text>
            <Heading>{addEllipsis(post.title, 20)}</Heading>
            <Text>Author: {post.username}</Text>
            <Details>{addEllipsis(post.description, 100)}</Details>
        </Container>
    )
}

export default Post;