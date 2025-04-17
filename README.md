# INSTRUCTIONS
## FRONTEND 
```
company-website/
│── public/               # Static assets like images, icons, and fonts
│── src/                  # Main source code
│   ├── components/       # Reusable UI components (Header, Footer, etc.)
│   ├── pages/            # Main pages (Home, About, Services, etc.)
│   ├── styles/           # CSS files for styling
│   ├── assets/           # Images, icons, and other static files
│   ├── context/          # Global state management (if using React Context API)
│   ├── utils/            # Utility functions (helper functions, API calls, etc.)
│── .gitignore            # Specifies which files to ignore in Git
│── package.json          # Contains project dependencies and scripts
│── README.md             # Documentation about the project
│── index.html            # Main entry point for a simple HTML/CSS project
```

# GIT COMMANDS
[Setup git ](https://docs.github.com/en/get-started/git-basics/set-up-git)
### install git ( if not )

LINK : [GIT INSTALLATION](https://git-scm.com/downloads/win)

### GIT CLI INSTALATION 

WINDOWS: enter this prompt in the terminal 

```
winget install --id GitHub.cli
```
REFERENCE : [ INSTALATION REFERENCE ](https://github.com/cli/cli#installation)

After installation search for git bash in the search bar or go to command prompt and switch to git bash

### configuration 

USER NAME CONFIGURATION: [REFER](https://docs.github.com/en/get-started/git-basics/setting-your-username-in-git)

command 
```
git config --global user.name "<user name>"
```

EMAIL CONFIGURATION: [REFER](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address#setting-your-commit-email-address-on-github)

command 
```
git config --global user.email "YOUR_EMAIL"
```
### connect to REPO

[REFERENCE](https://github.com/firstcontributions/first-contributions)

CLONE THE PROJECT
```
git clone https://github.com/KoteshwarChinnolla/GROW_UP
```
Change the directory to GROW UP
```
cd GROW_UP
```
creating origin
```
git switch -c your-new-branch-name
```

CHANGE THE BRANCH
```
git checkout <branch_name>(default main)
```

### make changes in the repo

```
git pull
```
**OR**
pull from particular branch

```
git pull origin <branch-name>
```

To add all the changes
```
git add .
```
to add a specific file
```
git add <file name>
```
commit the changes 
```
git commit -m "<commit name (anything)>"
```

push the changes
```
git push origin main(change the orgin if required)
```

remove files files that are pushed
```
git rm --cached <file-name>
```
if something does not push, then try to reset the last push by 
```
git reset HEAD~1
```

to remove the last commit
```
git reset --hard HEAD~1
```
pull from particular branch

```
git pull origin <branch-name>
```
