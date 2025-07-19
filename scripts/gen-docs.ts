import { generateFiles } from "fumadocs-openapi"

import { rimraf } from "rimraf"

const p = "content/openai"

// rimraf.sync(p) //FIXME: can't do it cuz of custom content

void generateFiles({
  // the OpenAPI schema, you can also give it an external URL.
  input: [
    // "https://openai.unreal.art/openapi.json"
    "./openai.spec.json",
  ],
  output: p,
  // we recommend to enable it
  // make sure your endpoint description doesn't break MDX syntax.
  includeDescription: true,
  // FIXME: https://github.com/fuma-nama/fumadocs/issues/2085
  // groupBy: "route",
  per: "operation",
})
