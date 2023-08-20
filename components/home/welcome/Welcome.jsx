import React,{useState} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from "react-native";

import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const jobTypes = ['Full Time', 'Part Time', 'Contractor']

const Welcome = () => {
  const router = useRouter();

  const [activeJobType, setActiveJobType] = useState('Full Time');
  
  
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Shreyansh</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            placeholder="What are you looking for?"
            value=""
            onChangeText={() => {}}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
            onPress={() => {}}
          />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList 
          data={jobTypes}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.tab(activeJobType,item)}
                onPress={()=>{
                    setActiveJobType(item)
                    router.push(`/search/${item}`)
                  }
                }
                  
                  >
                <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
              </TouchableOpacity>
            )
          }
          }
          keyExtractor={(item) => item}
          horizontal
          contentContainerStyle={{columnGap: SIZES.small}}
        />
      </View>
    </View>
  );
};

export default Welcome;
