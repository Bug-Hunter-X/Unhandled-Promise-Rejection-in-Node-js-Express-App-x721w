# Unhandled Promise Rejection in Node.js

This repository demonstrates a common but difficult-to-debug issue in Node.js: unhandled promise rejections.  The `bug.js` file contains a simple Express.js server that, while functional, neglects proper error handling for promises, leading to potential instability.

The `bugSolution.js` file provides a corrected version with proper `.catch()` blocks to handle potential promise rejections, ensuring robustness and preventing silent failures.