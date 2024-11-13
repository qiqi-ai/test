import * as React from "react";
import { StyleSheet, View } from "react-native";
import Title from "./Title";
import FoodIngredient from "./FoodIngredient";
import Procedure from "./Procedure";
import { Gap, Border, Color, Padding } from "../GlobalStyles";

const InformationStepCard = () => {
  return (
    <View style={styles.informationstepCard}>
      <Title />
      <View style={styles.stepInformation}>
        <FoodIngredient />
        <Procedure />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stepInformation: {
    alignSelf: "stretch",
    flex: 1,
    gap: Gap.gap_md,
  },
  informationstepCard: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorGray,
    height: 459,
    padding: Padding.p_base,
    gap: Gap.gap_lg,
  },
});

export default InformationStepCard;
