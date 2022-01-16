import { SafeAreaProvider } from 'react-native-safe-area-context';

import TabNavigation from './Nagivation';

export default function App() {
  return (
    <SafeAreaProvider>
      <TabNavigation />
    </SafeAreaProvider>
  );
}
