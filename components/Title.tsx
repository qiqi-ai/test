import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Title = () => {
  return <Text style={styles.title}>步骤一：制作可颂蛋糕</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.size_base,
    lineHeight: 16,
    fontWeight: "600",
    fontFamily: FontFamily.pingFangSCRegular,
    color: Color.colorDarkslategray,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 311,
  },
});

export default Title;
