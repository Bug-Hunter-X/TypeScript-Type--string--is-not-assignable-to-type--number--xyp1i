# TypeScript Type 'string' is not assignable to type 'number'

This repository demonstrates a common TypeScript error: "Type 'string' is not assignable to type 'number'" and provides a solution.  The error arises when attempting to combine arrays of differing data types. This example shows how to correctly type arrays to avoid this issue.

## Error Description
The error message "Type 'string' is not assignable to type 'number'" indicates a type mismatch. TypeScript's type system prevents combining arrays of different types to maintain data integrity and prevent runtime errors.

## Solution
The solution involves ensuring both arrays share the same data type. This can be achieved through explicit type definition or type assertion (although type assertions should be used cautiously).