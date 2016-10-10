export default {
    //full page title
    appFullTitle: ['RISIS SMS Platform -> Linked Data Reactor'],
    //short page title
    appShortTitle: ['SMS-LDR'],
    //Default Named Graph under observation, if not set , will consider all existing graph names
    defaultGraphName: [''],
    //will prevent access if not logged in
    enableAuthentication: 1,
    //graph that stores users data, must be loaded beforehand
    authGraphName: ['http://rdf.risis.eu/sms/users.ttl#'],
    //the domain name under which basic dynamic resources and user resources will be defined
    baseResourceDomain: ['http://ld-r.org'],
    //will allow super users to confirm and activate regiastered users
    enableUserConfirmation: 1,
    //will enable email notifications
    enableEmailNotifications: 0,
    //will put all update actions in log folder
    enableLogs: 0,
    //if provided will track the users on your LD-R instance
    googleAnalyticsID: ''
};
