# Unique In Order

## Requisites

- Write a function that takes argument and returns list
- The list must have the same order as the original sequence argument
- Same values next to each other must be condensed into one value
- List can have same values but they cannot be next to each other i.e. `['A', 'B', 'C', 'D', 'A', ‘B’]`
- Has to be case sensitive meaning `c` and `C` are not the same
- Argument can be both a list or a string

## How should we do it?

- Empty list
- Iterate through the argument and add letters to new list
- Set up conditional that peeks at the next index
- If next index is equal to current index, then it won’t add letter to new list, if not, add to list
- As it’s case sensitive we need to use `===` or `!==` operators
