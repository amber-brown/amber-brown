import React from "react"
import { action } from "@storybook/addon-actions"
import ProgressBar from "../src/components/UIComponents/ProgressBar"
import { storiesOf } from "@storybook/react"
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs"

const stories = storiesOf("Progress Bar", module)

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs)
const numberOptions = {
  range: true,
  min: 0,
  max: 100,
  step: 1,
}
// Knobs for React props
stories.add("default", () => (
  <ProgressBar progress={number("Progress", 50, numberOptions)} />
))
