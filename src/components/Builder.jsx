import { builder, BuilderComponent } from '@builder.io/react'

builder.init(`${process.env.REACT_APP_BUILDER_ENTRY}`)

export const BuilderPage = () => (
  <BuilderComponent
    model="page"
    entry="be52497acc3b49a898c387320b4909bb" />
)