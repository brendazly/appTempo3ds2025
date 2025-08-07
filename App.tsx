// In App.js in a new project

import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './views/Home';
import Itanhaem from './views/Itanhaem';
import Santos from './views/Santos'
import SãoVicente from './views/SãoVicente';
import  PraiaGrande from './views/PraiaGrande';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: Home,
    Itanhaem:Itanhaem,
    Santos:Santos,
    SãoVicente:SãoVicente,
    PraiaGrande:PraiaGrande
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}