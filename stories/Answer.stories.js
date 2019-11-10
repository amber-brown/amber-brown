import React from "react"
import { action } from "@storybook/addon-actions"
import Answer from "../src/components/UIComponents/Answer"
import { storiesOf } from "@storybook/react"
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs"

const stories = storiesOf("Answer", module)

const label = "Correct?"

stories.add("default", () => <Answer answer={boolean(label, "")} />)
