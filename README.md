# About

This repository contains the code for my **personal website** and **applications** that I want to feature on that website or have a shared look-and-feel as my main website.

Some of the applications may be deployed to subdomains of the main site (which makes it apparent that they are associated with the main site). But from a deployment standpoint, each application within this repository is a completely separate entity that can be deployed independently. Each _application_ is actually a _project_– more about that below where I describe the **monorepo structure**.

<br />
<br />

# Why I built this repository

I built this repository from scratch to build a website that shows a bit about me professionally.

But I also built it so that I could use and learn technologies and architectures of my choosing. This autonomy expands my learning beyond what I learn in my “day job” projects.

To that point, an example of an early choice that I made for this website was to use Next.js’s new `app` directory paradigm, even though it was (at that time and at the time of this writing) in early Beta and not recommended for production websites. I made that decision because I believed that that new paradigm had substantial benefits and would become ubiquitous in the future.

<br />
<br />

# How I built this repository

I started from essentially “ground zero” by initializing a brand-new Next.js project. I removed all the initial styling and scaffolding and began to build each aspect, brick-by-brick, from that ground-zero starting-point.

In this way, I am able to wrestle with what architecture and dependencies I should use as I encounter each next step. This “wrestling” is essential for my learning.

Because I added each such item one at a time, I was able to gain clarity on _why_ each technology or architecture was needed and the tradeoffs that I was making.

<br />
<br />

# Monorepo structure

This repo comprises several projects, stitched together as a monorepo via Turborepo.

For the purposes of this writeup, I’m defining a “project” as a directory of code that has its own `package.json`.

This monorepo structure allows me to have different dependencies for each project, and thus avoiding bloat for any particular project.

My need for a monorepo structure originally came when I wanted to build an experimental app which required a beta dependency that would only be applicable for that experiment. Instead of adding that dependency to my main website, I created a completely separate project in a separate repository.

While that kept the dependencies separate, it also introduced a different problem. In order for my main website and that new experimental app to have a consistent look-and-feel, I had to copy-and-paste UI component files into that new repo. As such, I lost a single-source-of-truth for those components.

Restructuring this repo as a monorepo allowed me to combine the experimental app and my main website project into a single repo, while still having separate projects– each with their own package.json.

As such, I can share things like UI components between projects within this monorepo, maintaining a single-source-of-truth for them. Even cooler, if I make a change in a shared UI component in this repo, I can see that change reflected immediately in multiple projects that are running simultaneously!

<br />
<br />

## Shared `eslint` and `tsconfig`

This monorepo contains a project for `tsconfig` and another project for custom `eslint` configuration.
This allows other projects in this monorepo to have a shared, base `eslint` and `tsconfig`, while still being able to extend them on an individual project basis.
