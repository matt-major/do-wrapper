export default class RequestHelper {
    private headers;
    private apiUrl;
    /**
     * Request Helper
     * @param {string} token - Your Private API Token
     * @constructor
     */
    constructor(token: string);
    /**
     * Check the required Request & Trigger
     * @param {*} options - Request Options
     * @returns {Promise} - Returns a promise
     */
    request(options: any): Promise<any>;
    /**
     * Submit the Request
     * @param {*} options - Request Options Object
     * @param {*} callback - Function to execute on completion
     */
    private submitRequest;
    /**
     * Get All Pages
     * @param {string} key - Type of Item
     * @param {*} options - Request Options
     * @param {*} callback - Function to execute on completion
     */
    private getAllPages;
    /**
     * Get the Remaining Pages
     * @param {*} options - Request Options
     * @param {number} first - The first page to retrieve
     * @param {number} last - The last page to retrieve
     * @param {*} callback - Function to execute on completion
     */
    private getRemainingPages;
    /**
     * Build Options for Request
     * @param {*} options - Options Object
     * @returns {*}
     */
    private requestBuilder;
}
