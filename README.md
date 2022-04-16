# Typescript with Amazon CDK
This is a project using Typescript with Amazon CDK to create s3 buckets with infrastrucutre as software. Creates encrypted s3 bucket.  

## High Level Overview:

### What is Typescript?
TypeScript is JavaScript with syntax for types. TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. Working with the AWS CDK in TypeScript uses familiar tools, including Microsoft's TypeScript compiler (tsc), Node.js and the Node Package Manager (npm).

### What is Amazon CDK?
The AWS Cloud Development Kit (AWS CDK) is an open-source software development framework to define your cloud application resources using familiar programming languages. Using the CDK's library of infrastructure constructs, you can easily encapsulate AWS best practices in your infrastructure definition and share it without worrying about boilerplate logic.

## Requirements:

* AWS Account --> [Create and Activate Account Here](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/)
* How to obtain AWS credentials --> [How to get your credendetials here](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html)
* Install latest version of Node.js --> [This will enable NPM, the pacakge manager for Node](https://nodejs.dev/learn/how-to-install-nodejs)

### Process: 

* Install node.
* Configure aws account and cli.
* Create cloud services using Typescript.
* Delete cloudformation stack.

### Steps:

* Setup workstation for AWS credentials. `aws configure`
* Install NPM. `npm install -g aws-cdk` then `sudo npm install -g typescript`
* Install Typescript with NPM package manager. `npm install typscript`
* Install AWS CDK. `npm install aws-cdk`
* Clone the repository locally. `https://github.com/jcquiles/typescript.git`
* Init CDK language.  `cdk init app --language typescript`
---------------------------------------------------------------------------------
* **Creating a project also installs the core module and its dependencies.**
* **The AWS CDK core module is named @aws-cdk/core. AWS Construct Library modules are named like @aws-cdk/SERVICE-NAME.**
---------------------------------------------------------------------------------
* Install CDK package for s3. `npm install aws-cdk-lib/aws-s3`
* **In AWS CDK 1.x, imports were done using import were made from '@aws-cdk/core'. This was changed in CDK 2.x, in which imports are made from aws-cdk-lib package.**
----------------------------------------------------------------------------------
* **Your project's dependencies are maintained in package.json.**
----------------------------------------------------------------------------------
* Update NPM dependencies to latest version: `npm update`
* **For the step above make sure you are in your AWS CDK folder.**
----------------------------------------------------------------------------------
### Explaining the code:
* The **lib/aws-cdk-project-stack.ts** file is where the code to deploy lives.
* At the top of the file were are importing the cdk and cdk s3 packages.
* Below that it is creating a string to create the non encrypted bucket.
----------------------------------------------------------------------------------
* **make sure to make the name of the bucket unique**
----------------------------------------------------------------------------------
* The code is then creating the class of the cdk and then using the constructor to create the object for the cdk.
* It then calls the s3 package with the bucket function which will then take in the selected bucket name and enable encryption on to the s3 bucket.
* Finally, on the backend after deploying the cdk file it creates a cloudformation template for you.

### Run and Destroy
* Create s3 bucket in AWS. `cdk deploy`
* Verify the ARN of the s3 bucket and cloudformation were created in the console.
* Delete s3 bucket. `cdk destroy`
* Type in yes.