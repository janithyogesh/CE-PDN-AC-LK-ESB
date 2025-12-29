# WSO2 Integrator MI Demo

This repository demonstrates how to use **WSO2 Micro Integrator (MI)** to build integration services and deploy them using a centralized **Enterprise Service Bus (ESB)** approach. The demo focuses on creating integration APIs that fetch and filter data for research groups (such as publications) using MI, instead of allowing direct access to backend services.

---

## Overview

When multiple research group websites directly consume various backend services, the overall system architecture becomes complex and difficult to maintain. This demo illustrates how an **ESB-based architecture** simplifies integration by centralizing logic through **WSO2 Micro Integrator**.

With this approach:

- Backend services remain unchanged  
- The ESB manages routing, transformation, and filtering  
- Research groups receive clean, filtered data through a single API  

WSO2 Micro Integrator is a lightweight, cloud-native integration runtime that supports REST APIs, message routing, transformation, and orchestration.

---

## Demonstration

This demo implements integration APIs using **WSO2 MI** that act as an intermediary between frontend research group websites and backend services. Each research group can access only the data relevant to them, such as group-specific publications.

---

## Setup Steps

### 1. Install Required Tools

#### WSO2 MI Extension for VS Code
Install the official **WSO2 Micro Integrator extension** for Visual Studio Code. This extension allows you to create, build, and deploy integration projects easily.

#### WSO2 Micro Integrator Runtime
Download and install the **WSO2 Micro Integrator runtime**. Ensure that Java (JDK) is installed and the `JAVA_HOME` environment variable is correctly set.

---

### 2. Create an Integration Project

- Open Visual Studio Code with the WSO2 MI extension installed  
- Create a new integration project  
- Select a project name and configure the MI server runtime path when prompted  

---

### 3. Use External APIs

The demo uses the department’s public API documentation to retrieve publication data. These APIs provide information related to research groups and their publications.

Within the integration project, endpoints are created to invoke these backend APIs and apply filtering or transformation logic as required.

---

### 4. Define Endpoints

Inside the integration project:

- Create HTTP endpoints to communicate with backend services  
- Define integration APIs such as:


These APIs route incoming requests to backend services, filter the response using the research group `{slug}`, and return only relevant data.

---

### 5. Data Transformation

WSO2 MI mapping tools are used to transform backend responses into simplified output formats. This ensures frontend applications receive only the necessary fields in a clean and consistent structure.

---

### 6. Deploy and Test

- Build and deploy the integration artifacts to the MI runtime  
- Start the Micro Integrator server  
- Use a REST client (such as Postman) to invoke the integration APIs and verify the filtered results  

---

## Key Concepts

- **Integration APIs** – APIs exposed by the ESB layer for frontend consumption  
- **Endpoint** – A connection point used to call backend services  
- **Transformation** – Converting backend payloads into frontend-friendly formats  
- **Filtering** – Returning only data relevant to a specific research group  

---

## Benefits of This Approach

Using an ESB with WSO2 Micro Integrator:

- Eliminates duplicated integration logic in client applications  
- Centralizes API access and transformation logic  
- Simplifies maintenance by handling backend changes in one place  
- Standardizes data access for all research group websites  

---

## About WSO2 Micro Integrator

WSO2 Micro Integrator is a lightweight, cloud-native integration runtime that enables developers to:

- Route and transform messages  
- Expose integration APIs  
- Orchestrate backend service calls  

MI can be deployed locally, in containers, or in production environments.

---
