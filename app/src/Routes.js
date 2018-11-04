import React from 'react'
import {LoginScreen} from './screens'
import { Router, Scene, Stack } from "react-native-router-flux"

class Routes extends React.Component {

    render = () =>
        <Router>
            <Stack key="root" hideNavBar>
              <Scene key="login" component={LoginScreen} initial/>
            </Stack>
        </Router>
  }

export default Routes