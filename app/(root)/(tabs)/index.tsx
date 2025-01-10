import { Link } from "expo-router";
import { View, Text } from "react-native";
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 20,
        backgroundColor: "#f8f9fa",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          paddingVertical: 10,
          backgroundColor: "#ffffff",
          borderTopWidth: 1,
          borderTopColor: "#ddd",
        }}
      >
        <Link href="/Home"
        style={{
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
        >
        <View style={{alignItems: "center"}}>
        <MaterialIcons name="home" size={24} color="#007BFF" />
          <Text  style={{ fontSize: 12, color: "#007BFF" }}>Home</Text>
          </View>
        </Link>
        <Link
          href="/Sign-in"
          style={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <MaterialIcons name="login" size={24} color="#007BFF" />
            <Text style={{ fontSize: 12, color: "#007BFF" }}>Sign In</Text>
          </View>
        </Link>

        <Link
          href="/explore"
          style={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <FontAwesome name="search" size={24} color="#007BFF" />
            <Text style={{ fontSize: 12, color: "#007BFF" }}>Explore</Text>
          </View>
        </Link>

        <Link
          href="/profile"
          style={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Ionicons name="person-circle-outline" size={24} color="#007BFF" />
            <Text style={{ fontSize: 12, color: "#007BFF" }}>Profile</Text>
          </View>
        </Link>

        <Link
          href="/Bubbles"
          style={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Ionicons name="chatbubbles-outline" size={24} color="#007BFF" />
            <Text style={{ fontSize: 12, color: "#007BFF" }}>Bubbles</Text>
          </View>
        </Link>
      </View>
    </View>
  );
}
