import got from "got";
import { HttpMethods } from "./common";

interface Headers {
    [key: string]: any;
}

export default class RequestHelper {
    private headers: Headers;
    private apiUrl: string;

    /**
     * Request Helper
     * @param {string} token - Your Private API Token
     * @constructor
     */
    constructor(token: string) {
        this.headers = {
            'authorization': `Bearer ${token}`,
            'content_type': 'application/json'
        };

        this.apiUrl = 'https://api.digitalocean.com/v2/';
    }

    /**
     * Check the required Request & Trigger
     * @param {*} options - Request Options
     * @returns {Promise} - Returns a promise
     */
    request(options: any): Promise<any> {
        let callback;

        const promise = new Promise((resolve, reject) => {
            callback = (body: any, err: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(body);
                }
            };
        });

        options.includeAll ? this.getAllPages(options.key, options, callback) : this.submitRequest(options, callback);

        return promise;
    }

    /**
     * Submit the Request
     * @param {*} options - Request Options Object
     * @param {*} callback - Function to execute on completion
     */
    private submitRequest(options: any, callback: any): void {
        const requestOptions = this.requestBuilder(options);

        got(this.apiUrl + options.actionPath, requestOptions)
            .then((response: any) => {
                callback(response.statusCode === 204 ? null : JSON.parse(response.body), null);
            })
            .catch((error: any) => {
                callback(null, error);
            });
    }

    /**
     * Get All Pages
     * @param {string} key - Type of Item
     * @param {*} options - Request Options
     * @param {*} callback - Function to execute on completion
     */
    private getAllPages(key: string, options: any, callback: any) {
        let items: any[] = [],
            total: number = 0,
            required: number = 0,
            completed: number = 1;

        options.qs.page = 1;

        // Override the per_page amount to avoid HTTP 429 TOO_MANY_REQUESTS
        options.qs.per_page = 25;

        this.submitRequest(options, (body: any, err: any) => {
            if (err) {
                return callback(null, err);
            }

            total = body.meta.total;
            items = items.concat(body[key]);
            required = Math.ceil(total / options.qs.per_page);

            if (items.length >= total) {
                return callback(items);
            } else {
                this.getRemainingPages(options, 2, required, (body: any, err: any) => {
                    if (err) {
                        return callback(null, err);
                    }

                    completed++;
                    items = items.concat(body[key]);

                    if (completed === required) {
                        return callback(items);
                    }
                });
            }
        });
    }

    /**
     * Get the Remaining Pages
     * @param {*} options - Request Options
     * @param {number} first - The first page to retrieve
     * @param {number} last - The last page to retrieve
     * @param {*} callback - Function to execute on completion
     */
    private getRemainingPages(options: any, first: number, last: number, callback: Function) {
        for (let current = first; current <= last; current++) {
            options.qs.page = current;
            this.submitRequest(options, callback);
        }
    }

    /**
     * Build Options for Request
     * @param {*} options - Options Object
     * @returns {*}
     */
    private requestBuilder(options: any): any {
        return {
            method: options.method || HttpMethods.GET,
            headers: options.headers || this.headers,
            strictSSL: true,
            searchParams: options.qs || {},
            retry: 0,
            ...(options.body && { json: options.body }),
        };
    }
}
