import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'navnavbar': {
    'backgroundColor': 'white',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 70 }],
    'position': 'fixed'
  },
  'navbar-default': {
    'backgroundColor': 'white',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 70 }],
    'position': 'fixed'
  },
  'navbar-default': {
    'backgroundImage': 'none',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderRadius': '0'
  },
  'navbar-default navbar-nav>li>a': {
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontFamily': '"Poppins", sans-serif',
    'fontWeight': '300',
    'color': 'black'
  }
});
