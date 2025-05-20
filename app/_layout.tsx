import { Stack } from "expo-router";
import { ExercicioProvider } from "../context/ExercicioContext";

export default function Layout() {
  return (
    <ExercicioProvider>
      <Stack />
    </ExercicioProvider>
  );
}
