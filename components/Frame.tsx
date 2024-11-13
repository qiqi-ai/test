import * as React from "react";
import { StyleSheet, View } from "react-native";
import InformationStepCard from "./InformationStepCard";

const Frame = () => {
  return (
    <View style={styles.informationstepCardParent}>
      <InformationStepCard />
    </View>
  );
};

const styles = StyleSheet.create({
  informationstepCardParent: {
    width: 343,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Frame;
