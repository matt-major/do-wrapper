import RequestHelper from './request-helper';

import Account from './modules/account';
import CDN from './modules/cdn';
import Certificates from './modules/certificates';
import Databases from './modules/databases';
import Domains from './modules/domains';
import Droplets from './modules/droplets';
import Firewalls from './modules/firewalls';
import FloatingIPs from './modules/floating-ip';
import Images from './modules/images';
import Kubernetes from './modules/kubernetes';
import LoadBalancers from './modules/load-balancers';
import Projects from './modules/projects';
import Regions from './modules/regions';
import Sizes from './modules/sizes';
import Snapshots from './modules/snapshots';
import Tags from './modules/tags';
import Volumes from './modules/volumes';

export default class DigitalOcean {
  private pageSize: number;

  public account: Account;
  public cdn: CDN;
  public certificates: Certificates;
  public databases: Databases;
  public domains: Domains;
  public droplets: Droplets;
  public firewalls: Firewalls;
  public floatingIPs: FloatingIPs;
  public images: Images;
  public kubernetes: Kubernetes;
  public loadBalancers: LoadBalancers;
  public projects: Projects;
  public regions: Regions;
  public sizes: Sizes;
  public snapshots: Snapshots;
  public tags: Tags;
  public volumes: Volumes;

  constructor(token: string, pageSize: number = 10) {
    this.pageSize = pageSize;

    const requestHelper = new RequestHelper(token);
    this.account = new Account(requestHelper);
    this.cdn = new CDN(requestHelper);
    this.certificates = new Certificates(requestHelper);
    this.databases = new Databases(requestHelper);
    this.domains = new Domains(requestHelper);
    this.droplets = new Droplets(requestHelper);
    this.firewalls = new Firewalls(requestHelper);
    this.floatingIPs = new FloatingIPs(requestHelper);
    this.images = new Images(requestHelper);
    this.kubernetes = new Kubernetes(requestHelper);
    this.loadBalancers = new LoadBalancers(requestHelper);
    this.projects = new Projects(requestHelper);
    this.regions = new Regions(requestHelper);
    this.sizes = new Sizes(requestHelper);
    this.snapshots = new Snapshots(requestHelper);
    this.tags = new Tags(requestHelper);
    this.volumes = new Volumes(requestHelper);
  }
}
