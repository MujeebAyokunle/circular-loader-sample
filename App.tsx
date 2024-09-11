/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CustomCircularLoader from './CustomCircularLoader';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>

        <CircularLoader />
        <CustomCircularLoader percentage={100} />
      </ScrollView>
    </SafeAreaView>
  );
}

const CircularLoader = () => {
  const fill = 80; // The percentage you want to display

  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={200}
        width={10}
        fill={fill}
        tintColor="#FF6347" // Customize the color here
        backgroundColor="#E0E0E0"
        arcSweepAngle={240} // Customize the angle
        rotation={-120}
        lineCap="round"
      >
        {() => (
          <View style={styles.innerContent}>
            <Text style={styles.percentage}>{fill}%</Text>
            <Text style={styles.status}>Normal</Text>
          </View>
        )}
      </AnimatedCircularProgress>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  percentage: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 20,
  },
});

export default App;
