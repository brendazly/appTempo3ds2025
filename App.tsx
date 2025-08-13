// In App.js in a new project

import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './views/Home';
import Itanhaem from './views/Itanhaem';
import Santos from './views/Santos'
import SaoVicente from './views/SaoVicente';
import  PraiaGrande from './views/PraiaGrande';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: Home,
    Itanhaem:Itanhaem,
    PraiaGrande:PraiaGrande,
    Santos:Santos,
    SaoVicente:SaoVicente
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}