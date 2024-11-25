# Para Bank - Test Automation

## Table of Content

- About Project
- Project Structure
- Project Setup
- Test Suite
  - Register
  - Login
  - Accounts balance, total
  - Open account
  - Transfer fund
  - Request loan
  - Bill pay
  - Update contact info
  - Logout
- Report Configurations
- Running Test
- Viewing Report

## About Project <a id="abt"></a>

Para Bank webpage contains multiple functionalities. To check these functionalities using Cypress Automation tool, followed below project structure.


## Project Structure <a id = "proj structure"></a>

Most of the default folders are not used in this Project. Below mentioned main folders are used:
* cypress - Base Folder which contains the following sub folders:
  *  e2e - contains all spec file for all the testcases / test suites
  * pages - contains classes, which describe all the elements and the methods for each pages
  * utils - contains all the test data


## Project Setup <a id = "project setup"></a>

1. In GitHub, Create Repository(Cypress-ParaBank) with private access
2. In Visual Studio,
   - click on 'Clone Git Repository' from Welcome screen
   - select option 'GitHub Repo' from the displayed list
3. In Local Repository, Create New folder for cypress project
4. Open new terminal in Visual Studio
5. Execute below commands in terminal to get the software installed
   
	```step 1:  npm -i init```

	```step 2: npm install cypress - -save -dev```

	```step 3: npm install typescript --save -dev```

	```step 4: create file under project folder 'tsconfig.json' and add below snippet```

```json
		{
  		"compilerOptions": {
    		"target": "es6",
    		"lib": ["es6", "dom"],
    		"types": ["cypress", "node"]
  		}
		}
```

6. Run command `npx cypress open` in terminal -> Cypress window will be opened
7. Select 'E2E Testing' in Cypress window
8. Configuration file will be displayed, click Continue to proceed
9. Select any Browser and create new spec file(spec.ts). 
10. Continue with the default code generated, click continue
11. Cypress Dashboard will be displayed with created sample spec file.
12. Add `cypress.config.ts` file to the root of the project
    

## Test Suite

Test scripts developed for the following modules,
  - Register
  - Login
  - Accounts balance, total
  - Open account
  - Transfer fund
  - Request loan
  - Bill pay
  - Update contact info
  - Logout

## Report Configurations <a id="report"></a>

To Enable reports and get evidences like screenshot or videos, followed below steps

 1. Install mochawesome for reports with the commands
 2. ```npm install cypress-mochawesome-reporter --save -dev```

 3. In 'cypress.config.ts' , under 'setupNodeEvents(on, config)' add below commands,

	```
	setupNodeEvents(on, config)
	{
	require('cypress-mochawesome-reporter/plugin')(on)
	}
	```

4. In 'cypress.config.ts', add the below reporters commands within defineConfig function,

    ```
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportPageTitle: 'ParaBank-Report',
    },
    e2e:{
      //add commands
        }
    ```

## Running Test and Viewing Results

To run the complete tests in one go, open a terminal in project folder and execute below command
	```npx cypress run```

## Viewing Reports

To view the reports, refresh the project folder in expolorer, test results will be updated to project folder

 1. go to 'cypress > reports' folder
 2. open the index.html file in web browser.
