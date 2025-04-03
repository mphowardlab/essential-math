from docutils.parsers.rst.directives.admonitions import Admonition


class Example(Admonition):
    """Example admonition."""
    def run(self):
        self.arguments[0] = f"Example: {self.arguments[0]}"
        return super().run()


def setup(app):
    app.add_directive("example", Example)
