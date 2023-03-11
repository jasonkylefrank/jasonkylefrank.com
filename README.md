My personal website.

This repo is comprised of several projects, stitched together as a monorepo via Turborepo.

This monorepo structure allows me to have different dependencies for each project, and thus avoiding bloat for any particular project.

My need for a monorepo structure originally came when I wanted to build an experimental app which required a beta dependency that would only be applicable for that experiment. Instead of adding that dependency to my main website, I created a completely separate project in a separate repository.

While that kept the depencies separate, it also introduced a different problem. In order for my main website and that new experimental app to have a consistent look-and-feel, I had to copy-and-paste UI component files into that new repo. As such, I lost a single-source-of-truth for those components.

Restructuring this repo as a monorepo allowed me to combine the experimental app and my main website project into a single repo, will still have separate projects, each with their own `package.json`. As such, I can share things like UI components between projects within this monorepo, maintaining a single-source-of-truth for them.
