export default {
    //full page title
    appFullTitle: ['RISIS SMS Platform -> Linked Data Reactor'],
    //short page title
    appShortTitle: ['SMS-LDR'],

    //Default Dataset under observation, if not set , will consider all existing graph names
    defaultDatasetURI: ['http://ld-r.org/default'],

    //will prevent access if not logged in
    enableAuthentication: 1,
    //graph that stores users data, must be loaded beforehand
    authDatasetURI: ['http://rdf.risis.eu/sms/users.ttl#'],
    //will allow super users to confirm and activate regiastered users
    enableUserConfirmation: 1,
    //if enabled will allow a recaptcha box in the registration form
    //note: if it is enabled, you need to set the key parameteres for recaptcha in the  server.js file
    useGoogleRecaptcha: 0,

    //the domain name under which basic dynamic resources and user resources will be defined
    baseResourceDomain: ['http://ld-r.org'],

    //will enable email notifications
    enableEmailNotifications: 0,

    //will put all update actions in log folder
    enableLogs: 0,

    //if provided will track the users on your LD-R instance
    googleAnalyticsID: '',

    //if set, will use the configs stored in a triple store
    enableDynamicServerConfiguration: 1,
    enableDynamicReactorConfiguration: 1,
    enableDynamicFacetsConfiguration: 1,
    //if set, wil allow users to create new datasets
    //only works if enableDynamicReactorConfiguration is set to 1 and triple store allows update qureies
    enableAddingNewDatasets: 1,
    //graph that stores your configurations
    configDatasetURI: ['http://ld-r.org/configurations'],
    //will enable/disable auto config
    enableAutomaticConfiguration: 0
};
