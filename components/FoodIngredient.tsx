import React, { useState } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import {
  FontFamily,
  FontSize,
  Border,
  Color,
  Padding,
  Gap,
} from "../GlobalStyles";

type RecipeNameType = string;
type GramNumberType = string;
type AppleType = string;
const FoodIngredient = () => {
  const [recipeName, setRecipeName] = useState<RecipeNameType>("香蕉");
  const [gramNumber, setGramNumber] = useState<GramNumberType>("10g");
  const [apple, setApple] = useState<AppleType>("苹果");

  return (
    <View style={styles.foodIngredient}>
      <View style={styles.foodIngredient1}>
        <View style={styles.foodIngredient2}>
          <View style={styles.image}>
            <Image
              style={styles.avocadoHalf1}
              resizeMode="cover"
              source={require("../assets/avocado-half-1.png")}
            />
          </View>
          <View style={styles.text}>
            <Text style={[styles.title, styles.gTypo]}>{recipeName}</Text>
            <Text style={[styles.g, styles.gTypo]}>160g</Text>
          </View>
        </View>
        <View style={styles.foodIngredient2}>
          <View style={styles.image}>
            <Image
              style={styles.avocadoHalf1}
              resizeMode="cover"
              source={require("../assets/avocado-half-1.png")}
            />
          </View>
          <View style={styles.text}>
            <Text style={[styles.title, styles.gTypo]}>牛油果</Text>
            <Text style={[styles.g, styles.gTypo]}>{gramNumber}</Text>
          </View>
        </View>
        <View style={styles.foodIngredient2}>
          <View style={styles.image}>
            <Image
              style={styles.avocadoHalf1}
              resizeMode="cover"
              source={require("../assets/avocado-half-1.png")}
            />
          </View>
          <View style={styles.text}>
            <Text style={[styles.title, styles.gTypo]}>{apple}</Text>
            <Text style={[styles.g, styles.gTypo]}>160g</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gTypo: {
    textAlign: "center",
    fontFamily: FontFamily.pingFangSCRegular,
    lineHeight: 12,
    fontSize: FontSize.size_xs,
    alignSelf: "stretch",
  },
  avocadoHalf1: {
    width: 34,
    height: 33,
  },
  image: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhitesmoke,
    height: 42,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_9xs,
    alignSelf: "stretch",
  },
  title: {
    color: Color.colorDarkgray,
  },
  g: {
    fontWeight: "500",
    color: Color.colorDimgray,
  },
  text: {
    gap: Gap.gap_xs,
    alignSelf: "stretch",
  },
  foodIngredient2: {
    width: 42,
    gap: Gap.gap_sm,
  },
  foodIngredient1: {
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.gap_xl,
    alignSelf: "stretch",
  },
  foodIngredient: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhite,
    height: 112,
    padding: Padding.p_base,
    alignSelf: "stretch",
  },
});

export default FoodIngredient;
