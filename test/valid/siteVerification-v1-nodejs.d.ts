// Type definitions for Google Google Site Verification API v1
// Project: https://developers.google.com/site-verification/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

// OAuth2 scopes
// https://www.googleapis.com/auth/siteverification
//   Manage the list of sites and domains you control
// https://www.googleapis.com/auth/siteverification.verify_only
//   Manage your new site verifications with Google

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function siteVerification(version:string):typeof googleapis.siteVerification;
    function siteVerification(opts: {version:string; auth?: googleapis.google.auth.OAuth2; }):typeof googleapis.siteVerification;
}
/**
 * Lets you programatically verify ownership of websites or domains with Google.
 */
declare module googleapis.siteVerification {
    var webResource: {
        /**
         * Relinquish ownership of a website or domain.
         * @params {string} id The id of a verified site or domain.
         */
        delete: (params: {
            id: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Get the most current data for a website or domain.
         * @params {string} id The id of a verified site or domain.
         */
        get: (params: {
            id: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ISiteVerificationWebResourceResource, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Get a verification token for placing on a website or domain.
         */
        getToken: (params: {
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ISiteVerificationWebResourceGettokenRequest;
        }, callback: (err: IErrorResponse, response: ISiteVerificationWebResourceGettokenResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Attempt verification of a website or domain.
         * @params {string} verificationMethod The method to use for verifying a site or domain.
         */
        insert: (params: {
            verificationMethod: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ISiteVerificationWebResourceResource;
        }, callback: (err: IErrorResponse, response: ISiteVerificationWebResourceResource, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Get the list of your verified websites and domains.
         */
        list: (params: {
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ISiteVerificationWebResourceListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Modify the list of owners for your website or domain. This method supports patch semantics.
         * @params {string} id The id of a verified site or domain.
         */
        patch: (params: {
            id: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ISiteVerificationWebResourceResource;
        }, callback: (err: IErrorResponse, response: ISiteVerificationWebResourceResource, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Modify the list of owners for your website or domain.
         * @params {string} id The id of a verified site or domain.
         */
        update: (params: {
            id: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ISiteVerificationWebResourceResource;
        }, callback: (err: IErrorResponse, response: ISiteVerificationWebResourceResource, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    interface ISiteVerificationWebResourceGettokenRequest {
        /**
         * The site for which a verification token will be generated.
         */
        site: {
            identifier: string;
            type: string;
        };
        /**
         * The verification method that will be used to verify this site. For sites, 'FILE' or 'META' methods may be used. For domains, only 'DNS' may be used.
         */
        verificationMethod: string;
    }
    interface ISiteVerificationWebResourceGettokenResponse {
        /**
         * The verification method to use in conjunction with this token. For FILE, the token should be placed in the top-level directory of the site, stored inside a file of the same name. For META, the token should be placed in the HEAD tag of the default page that is loaded for the site. For DNS, the token should be placed in a TXT record of the domain.
         */
        method: string;
        /**
         * The verification token. The token must be placed appropriately in order for verification to succeed.
         */
        token: string;
    }
    interface ISiteVerificationWebResourceListResponse {
        /**
         * The list of sites that are owned by the authenticated user.
         */
        items: ISiteVerificationWebResourceResource[];
    }
    interface ISiteVerificationWebResourceResource {
        /**
         * The string used to identify this site. This value should be used in the "id" portion of the REST URL for the Get, Update, and Delete operations.
         */
        id: string;
        /**
         * The email addresses of all verified owners.
         */
        owners: string[];
        /**
         * The address and type of a site that is verified or will be verified.
         */
        site: {
            identifier: string;
            type: string;
        };
    }
}
