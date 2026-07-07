# How to Push This Project to GitHub

Follow these steps to push the Catalyx website to GitHub so your team can pull it and start building other pages.

---

## Prerequisites

1. **Git installed** — check with `git --version`
2. **GitHub account** with access to create repositories
3. **Terminal/Command Prompt** open in the `catalyx_website` root folder

---

## Step-by-Step Instructions

### 1. Initialize Git (if not already done)

```bash
# Check if .git exists
ls -a

# If .git already exists, skip this step
# If not, initialize Git:
git init
```

### 2. Configure Git User (if first time)

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

### 3. Add All Files to Staging

```bash
# Add everything except what's in .gitignore
git add .
```

### 4. Create a Commit with a Descriptive Message

```bash
git commit -m "Initial commit: Header, Footer, and About page complete"
```

### 5. Create a New Repository on GitHub

1. Go to [github.com](https://github.com)
2. Click **"New"** (or the **+** icon → **New repository**)
3. Name it: `catalyx-website`
4. Description: `Official Catalyx website — Next.js + Tailwind`
5. **Do NOT** initialize with README, .gitignore, or license (we already have them)
6. Click **Create repository**

### 6. Link Your Local Repo to GitHub

GitHub will show you instructions. Copy the **"…or push an existing repository"** section. It will look like this:

```bash
# Replace <your-username> with your actual GitHub username
git remote add origin https://github.com/<your-username>/catalyx-website.git
git branch -M main
git push -u origin main
```

Example:
```bash
git remote add origin https://github.com/johndoe/catalyx-website.git
git branch -M main
git push -u origin main
```

### 7. Verify the Push

1. Go to your GitHub repository URL (e.g. `https://github.com/<your-username>/catalyx-website`)
2. You should see all files, folders, and the README.md displayed

---

## How Your Team Can Pull and Start Working

### For New Team Members

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/catalyx-website.git

# 2. Navigate to the Frontend folder
cd catalyx-website/Frontend

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev

# 5. Open http://localhost:3000 in browser
```

### To Pull Latest Changes

```bash
# Inside the catalyx-website folder
git pull origin main
```

### To Push Your Changes

```bash
# 1. Check what changed
git status

# 2. Stage specific files or all changes
git add src/app/team/page.tsx src/components/team/TeamGrid.tsx
# OR add everything:
git add .

# 3. Commit with a descriptive message
git commit -m "Add Team page with member grid"

# 4. Push to GitHub
git push origin main
```

---

## What's Ignored (Won't Be Pushed)

The `.gitignore` file prevents these from being pushed:

- `node_modules/` — dependencies (everyone installs via `npm install`)
- `.next/` — build cache
- `.env*` — environment variables (secrets)
- `.vscode/`, `.idea/` — editor settings (personal preferences)
- `Thumbs.db`, `.DS_Store` — OS metadata files

---

## Branch Strategy (Optional)

For team collaboration, consider using feature branches:

```bash
# Create a new branch for your page
git checkout -b feature/team-page

# Work on your page, commit changes
git add .
git commit -m "Build Team page components"

# Push your branch
git push origin feature/team-page

# Then create a Pull Request on GitHub for review
```

---

## Need Help?

- **Git basics**: [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- **GitHub Docs**: [GitHub Getting Started](https://docs.github.com/en/get-started)
- **Ask your team lead** if you run into merge conflicts or push issues
