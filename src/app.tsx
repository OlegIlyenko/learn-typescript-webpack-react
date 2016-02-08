import * as React from "react"
import { render } from "react-dom"

import { greet } from './greeter'
import { App } from './comp/main.tsx'

const css = require('./css/main.scss')

render(<App />, document.getElementById('app1'))
