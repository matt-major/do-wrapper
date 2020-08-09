//The action of the command here is to create a droplet
//options are the configs an example of the config file will be servername e.t.c

//load the lib
//instaciate the lib and pass in digital ocean keys



const DigitalOcean = require("do-wrapper").default;
const instance = new DigitalOcean(personal_access_token);
const inquirer = require('inquirer');
/*create the question array that asks question about the droplete to be created::
TODOS
1)update the images to support more OS*-almost done
2)



*/
var questions = [

    {
        type: 'input',
        name: 'name',
        message: 'whats the name you want to asign to your server?',
        default: `awsome1`,
    },
    {
        type: `list`,
        name: `region`,
        message: `what reqion do you want your server to be located`,
        choices: [
            'ams2', 'ams3', 'blr1',
            'fra1', 'lon1', 'nyc1',
            'nyc2', 'nyc3', 'sfo1',
            'sfo2', 'sfo3', 'sgp1',
            'tor1'
          ] ,

    },
    {
        type: `list`,
        name: `image`,
        message: `what type of operating system do you need?`,
        choices: [`ubuntu-20-04-x64`,`freeBSD-12-01-zfs`]

    },
    {
        type: `input`,
        name: `ssh_key`,
        message: `enter your public ssh-key?`,
        default: []
    }
    ,
    {
        type: `rawlist`,
        name: `size`,
        message: `what size of cpu do you need for your machine?`,
        choices: [
            's-1vcpu-1gb',    '512mb',           's-1vcpu-2gb',
            '1gb',            's-3vcpu-1gb',     's-2vcpu-2gb',
            's-1vcpu-3gb',    's-2vcpu-4gb',     '2gb',
            's-4vcpu-8gb',    'm-1vcpu-8gb',     'c-2',
            '4gb',            'g-2vcpu-8gb',     'gd-2vcpu-8gb',
            'm-16gb',         's-6vcpu-16gb',    'c-4',
            '8gb',            'm-2vcpu-16gb',    'm3-2vcpu-16gb',
            'g-4vcpu-16gb',   'gd-4vcpu-16gb',   'm6-2vcpu-16gb',
            'm-32gb',         's-8vcpu-32gb',    'c-8',
            '16gb',           'm-4vcpu-32gb',    'm3-4vcpu-32gb',
            'g-8vcpu-32gb',   's-12vcpu-48gb',   'gd-8vcpu-32gb',
            'm6-4vcpu-32gb',  'm-64gb',          's-16vcpu-64gb',
            'c-16',           '32gb',            'm-8vcpu-64gb',
            'm3-8vcpu-64gb',  'g-16vcpu-64gb',   's-20vcpu-96gb',
            '48gb',           'gd-16vcpu-64gb',  'm6-8vcpu-64gb',
            'm-128gb',        's-24vcpu-128gb',  'c-32',
            '64gb',           'm-16vcpu-128gb',  'm3-16vcpu-128gb',
            's-32vcpu-192gb', 'm6-16vcpu-128gb'
          ],
        default: `512mb`

    },


    {
        type: 'confirm',
        name: 'backups',
        message: 'Do you need backup?',
        default: false,
    }, {
        type: 'confirm',
        name: 'ipv6',
        message: 'Do you need ipv6 support?',
        default: false,
    },
    {
        type: 'confirm',
        name: 'private_networking',
        message: 'Do you need private networking?',
        default: false,
    },
    {
        type: 'confirm',
        name: 'monitoring',
        message: 'Do you need any monitoring',
        default: false,
    },

];
/*The propmpt as questions about the server configuration and pipes the answers as options
If any of the properties in the answers hash is incorrect the digital ocean server will respond with an error 
*/
inquirer.prompt(questions).then((answers) => {

    let jsonanwers = answers;
    //for debug purpose only To do uncomment when done
    //console.log(answers)
    instance.droplets.create(jsonanwers).then(data => {
        console.info(`::::wohh the image has been created to do something ambicious check your email to get the password::`)
        //console.log(data)
    }).catch(err => {
        console.error(err.response.body)
    })


});

