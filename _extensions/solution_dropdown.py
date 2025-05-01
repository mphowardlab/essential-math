from sphinx_design.dropdown import DropdownDirective


class SolutionDropdown(DropdownDirective):
    """Solution admonition."""

    def run(self):
        if len(self.arguments) == 0:
            self.arguments.append("Solution")
        return super().run()


def setup(app):
    app.add_directive("solution", SolutionDropdown)
