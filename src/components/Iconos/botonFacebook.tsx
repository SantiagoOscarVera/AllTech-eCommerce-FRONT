import { Avatar, Box, Flex, keyframes } from '@chakra-ui/react';

export default function BotonFace() {
  const size = '96px';
  const color = 'teal';

  const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

  return (
    <Flex
      justifyContent="center"
      /* alignItems="center" */
      /* h="216px" */
      /* w="full" */
      overflow="hidden">
      {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
      <Box
        as="div"
        position="relative"
        w={10}
        h={10}
        _before={{
          content: "''",
          position: 'relative',
          display: 'block',
         /*  width: '200%',
          height: '200%', */
          boxSizing: 'border-box',
          /* marginLeft: '-100%', */
          /* marginTop: '-100%', */
          borderRadius: '50%',
          bgColor: color,
          animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
        }}>
        <Avatar
          src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_de_Facebook.png"
          size="full"
          position="absolute"
          top={0}
          onClick={() => window.open('https://www.facebook.com/groups/535401966884796?locale=es_LA', "_blank")}
        />
      </Box>
    </Flex>
  );
} 