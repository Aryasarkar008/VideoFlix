import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxW={'container.xl'} p={'16'} h={'100vh'}>
        <form>
            <VStack 
            alignItems={'stretch'} 
            spacing={'8'}
            w={['full', '96']}
            m={'auto'}
            my={'16'}
            >
                <Heading>VIDEOFLIX</Heading>
                <Avatar alignSelf={'center'} boxSize={'32'}/>
                <Input 
                    required
                    placeholder={'Name'}
                    type={'text'}
                    focusBorderColor={'purple.500'}
                />
                <Input 
                    required
                    placeholder={'Email'}
                    type={'email'}
                    focusBorderColor={'purple.500'}
                />
                <Input 
                    required
                    placeholder={'Password'}
                    type={'password'}
                    focusBorderColor={'purple.500'}
                />
                <Button colorScheme='purple' type='submit'>Sign Up</Button>

                <Text textAlign={'right'}>
                    Already Signed Up?{' '}
                    <Button variant={'link'} colorScheme='purple'>
                        <Link to={'/login'}>Login</Link>
                    </Button>
                </Text>
            </VStack>
        </form>
    </Container>
  )
}

export default Signup