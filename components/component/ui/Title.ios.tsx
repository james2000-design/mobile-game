import { ReactNode } from "react";
import { Text, StyleSheet } from "react-native";
interface props {
  children: ReactNode;
}
function Title({ children }: props) {
  return <Text style={styles.title}> {children} </Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
