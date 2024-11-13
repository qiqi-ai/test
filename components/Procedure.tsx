import React, { useState } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import {
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

type StepTextType = string;
const Procedure = () => {
  const [stepText, setStepText] = useState<StepTextType>("2.甜甜圈真好吃");

  return (
    <View style={[styles.procedure, styles.procedureFlexBox]}>
      <Text style={styles.text}>{stepText}</Text>
      <Image
        style={[styles.imageIcon, styles.procedureFlexBox]}
        resizeMode="cover"
        source={require("../assets/image.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  procedureFlexBox: {
    flex: 1,
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontFamily: FontFamily.pingFangSCRegular,
    color: Color.colorDarkgray,
    textAlign: "left",
    alignSelf: "stretch",
  },
  imageIcon: {
    borderRadius: Border.br_base,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    width: "100%",
  },
  procedure: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhite,
    padding: Padding.p_base,
    gap: Gap.gap_lg,
  },
});

export default Procedure;
