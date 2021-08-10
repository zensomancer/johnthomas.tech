import { ButtonGroup, ButtonGroupProps, IconButton } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaPaperPlane } from 'react-icons/fa'




export const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props} mt="6">
     <IconButton  color="gray.100" as="a" href="mailto:jt@johnthomas.tech" target="_blank" rel="noopener noreferrer" aria-label="Email" icon={<FaPaperPlane fontSize="35px" />} />
     <IconButton  color="gray.100" as="a" href="https://twitter.com/zensomancer" target="_blank" rel="noopener noreferrer" aria-label="Twitter" icon={<FaTwitter fontSize="35px" />} />
    <IconButton color="gray.100" as="a" href="https://www.linkedin.com/in/johnthomastech" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" icon={<FaLinkedin fontSize="35px" />} />
    <IconButton  color="gray.100" as="a" href="https://github.com/zensomancer" target="_blank" rel="noopener noreferrer" aria-label="GitHub" icon={<FaGithub fontSize="35px" />} />
 
    <IconButton  color="gray.100" as="a" href="https://instagram.com/zensomancer" target="_blank" rel="noopener noreferrer" aria-label="Instagram" icon={<FaInstagram fontSize="35px" />} />
  </ButtonGroup>
)
