import 'react-native-gesture-handler';

import Routes from './src/navigation';

import AppProvider from './src/hooks';

export default function App() {
  return (
    <AppProvider>
      <Routes/>
    </AppProvider>
  );
}
