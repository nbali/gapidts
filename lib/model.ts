// copied by discovery v1 definition.

export interface IDirectoryList {
	/**
	 * Indicate the version of the Discovery API used to generate this doc.
	 */
	discoveryVersion: string;
	/**
	 * The individual directory entries. One entry per api/version pair.
	 */
	items: {
		description: string;
		discoveryLink: string;
		discoveryRestUrl: string;
		documentationLink: string;
		icons: {
			x16: string;
			x32: string;
		};
		id: string;
		kind: string;
		labels: string[];
		name: string;
		preferred: boolean;
		title: string;
		version: string;
	}[];
	/**
	 * The kind for this response.
	 */
	kind: string;
}

export interface IJsonSchema {
	/**
	 * A reference to another schema. The value of this property is the "id" of another schema.
	 */
	$ref: string;
	/**
	 * If this is a schema for an object, this property is the schema for any additional properties with dynamic keys on this object.
	 */
	additionalProperties: IJsonSchema;
	/**
	 * Additional information about this property.
	 */
	annotations: {
		required: string[];
	};
	/**
	 * The default value of this property (if one exists).
	 */
	default: string;
	/**
	 * A description of this object.
	 */
	description: string;
	/**
	 * Values this parameter may take (if it is an enum).
	 */
	enum: string[];
	/**
	 * The descriptions for the enums. Each position maps to the corresponding value in the "enum" array.
	 */
	enumDescriptions: string[];
	/**
	 * An additional regular expression or key that helps constrain the value. For more details see: http://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.23
	 */
	format: string;
	/**
	 * Unique identifier for this schema.
	 */
	id: string;
	/**
	 * If this is a schema for an array, this property is the schema for each element in the array.
	 */
	items: IJsonSchema;
	/**
	 * Whether this parameter goes in the query or the path for REST requests.
	 */
	location: string;
	/**
	 * The maximum value of this parameter.
	 */
	maximum: string;
	/**
	 * The minimum value of this parameter.
	 */
	minimum: string;
	/**
	 * The regular expression this parameter must conform to. Uses Java 6 regex format: http://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html
	 */
	pattern: string;
	/**
	 * If this is a schema for an object, list the schema for each property of this object.
	 */
	properties: {
		[name:string]: IJsonSchema;
	};
	/**
	 * The value is read-only, generated by the service. The value cannot be modified by the client. If the value is included in a POST, PUT, or PATCH request, it is ignored by the service.
	 */
	readOnly: boolean;
	/**
	 * Whether this parameter may appear multiple times.
	 */
	repeated: boolean;
	/**
	 * Whether the parameter is required.
	 */
	required: boolean;
	/**
	 * The value type for this schema. A list of values can be found here: http://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.1
	 */
	type: string;
	/**
	 * In a variant data type, the value of one property is used to determine how to interpret the entire entity. Its value must exist in a map of descriminant values to schema names.
	 */
	variant: {
		discriminant: string;
		map: {
			$ref: string;
			type_value: string;
		}[];
	};
}

export interface IRestDescription {
	/**
	 * Authentication information.
	 */
	auth: {
		oauth2: {
			scopes: {
				[name:string]: {
					description: string;
				};
			};
		};
	};
	/**
	 * [DEPRECATED] The base path for REST requests.
	 */
	basePath: string;
	/**
	 * [DEPRECATED] The base URL for REST requests.
	 */
	baseUrl: string;
	/**
	 * The path for REST batch requests.
	 */
	batchPath: string;
	/**
	 * Indicates how the API name should be capitalized and split into various parts. Useful for generating pretty class names.
	 */
	canonicalName: string;
	/**
	 * The description of this API.
	 */
	description: string;
	/**
	 * Indicate the version of the Discovery API used to generate this doc.
	 */
	discoveryVersion: string;
	/**
	 * A link to human readable documentation for the API.
	 */
	documentationLink: string;
	/**
	 * The ETag for this response.
	 */
	etag: string;
	/**
	 * A list of supported features for this API.
	 */
	features: string[];
	/**
	 * Links to 16x16 and 32x32 icons representing the API.
	 */
	icons: {
		x16: string;
		x32: string;
	};
	/**
	 * The ID of this API.
	 */
	id: string;
	/**
	 * The kind for this response.
	 */
	kind: string;
	/**
	 * Labels for the status of this API, such as labs or deprecated.
	 */
	labels: string[];
	/**
	 * API-level methods for this API.
	 */
	methods: {
		[name:string]: IRestMethod;
	};
	/**
	 * The name of this API.
	 */
	name: string;
	/**
	 * The domain of the owner of this API. Together with the ownerName and a packagePath values, this can be used to generate a library for this API which would have a unique fully qualified name.
	 */
	ownerDomain: string;
	/**
	 * The name of the owner of this API. See ownerDomain.
	 */
	ownerName: string;
	/**
	 * The package of the owner of this API. See ownerDomain.
	 */
	packagePath: string;
	/**
	 * Common parameters that apply across all apis.
	 */
	parameters: {
		[name:string]: IJsonSchema;
	};
	/**
	 * The protocol described by this document.
	 */
	protocol: string;
	/**
	 * The resources in this API.
	 */
	resources: {
		[name:string]: IRestResource;
	};
	/**
	 * The version of this API.
	 */
	revision: string;
	/**
	 * The root URL under which all API services live.
	 */
	rootUrl: string;
	/**
	 * The schemas for this API.
	 */
	schemas: {
		[name:string]: IJsonSchema;
	};
	/**
	 * The base path for all REST requests.
	 */
	servicePath: string;
	/**
	 * The title of this API.
	 */
	title: string;
	/**
	 * The version of this API.
	 */
	version: string;
}

export interface IRestMethod {
	/**
	 * Description of this method.
	 */
	description: string;
	/**
	 * Whether this method requires an ETag to be specified. The ETag is sent as an HTTP If-Match or If-None-Match header.
	 */
	etagRequired: boolean;
	/**
	 * HTTP method used by this method.
	 */
	httpMethod: string;
	/**
	 * A unique ID for this method. This property can be used to match methods between different versions of Discovery.
	 */
	id: string;
	/**
	 * Media upload parameters.
	 */
	mediaUpload: {
		accept: string[];
		maxSize: string;
		protocols: {
			resumable: {
				multipart: boolean;
				path: string;
			};
			simple: {
				multipart: boolean;
				path: string;
			};
		};
	};
	/**
	 * Ordered list of required parameters, serves as a hint to clients on how to structure their method signatures. The array is ordered such that the "most-significant" parameter appears first.
	 */
	parameterOrder: string[];
	/**
	 * Details for all parameters in this method.
	 */
	parameters: {
		[name:string]: IJsonSchema;
	};
	/**
	 * The URI path of this REST method. Should be used in conjunction with the basePath property at the api-level.
	 */
	path: string;
	/**
	 * The schema for the request.
	 */
	request: {
		$ref: string;
		parameterName: string;
	};
	/**
	 * The schema for the response.
	 */
	response: {
		$ref: string;
	};
	/**
	 * OAuth 2.0 scopes applicable to this method.
	 */
	scopes: string[];
	/**
	 * Whether this method supports media downloads.
	 */
	supportsMediaDownload: boolean;
	/**
	 * Whether this method supports media uploads.
	 */
	supportsMediaUpload: boolean;
	/**
	 * Whether this method supports subscriptions.
	 */
	supportsSubscription: boolean;
}

export interface IRestResource {
	/**
	 * Methods on this resource.
	 */
	methods: {
		[name:string]: IRestMethod;
	};
	/**
	 * Sub-resources on this resource.
	 */
	resources: {
		[name:string]: IRestResource;
	};
}
