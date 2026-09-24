/**
 * Directions for something to try.
 */
const tryThisAdmonition = {
    name: "trythis",
    doc: "Directions for something to try.",
    arg: { type: String, doc: "Title of the example (default: Example)." },
    body: { type: String, doc: "Body of the example." },
    run(data, vfile, ctx) {
        const title = "Try this!"
        const body = data.body || "";
        const admonition = {
            "type": "admonition",
            "kind": "tip",
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
    name: "Admonition for something to try.",
    directives: [tryThisAdmonition],
};

export default plugin;
