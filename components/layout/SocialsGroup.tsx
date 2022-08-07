import { chakra, HStack, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { darkGradient, lightGradient } from "../../constants";

interface ISocialsGroup{
  href: string;
  label: string;
  icon: JSX.Element;
}

const Socials: Array<ISocialsGroup> = [
  { href: 'https://www.instagram.com/i.vus_/', icon: <FaInstagram size={32} />, label:'Instagram'},
  { href: 'https://github.com/ivusc', icon: <FaGithub size={32} />, label:'Github' },
  { href: 'mailto:ivuschua@gmail.com', icon: <MdMail size={32} />, label:'Mail' },
  { href: 'https://www.linkedin.com/in/ivus-chua-b1755023a/', icon: <FaLinkedin size={32} />, label:'Linked In' }
]

export const SocialsGroup: React.FC = () => {
  return(
    <HStack mt={{base:2, md:0}} spacing={'-1'}>
      {Socials.map((socialItem,i) => (
        <IconButton
          p={0}
          m={0}
          as={chakra.a}
          variant="ghost"
          size="lg"
          _hover={{bg: useColorModeValue(lightGradient,darkGradient)}}
          href={socialItem.href}
          target={'_blank'}
          rel={"noopener noreferrer"}
          aria-label={socialItem.label}
          icon={socialItem.icon}
          key={i}
      />
      ))}
    </HStack>
  )
}