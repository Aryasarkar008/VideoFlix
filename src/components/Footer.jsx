import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box 
    bgColor={'blackAlpha.900'} 
    minH={'40'} 
    p={'16'} 
    color={'white'}
    >
        <Stack direction={['column','row']}>
            <VStack w={'full'} px={'4'} alignItems={'stretch'}>
                <Heading 
                textTransform={'uppercase'} 
                size={'md'}
                textAlign={['center','left']}
                >Subscribe to get updates
                </Heading>
                <HStack borderBottom={'2px solid white'}>
                    <Input 
                    placeholder='Enter Email Here...'
                    border={'none'}
                    borderRadius={'none'}
                    outline={'none'}
                    focusBorderColor='none'
                    />
                    <Button
                    p={'0'}
                    colorScheme='purple'
                    borderRadius={'0 20px 20px 0'}
                    variant={'ghost'}
                    >
                        <AiOutlineSend size={20}/>
                    </Button>
                </HStack>
            </VStack>
            <VStack 
            w={'full'}
            borderLeft={['none','1px solid white']}
            borderRight={['none','1px solid white']}
            >
                <Heading textAlign={'center'} textTransform={'uppercase'}>
                    VIDEOFLIX
                </Heading>
                <Text>All Rights Received</Text>
            </VStack>
            <VStack 
            w={'full'}
            >
                <Heading textTransform={'uppercase'} size={'md'}>
                    Social Media
                </Heading>
                <Button variant={'link'} colorScheme={'white'}>
                   <a href="https://www.linkedin.com/in/arya-sarkar-933a5b182/" target='_blank'>LinkedIn</a> 
                </Button>
                <Button variant={'link'} colorScheme={'white'}>
                   <a href="https://github.com/Aryasarkar008" target='_blank'>Github</a> 
                </Button>
                <Button variant={'link'} colorScheme={'white'}>
                   <a href="https://www.instagram.com/arya_luke_008/" target='_blank'>Instagram</a> 
                </Button>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer