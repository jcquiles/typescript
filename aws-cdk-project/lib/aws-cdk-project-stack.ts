import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
// // // import * as sqs from 'aws-cdk-lib/aws-sqs';

// import * as cdk from '@aws-cdk/core';
import * as s3 from 'aws-cdk-lib/aws-s3'

let s3Bucket: string = "mynewbucketjcq0422";

export class AwsCdkProjectStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new s3.Bucket(this, s3Bucket);
  }
}
