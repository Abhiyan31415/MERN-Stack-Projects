
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://cdn.openart.ai/stable_diffusion/717ecea695a33a84f1e49643ed351edf9b35f4dd_2000x2000.webp) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 35px;
    color: #FFFFFF;
    line-height: 1;
    font-family:New Century Schoolbook, TeX Gyre Schola, serif;
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    color: #FFFFFF;
    font-family:New Century Schoolbook, TeX Gyre Schola, serif;

`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>Innovative Receptor: A User-Driver Dev</Heading>
            <SubHeading>Ctrl-Alt-Delete</SubHeading>
        </Image>
    )
}

export default Banner;