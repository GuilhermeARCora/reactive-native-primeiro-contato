import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomText from "../components/CustomText";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    const mockEmail = "test@example.com";
    const mockPassword = "123456";

    if (email === mockEmail && password === mockPassword) {
      navigation.navigate("Home" as never); // redireciona para Home
    } else {
      Alert.alert(
        "Login inválido",
        "Use test@example.com / 123456",
        [{ text: "OK" }]
      );
    };
    
  };  

  return (
    <View style={styles.container}>
        
        <View>

            <Text style={styles.label}>E-mail</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your e-mail"
                    value={email}
                    onChangeText={setEmail}
                />
            <CustomText text="Please enter a valid email. e.g: user@example.com" />

            <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            <CustomText
                text={
                    "Please enter a valid password\n- Minimum 8 characters, one uppercase, one number, one special character"
                }
            />
   
            <CustomButton
                text="Login with E-mail"
                color="black"
                icon="mail"
                onPress={handleLogin}
            />

            <CustomButton 
                text="Login with Facebook"
                color="#1877F2"
                icon="logo-facebook"
                onPress={() => console.log("Facebook pressed")}
            />

            <CustomButton 
                text="Login with Google"
                color="#DB4437"
                icon="logo-google"
                onPress={() => console.log("Google pressed")}
            />  

        </View>

        <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 12 }}>
                Don’t have an account?{" "}
                <Text 
                style={{ color: "blue", textDecorationLine: "underline" }}
                onPress={() => console.log("Navigate to Sign up")}
                >
                Sign up
                </Text>
            </Text>
        </View>

    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
    marginTop:20
  },
  label: {
    marginTop: 10,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  }
});