import React from "react";
import { Share, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";

export default function ResultImc(props) {
  
  const onShare = async () => {
    const result = await Share.share({
      message: "Meu imc hoje é: " + props.resultImc,
    });
  }
  
  return(
    <View style={styles.resultImc}>
      <View style={styles.boxShareButton}>
        {props.resultImc != null ?
          <TouchableOpacity onPress={onShare} style={styles.shared}>
            <Text style={styles.sharedText}>Share</Text>
          </TouchableOpacity>
          :
          <Text style={styles.sharedText}>Share</Text>
        }
        </View>
      <Text style={styles.information}>{props.messageResultImc}</Text>
      <Text style={styles.number}>{props.resultImc}</Text>
    </View>
  );
}