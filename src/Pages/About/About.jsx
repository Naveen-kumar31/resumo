import { Avatar, Box, chakra, Flex, Icon, SimpleGrid, useColorModeValue, } from '@chakra-ui/react';


const testimonials = [
    {
        name: 'Naveen Kumar',
        role: 'Web Developer',
        content:
            'This resume builder is built for the project for Chennai Institute Of Technology.It is built with Mongodb,Express Js, React Js,Node Js. ',
        avatar:
            'data:image/png;base64,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',
    }
];


function TestimonialCard(props) {
    const { name, role, content, avatar } = props;
    return (
        <Flex
            boxShadow={'lg'}
            maxW={'640px'}
            direction={{ base: 'column-reverse', md: 'row' }}
            width={'full'}
            rounded={'xl'}
            p={10}
            justifyContent={'space-between'}
            position={'relative'}
            bg={useColorModeValue('white', 'gray.800')}
            _after={{
                content: '""',
                position: 'absolute',
                height: '37px',
                width: '41px',
                left: '35px',
                top: '-10px',
                backgroundSize: 'cover',
                backgroundImage: `url("data:image/png;base64,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")`,
            }}
            _before={{
                content: '""',
                position: 'absolute',
                zIndex: '-1',
                height: 'full',
                maxW: '640px',
                width: 'full',
                filter: 'blur(40px)',
                transform: 'scale(0.98)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                top: 0,
                left: 0,
            }}>
            <Flex
                direction={'column'}
                textAlign={'left'}
                justifyContent={'space-between'}>
                <chakra.p
                    color={useColorModeValue('gray.500', 'gray.50')}
                    fontFamily={'Inter'}
                    fontWeight={'medium'}
                    fontSize={'15px'}
                    pb={4}>
                    {content}
                </chakra.p>
                <chakra.p fontFamily={'Work Sans'} color={useColorModeValue('gray.700', 'gray.50')} fontWeight={'bold'} fontSize={14}>
                    {name}
                    <chakra.span
                        fontFamily={'Inter'}
                        fontWeight={'medium'}
                        color={'gray.500'}>
                        {' '}
                        - {role}
                    </chakra.span>
                </chakra.p>
            </Flex>
            <Avatar
                src={avatar}
                height={'80px'}
                width={'80px'}
                alignSelf={'center'}
                m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
            />
        </Flex>
    );
}

export default function About() {
    return (
        <Flex
            textAlign={'center'}
            pt={10}
            justifyContent={'center'}
            direction={'column'}
            width={'full'}>
            <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
                <chakra.h3
                    fontFamily={'Work Sans'}
                    fontWeight={'bold'}
                    fontSize={20}
                    textTransform={'uppercase'}
                    color={'#3a5174'}>
                    People love us
                </chakra.h3>
                <chakra.h1
                    py={5}
                    fontSize={48}
                    fontFamily={'Work Sans'}
                    fontWeight={'bold'}
                    color={useColorModeValue('gray.700', 'gray.50')}>
                    Resume Builder
                </chakra.h1>
                <chakra.h2
                    margin={'auto'}
                    width={'70%'}
                    fontFamily={'Inter'}
                    fontWeight={'medium'}
                    color={useColorModeValue('gray.500', 'gray.400')}>
                    Build the Resume That Gets You Hired!
                </chakra.h2>
            </Box>
            <SimpleGrid
                columns={{ base: 1, xl: 1 }}
                spacing={'20'}
                mt={16}
                mx={'auto'}>
                {testimonials.map((cardInfo, index) => (
                    <TestimonialCard {...cardInfo} key={index} index={index} />
                ))}
            </SimpleGrid>
            <Box>
                <Icon viewBox="0 0 40 35" mt={14} boxSize={10} color={'teal.400'}>
                    <path
                        fill={'#3a5174'}
                        d="M10.7964 5.04553e-07C8.66112 -0.000123335 6.57374 0.632971 4.79827 1.81922C3.0228 3.00547 1.63898 4.69158 0.82182 6.66433C0.00466116 8.63708 -0.209132 10.8079 0.207477 12.9021C0.624087 14.9964 1.65239 16.9201 3.16233 18.4299L19.1153 34.3828C19.2395 34.5074 19.3871 34.6062 19.5496 34.6736C19.7121 34.741 19.8863 34.7757 20.0622 34.7757C20.2381 34.7757 20.4123 34.741 20.5748 34.6736C20.7373 34.6062 20.8848 34.5074 21.0091 34.3828L36.962 18.4272C38.9319 16.3917 40.0228 13.6636 39.9996 10.8311C39.9764 7.99858 38.8409 5.28867 36.838 3.28573C34.835 1.28279 32.1251 0.147283 29.2926 0.124081C26.4601 0.100879 23.732 1.19184 21.6965 3.1617L20.0622 4.79337L18.4305 3.1617C17.4276 2.15892 16.237 1.36356 14.9267 0.821064C13.6163 0.278568 12.2119 -0.000433066 10.7937 5.04553e-07H10.7964Z"
                    />
                </Icon>
            </Box>
        </Flex>
    );
}