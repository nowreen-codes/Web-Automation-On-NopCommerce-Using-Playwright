# Web-Automation-On-NopCommerce-Using-Playwright
An advanced test automation project using Playwright and TypeScript with Allure reports for comprehensive end-to-end testing.


## About the Project
This project automates the entire e-commerce workflow, from user registration to order confirmation. It ensures high-quality testing with comprehensive reporting using Allure and easy data management via JSON.  By using the Page Object Model (POM), we make the code more readable, maintainable, and scalable.


## Page Object Model (POM): 
Instead of repeating the same code for every page, we use Page Object Models. These models represent each part of the website (like the homepage, registration page, login page, jewelry page, checkout page). This makes our tests easier to manage because we can reuse the same code for actions that appear on multiple pages.


## Fixtures: 
We use fixtures to set up everything the test needs (like opening a browser) and tear it down after. This way, each test starts with a fresh environment and doesn’t interfere with others. 


## Getting Started


### Prerequisites:


Editor: Visual Studio Code,


Automation Framework: Playwright,


Programming Language: TypeScript,


Package Manager: npm (Node.js),


Reporting Tool: Allure


## Installation
1.Node.js and Editor installation: Ensure you have Node.js installed. If not then install it from this [site](https://nodejs.org/en) . After installation to check if node is already installed or not, type “node --version” to check what is the node version.


![Screenshot 2025-01-20 104807](https://github.com/user-attachments/assets/01e3fe2d-c3f6-4998-8a9b-7d12cbb466eb)



2.VS code editor: Installed VS code from our desired browser. 


3.Playwright VS code plugins: Install “Playwright Test for VSCoc” from VS code extensions. Then type CTRL+SHIFT+P or from tab click View and choose “Command palette”, which will open command palette. Then type “install playwright” there and click the Enter button. 
It will pop up on such screen like below. Click on “OK”. It will start downloading browser driver on the folder. 
![Screenshot 2025-01-20 105139](https://github.com/user-attachments/assets/121897d2-de65-4c73-967f-22cbc34e08bd)



4.Clone the repository: git clone https://github.com/nowreen-codes/Web-Automation-On-NopCommerce-Using-Playwright.git


5.Navigate to the project directory: cd Web-Automation-On-NopCommerce-Using-Playwright


6.Install dependencies: npm install


7.Install Playwright browsers: npx playwright install


## Usage


### Run Tests


Execute all tests: npx playwright test


### Set up Allure reports:
1.Install the commandline: npm install -D allure-commandline


### Generate Allure Report
1.Generate the report:
npx allure generate ./allure-results --clean


2.Open the report:
npx allure open ./allure-report


## Features
Registration & Login: Automates user registration and login workflows.


Add to Cart: Adds multiple products to the cart and adjusts quantities.


Checkout & Order Confirmation: Completes purchases and verifies the order number.


Validation: Ensures the correct page is triggered after interactions by comparing expected vs. actual results.


JSON Data Storage: Simplifies data management for testing scenarios.


Terminal Output: Displays pass/fail results for quick verification.


Allure Reporting: Generates detailed reports for test execution.



### Output



[Screenshot 2025-01-21 091243](https://github.com/user-attachments/assets/6b465241-5814-4031-9cc0-fe24b2b214c9)





[Screenshot 2025-01-21 091322](https://github.com/user-attachments/assets/bd875262-e98e-4e3f-86ce-bf304338117d)




[image](https://github.com/user-attachments/assets/6e12b902-15c6-4b29-b8e1-e09bd0b2273f)


## Contributing
Contributions are welcome! Follow these steps:


1. Fork the repository.


2. Create a new feature branch: git checkout -b feature/YourFeature

3. Commit your changes: git commit -m 'Add YourFeature'

4. Push to the branch: git push origin feature/YourFeature

5. Open a pull request.

## Contact
Your Name - [Linkdin](www.linkedin.com/in/nowreen-islam) 


## Reference


1. Target Website for Testing: [NopCommerce](https://test460.nop-station.com/en/)


2. Playwrite Documentation: [Playwright](https://playwright.dev/docs/intro)


