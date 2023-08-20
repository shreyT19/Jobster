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
import { COLOR, COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

const Popularjobs = () => {

  const isLoading = false;
  // const isLoading = true;
  const error = false;

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
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
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
