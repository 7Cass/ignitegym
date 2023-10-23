import { HStack, Heading, Image, Text, VStack, Icon } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {

};

export function ExerciseCard({...rest}: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack bg={"gray.500"} alignItems={"center"} p={2} pr={4} rounded={"md"} mb={3}>
        <Image 
          source={{uri: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=60&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGV4ZXJjaXNlfGVufDB8fDB8fHwy'}} 
          alt="Imagem do exercício"
          w={16}
          h={16}
          rounded={"md"}
          mr={4}
          resizeMode="cover"
        />

        <VStack flex={1}>
          <Heading color={"white"} fontSize={"lg"} fontFamily={"heading"}>Remada Unilateral</Heading>
          <Text color={"gray.200"} fontSize={"sm"} mt={1} numberOfLines={2}>3 séries x 12 repetições</Text>
        </VStack>

        <Icon as={Entypo} name="chevron-thin-right" color={"gray.300"}/>
      </HStack>
    </TouchableOpacity>
  );
}