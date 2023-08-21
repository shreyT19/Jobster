import React from "react";

import styles from "./popularjobs.style";

import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import { useRouter } from "expo-router";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

import useFetch from "../../../hook/useFetch";

const Popularjobs = () => {

  const{data,isLoading,error,reFetch} = useFetch('search',{
    query:'React Developer',
    num_pages:1
  })



  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
          {isLoading ? <ActivityIndicator size="large" colors={COLORS.primary} /> : error ? <Text>Something went wrong</Text> : <FlatList
            data={data}
            renderItem={({ item }) => {
              return <PopularJobCard item={item} />
            }
            }
            keyExtractor={(item) => item?.job_id}
            horizontal
            contentContainerStyle={{columnGap: SIZES.medium}}
          />}
      </View>
    </View>
  );
};

export default Popularjobs;
