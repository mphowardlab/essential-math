/**
 * Directions for interactive mages.
 */
const interactiveDirectivesAdmonition = {
    name: "interactive-directions",
    doc: "Standard directions for enabling interactive pages.",
    run(data, vfile, ctx) {
        const title = "Interactive";
        const body = `
This page contains interactive elements. To enable them, click the "power"
button then the "play" button to run all cells.
        `
        const admonition = {
            "type": "admonition",
            "kind": "important",
            "children": [
                {
                    "type": "admonitionTitle",
                    "children": ctx.parseMyst(title.trim())["children"][0]["children"]
                },
                ...ctx.parseMyst(body.trim())["children"]
            ]
        };
        return [admonition];
    }
};
const plugin = {
    name: "Directions for interactive page.",
    directives: [interactiveDirectivesAdmonition],
};

export default plugin;
