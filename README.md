# Microservices Integration Demo

This project demonstrates the integration of microservices using Node.js, along with testing endpoints using SOAPUI and automating the CI/CD process with GitHub Actions.

## Overview

The microservices architecture consists of two services:
- **Service A**: Handles specific business logic and exposes certain endpoints.
- **Service B**: Interacts with Service A and provides additional functionality.

This project includes the necessary setup for both services, integration testing with SOAPUI, and a CI/CD pipeline using GitHub Actions.

## Project Structure

```
microservices-integration-demo
├── src
│   ├── service-a
│   │   ├── app.js
│   │   └── routes.js
│   ├── service-b
│   │   ├── app.js
│   │   └── routes.js
│   └── tests
│       └── soapui-project.xml
├── .github
│   └── workflows
│       └── ci.yml
├── package.json
├── README.md
└── docs
    ├── architecture.md
    ├── soapui-integration.md
    └── github-actions.md
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/microservices-integration-demo.git
   cd microservices-integration-demo
   ```

2. **Install Dependencies**
   Ensure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Run the Services**
   Open two terminal windows and run the following commands:
   - For Service A:
     ```bash
     node src/service-a/app.js
     ```
   - For Service B:
     ```bash
     node src/service-b/app.js
     ```

4. **Run SOAPUI Tests**
   Open SOAPUI and import the `src/tests/soapui-project.xml` file to run the integration tests.

## Usage Examples

- **Service A Endpoint**: Access Service A at `http://localhost:3000/api/service-a`.
- **Service B Endpoint**: Access Service B at `http://localhost:3001/api/service-b`.

## Documentation

- [Architecture](docs/architecture.md): Detailed architecture of the microservices.
- [SOAPUI Integration](docs/soapui-integration.md): Instructions on how to set up and run SOAPUI tests.
- [GitHub Actions](docs/github-actions.md): Overview of the CI/CD setup using GitHub Actions.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or features you would like to add.