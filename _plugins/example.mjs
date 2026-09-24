/**
 * A worked example problem.
 */
const exampleAdmonition = {
    name: "example",
    doc: "A worked example problem.",
    arg: { type: String, doc: "Title of the example (default: Example)." },
    body: { type: String, doc: "Body of the example." },
    run(data, vfile, ctx) {
        const title = (data.arg) ? `Example: ${data.arg}` : "Example"
        const body = data.body || "";
        const admonition = {
            "type": "admonition",
            "kind": "important",
            "icon": false,
            "children": [
                {
                    "type": "admonitionTitle",
                    "children": ctx.parseMyst(title.trim())["children"][0]["children"]
                }
            ]
        };
        admonition["children"].push(...ctx.parseMyst(body.trim())["children"]);
        return [admonition];
    }
};
const plugin = {
    name: "Example admonition",
    directives: [exampleAdmonition],
};

export default plugin;
