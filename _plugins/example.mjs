/**
 * A worked example problem.
 */
const exampleAdmonition = {
    name: "example",
    doc: "A worked example.",
    arg: { type: String, doc: "Additional title of example." },
    body: { type: String, doc: "Body of the example." },
    options: {
        class: { type: String, doc: "CSS class." },
    },
    run(data, vfile, ctx) {
        const title = (data.arg) ? `Example: ${data.arg}` : "Example";
        const body = data.body || "";
        const admonition = {
            "type": "admonition",
            "kind": "important",
            "icon": false,
            "children": [
                {
                    "type": "admonitionTitle",
                    "children": ctx.parseMyst(title.trim())["children"][0]["children"]
                },
                ...ctx.parseMyst(body.trim())["children"]
            ]
        };
        if (data.options?.class) {
            admonition["class"] = data.options?.class;
        }
        return [admonition];
    }
};
const plugin = {
    name: "Admonition for a worked example",
    directives: [exampleAdmonition],
};

export default plugin;
