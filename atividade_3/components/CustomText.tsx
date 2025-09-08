import { Text, StyleSheet } from "react-native";

type Props = {
  text: string;
};

export default function CustomText({ text }: Props) {
    
    return <Text style={styles.hint}>{text}</Text>

};

const styles = StyleSheet.create({
  hint:{
    fontSize: 12, 
    color: "gray", 
    marginTop: 4, 
    width:"100%"
  }
});