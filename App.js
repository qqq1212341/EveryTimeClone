import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React from "react";
import Root from "./navigators/Root";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

const whiteBackgroundTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer theme={whiteBackgroundTheme}>
        <Root />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
