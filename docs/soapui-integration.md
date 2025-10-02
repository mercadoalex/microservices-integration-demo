# SOAPUI Integration for Microservices

This document provides a comprehensive guide on how to set up and run SOAPUI tests for the microservices in the integration demo project. It covers the configuration details, test case creation, and execution steps.

## Prerequisites

Before you begin, ensure you have the following installed:

- [SOAPUI](https://www.soapui.org/downloads/soapui-open-source/) (Open Source version)
- Java Runtime Environment (JRE) if required by your SOAPUI installation
- Access to the microservices endpoints

## Setting Up SOAPUI Project

1. **Download the SOAPUI Project File**: 
   The SOAPUI project configuration is located in the `src/tests/soapui-project.xml` file. You can import this file into SOAPUI to get started.

2. **Importing the Project**:
   - Open SOAPUI.
   - Go to `File` > `Import Project`.
   - Select the `soapui-project.xml` file from the `src/tests` directory.
   - Click `Open` to import the project.

## Configuring Endpoints

Ensure that the endpoints for Service A and Service B are correctly configured in the SOAPUI project. You may need to update the endpoint URLs in the project file to match your local or deployed services.

### Example Endpoints

- Service A: `http://localhost:3000/api/service-a`
- Service B: `http://localhost:3001/api/service-b`

## Creating Test Cases

1. **Navigate to the Imported Project**:
   - In the SOAPUI interface, find your imported project in the left panel.

2. **Add Test Cases**:
   - Right-click on the Test Suite and select `Add Test Case`.
   - Name your test case (e.g., `ServiceATest`).
   - Add test steps by right-clicking on the test case and selecting `Add Step`.

3. **Define Requests**:
   - For each test step, define the HTTP request type (GET, POST, etc.) and the corresponding endpoint.
   - Set up the request body and headers as needed.

4. **Assertions**:
   - Add assertions to validate the responses from the microservices. You can check for status codes, response times, and specific content in the response body.

## Running Tests

To execute the tests:

1. Select the Test Suite or Test Case you want to run.
2. Click the green play button (Run) in the toolbar.
3. Review the results in the output panel to ensure all tests pass.

## Troubleshooting

- If you encounter issues with endpoint connectivity, verify that the microservices are running and accessible.
- Check the logs in SOAPUI for any errors related to request formatting or assertions.

## Conclusion

This guide provides the necessary steps to set up and run SOAPUI tests for the microservices in the integration demo project. By following these instructions, you can ensure that your microservices are functioning correctly and are integrated as expected.