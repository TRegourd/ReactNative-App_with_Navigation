import AuthProvider from "./AuthProvider";
import HomePage from "./HomePage";

export default function App() {
  return (
    <AuthProvider>
      <HomePage></HomePage>
    </AuthProvider>
  );
}
