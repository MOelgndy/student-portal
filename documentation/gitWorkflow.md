# Please check this [tutorial.](https://www.youtube.com/watch?v=k20T9s5TkHY)

## Branches Types:

    - Guarded
    - Story
    - Task
    - Bug

## Guarded Branches:

    - main
    - beta
    - testing
    - dev

## Guarded Branch Means:

    - you can't create it.
    - you can't delete it.
    - you can't force push to it.
    - merge a PR to it must meet the required conditions (conditions vary from one branch to another).

## Story Branch Means:

    - you can create it.
    - you can delete it.
    - you can't force push to it.
    - merge a PR to it must meet the required conditions.
    - usually created from the dev branch.

## Task Branch Means:

    - you can create it.
    - you can delete it.
    - you can force push to it.
    - you can merge a PR to it.
    - usually created from a story branch.

## Bug Branch Means:

    - you can create it.
    - you can delete it.
    - you can force push to it.
    - you can merge a PR to it.
    - usually created from the dev branch.

# Workflow:

- The dev branch is the development branch in which all the code from other branches is integrated.

- We also do not work directly in the dev branch.

# Naming:

- Each branch name has to be cloned from the ticket name and number.

  TODO: year/sprint no./type/ticket
