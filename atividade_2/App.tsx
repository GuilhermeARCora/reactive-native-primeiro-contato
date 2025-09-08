import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={[styles.box, { backgroundColor: "red" }]}>
      <Ionicons name="person" size={32} color="#fff" />
      <Text style={styles.text}>Person!</Text>
      </View>

      <View style={[styles.box, { backgroundColor: "orange" }]}>
        <Ionicons name="map" size={32} color="#fff" />
        <Text style={styles.text}>map</Text>
      </View>

      <View style={[styles.box, { backgroundColor: "green" }]}>
        <Ionicons name="heart" size={32} color="#fff" />
        <Text style={styles.text}>heart</Text>
      </View>

      <View style={[styles.box, { backgroundColor: "gold" }]}>
        <Ionicons name="globe" size={32} color="#fff" />
        <Text style={styles.text}>globe</Text>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,               
    flexDirection: "row",    
    flexWrap: "wrap",        
  },
  box: {
    width: "50%",            
    height: "50%",           
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 6,
    fontSize: 16,
    color: "#fff",
  },
});
