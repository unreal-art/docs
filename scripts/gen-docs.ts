import { generateFiles } from "fumadocs-openapi"
void generateFiles({
  // the OpenAPI schema, you can also give it an external URL.
  input: [
    // "https://openai.unreal.art/openapi.json"
    "./openai.spec.json",
  ],
  output: "./docs/openai",
  // we recommend to enable it
  // make sure your endpoint description doesn't break MDX syntax.
  includeDescription: true,
  groupBy: "route",
})
