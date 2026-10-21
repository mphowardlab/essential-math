/**
 * Something to try.
 */
const tryThisAdmonition = {
    name: "trythis",
    doc: "Something to try.",
    body: { type: String, doc: "Body of the example." },
    options: {
        class: { type: String, doc: "CSS class." },
    },
    run(data, vfile, ctx) {
        const title = "Try this!";
        const body = data.body || "";
        const admonition = {
            "type": "admonition",
            "kind": "tip",
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
    name: "Admonition for something to try.",
    directives: [tryThisAdmonition],
};

export default plugin;
