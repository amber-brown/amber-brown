import React from "react"
import { action } from "@storybook/addon-actions"
import Quiz from "../src/components/UIComponents/Quiz"

import { storiesOf } from "@storybook/react"
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs"

const stories = storiesOf("Quiz", module)

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs)

// Knobs for React props
stories.add("default", () => <Quiz />)
