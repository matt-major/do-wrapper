import RequestHelper from './request-helper';

import Account from './modules/account';
import Actions from './modules/actions';
import CDN from './modules/cdn';
import Certificates from './modules/certificates';
import Databases from './modules/databases';
import Domains from './modules/domains';
import Droplets from './modules/droplets';
import Firewalls from './modules/firewalls';
import FloatingIPs from './modules/floating-ip';
import Images from './modules/images';
import Keys from './modules/keys';
import Kubernetes from './modules/kubernetes';
import LoadBalancers from './modules/load-balancers';
import Projects from './modules/projects';
import Regions from './modules/regions';
import Reports from './modules/reports';
import Sizes from './modules/sizes';
import Snapshots from './modules/snapshots';
import Tags from './modules/tags';
import Volumes from './modules/volumes';

export default class DigitalOcean {
    public account: Account;
    public actions: Actions;
    public cdn: CDN;
    public certificates: Certificates;
    public databases: Databases;
    public domains: Domains;
    public droplets: Droplets;
    public firewalls: Firewalls;
    public floatingIPs: FloatingIPs;
    public images: Images;
    public keys: Keys;
    public kubernetes: Kubernetes;
    public loadBalancers: LoadBalancers;
    public projects: Projects;
    public regions: Regions;
    public reports: Reports;
    public sizes: Sizes;
    public snapshots: Snapshots;
    public tags: Tags;
    public volumes: Volumes;

    constructor(token: string, pageSize: number = 10) {
        const requestHelper = new RequestHelper(token);
        this.account = new Account(pageSize, requestHelper);
        this.actions = new Actions(pageSize, requestHelper);
        this.cdn = new CDN(pageSize, requestHelper);
        this.certificates = new Certificates(pageSize, requestHelper);
        this.databases = new Databases(pageSize, requestHelper);
        this.domains = new Domains(pageSize, requestHelper);
        this.droplets = new Droplets(pageSize, requestHelper);
        this.firewalls = new Firewalls(pageSize, requestHelper);
        this.floatingIPs = new FloatingIPs(pageSize, requestHelper);
        this.images = new Images(pageSize, requestHelper);
        this.keys = new Keys(pageSize, requestHelper);
        this.kubernetes = new Kubernetes(pageSize, requestHelper);
        this.loadBalancers = new LoadBalancers(pageSize, requestHelper);
        this.projects = new Projects(pageSize, requestHelper);
        this.regions = new Regions(pageSize, requestHelper);
        this.reports = new Reports(pageSize, requestHelper);
        this.sizes = new Sizes(pageSize, requestHelper);
        this.snapshots = new Snapshots(pageSize, requestHelper);
        this.tags = new Tags(pageSize, requestHelper);
        this.volumes = new Volumes(pageSize, requestHelper);
    }
}
