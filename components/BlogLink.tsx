import { LinkBox, LinkOverlay, Heading, Text } from "@chakra-ui/layout"

export const BlogLink = () => (
    <LinkBox as="article" bg="purple.900" p="5" rounded="md">
    <Heading size="md" my="2">
      <LinkOverlay>
       Coming Soon: Relaunching my personal site and blog with Next.js, MDX, Chakra UI, and Vercel
      </LinkOverlay>
    </Heading>
    <Text>
     Stay tuned for a post on how I learned a modern tech stack and built my new site. GitHub respoitory will be included.
      
    </Text>
  </LinkBox>
)