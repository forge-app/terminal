/* tslint:disable */
/* eslint-disable */
/* deno-fmt-ignore-file */
import "sst";
export {};
import "sst";
declare module "sst" {
  export interface Resource {
    AirtableSecret: {
      type: "sst.sst.Secret";
      value: string;
    };
    Auth: {
      publicKey: string;
      type: "sst.aws.Auth";
    };
    AuthAuthenticator: {
      name: string;
      type: "sst.aws.Function";
      url: string;
    };
    AuthFingerprintKey: {
      type: "random.index/randomString.RandomString";
      value: string;
    };
    AuthKeypair: {
      private: string;
      public: string;
      type: "tls.index/privateKey.PrivateKey";
    };
    Bus: {
      arn: string;
      name: string;
      type: "sst.aws.Bus";
    };
    Database: {
      database: string;
      host: string;
      password: string;
      port: number;
      type: "sst.sst.Linkable";
      username: string;
    };
    Email: {
      configSet: string;
      sender: string;
      type: "sst.aws.Email";
    };
    EmailOctopusSecret: {
      type: "sst.sst.Secret";
      value: string;
    };
    GithubClientID: {
      type: "sst.sst.Secret";
      value: string;
    };
    GithubClientSecret: {
      type: "sst.sst.Secret";
      value: string;
    };
    Interval: {
      service: string;
      type: "sst.aws.Service";
    };
    IntervalBucket: {
      name: string;
      type: "sst.aws.Bucket";
    };
    IntervalKey: {
      type: "sst.sst.Secret";
      value: string;
    };
    OpenApi: {
      name: string;
      type: "sst.aws.Function";
      url: string;
    };
    SSH: {
      service: string;
      type: "sst.aws.Service";
      url: string;
    };
    SSHKey: {
      private: string;
      public: string;
      type: "tls.index/privateKey.PrivateKey";
    };
    ShippoSecret: {
      type: "sst.sst.Secret";
      value: string;
    };
    ShortDomainEmail: {
      configSet: string;
      sender: string;
      type: "sst.aws.Email";
    };
    Site: {
      type: "sst.aws.Astro";
      url: string;
    };
    StripePublic: {
      type: "sst.sst.Secret";
      value: string;
    };
    StripeSecret: {
      type: "sst.sst.Secret";
      value: string;
    };
    StripeWebhook: {
      id: string;
      secret: string;
      type: "stripe.index/webhookEndpoint.WebhookEndpoint";
    };
    Vpc: {
      type: "sst.aws.Vpc";
    };
  }
}
// cloudflare
import * as cloudflare from "@cloudflare/workers-types";
declare module "sst" {
  export interface Resource {
    AuthWorker: cloudflare.Service;
    OpenApiWorker: cloudflare.Service;
  }
}
