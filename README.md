# College Management System — Jenkins Assignment 3

A beginner-friendly Node.js website with an in-browser student table. No database; records disappear on refresh.

## Local practice (PowerShell)
1. Open PowerShell in this extracted folder.
2. `node -v` and `npm -v`
3. `npm install`
4. `npm test`
5. `npm start` then visit http://localhost:3000

## GitHub
Create a NEW repository (e.g. `College-Management-Jenkins-Practice`) to avoid overwriting your existing college management repo. In the project folder:
```
git init
git add .
git commit -m "Add college management app"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/College-Management-Jenkins-Practice.git
git push -u origin main
```

## Jenkins Freestyle job (Windows)
1. Open http://localhost:8080 and select New Item → Freestyle project.
2. Source Code Management → Git → paste your NEW GitHub repo URL. Branch: `*/main`.
3. Ensure Git, Node.js and npm are available to Jenkins (configure NodeJS plugin if needed).
4. Build Steps → Execute Windows batch command:
```
npm install
npm test
```
5. Save → Build Now → latest build → Console Output. Look for `PASS` and `Finished: SUCCESS`.
6. Optional: add `npm run build` (in this practice project it runs the same simple test).

## Viva answers
- Jenkins: an automation server.
- Job: instructions Jenkins runs.
- Build: one run of a job.
- GitHub: stores the code.
- `npm install`: installs project dependencies (this example has no external dependencies).
- `npm test`: runs the simple page check.
- Console Output: shows command logs and errors.
- Trigger: tells Jenkins when to run; Build Now starts it manually.
- Freestyle: GUI-configured job; Pipeline: workflow defined in code.
